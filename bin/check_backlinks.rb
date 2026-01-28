#!/usr/bin/env ruby
# frozen_string_literal: true

# Script to check if PR changes might break backlinks
# Usage:
#   # Check current branch against main
#   bin/check_backlinks.rb
#
#   # Check specific branch against main
#   bin/check_backlinks.rb feature-branch
#
#   # Check specific commit range
#   bin/check_backlinks.rb main..feature-branch

require 'open3'

class BacklinkChecker
  def initialize(base_branch = 'main')
    @base_branch = base_branch
    @redirects = load_redirects
    @issues = []
  end

  def check
    puts "Checking for potential backlink issues..."
    puts "=" * 80

    changed_files = get_changed_files
    return if changed_files.empty?

    check_renamed_files(changed_files)
    check_deleted_files(changed_files)
    check_moved_files(changed_files)
    check_category_yaml_changes(changed_files)
    check_category_name_changes(changed_files)

    print_summary
  end

  private

  def load_redirects
    redirects = {}
    redirect_file = File.join(__dir__, '..', '_redirects')

    if File.exist?(redirect_file)
      File.readlines(redirect_file).each do |line|
        line = line.strip
        next if line.empty? || line.start_with?('#')

        parts = line.split(/\s+/)
        next unless parts.length >= 2

        old_path = parts[0].gsub(/\/index\.html$/, '/').gsub(/\/$/, '')
        new_path = parts[1]
        redirects[old_path] = new_path
      end
    end

    redirects
  end

  def get_changed_files
    range = get_git_range

    if range
      stdout, _stderr, status = Open3.capture3("git diff --name-status --diff-filter=ADRM #{range}")
    else
      # Check both staged and unstaged changes
      staged, _ = Open3.capture2("git diff --name-status --cached --diff-filter=ADRM")
      unstaged, _ = Open3.capture2("git diff --name-status --diff-filter=ADRM")
      stdout = staged + unstaged
      status = Open3.capture3("git diff --quiet && git diff --cached --quiet")[2]
    end

    return [] if stdout.empty?

    stdout.lines.map(&:strip).reject(&:empty?)
  end

  def file_to_url(file_path)
    return nil unless file_path.start_with?('content/articles/')
    return nil unless file_path.end_with?('.md')

    # Convert: content/articles/article-name.md -> /articles/article-name/
    article_name = file_path.gsub('content/articles/', '').gsub('.md', '')
    "/articles/#{article_name}/"
  end

  def check_renamed_files(changed_files)
    renamed = changed_files.select { |line| line.start_with?('R') }

    renamed.each do |line|
      parts = line.split(/\t/)
      next unless parts.length >= 3

      old_file = parts[1]
      new_file = parts[2]

      next unless old_file.start_with?('content/articles/') && old_file.end_with?('.md')

      old_url = file_to_url(old_file)
      new_url = file_to_url(new_file)

      if old_url && !@redirects.key?(old_url) && !@redirects.key?("#{old_url}index.html")
        @issues << {
          type: :renamed,
          severity: :high,
          old_file: old_file,
          new_file: new_file,
          old_url: old_url,
          new_url: new_url,
          message: "File renamed without redirect: #{old_file} -> #{new_file}"
        }
      elsif old_url
        @issues << {
          type: :renamed,
          severity: :info,
          old_file: old_file,
          new_file: new_file,
          old_url: old_url,
          new_url: new_url,
          message: "File renamed (redirect exists): #{old_file} -> #{new_file}"
        }
      end
    end
  end

  def check_deleted_files(changed_files)
    deleted = changed_files.select { |line| line.start_with?('D') }

    deleted.each do |line|
      parts = line.split(/\t/)
      next unless parts.length >= 2

      file = parts[1]
      next unless file.start_with?('content/articles/') && file.end_with?('.md')

      url = file_to_url(file)

      if url && !@redirects.key?(url) && !@redirects.key?("#{url}index.html")
        @issues << {
          type: :deleted,
          severity: :high,
          file: file,
          url: url,
          message: "Article deleted without redirect: #{file} (#{url})"
        }
      elsif url
        @issues << {
          type: :deleted,
          severity: :info,
          file: file,
          url: url,
          message: "Article deleted (redirect exists): #{file} (#{url})"
        }
      end
    end
  end

  def check_moved_files(changed_files)
    # Files that were added in a new location (might be moved)
    added = changed_files.select { |line| line.start_with?('A') }
    deleted = changed_files.select { |line| line.start_with?('D') }

    # Simple heuristic: if a file with similar name was deleted and added
    # in a different location, it might be a move
    added.each do |add_line|
      add_parts = add_line.split(/\t/)
      next unless add_parts.length >= 2

      new_file = add_parts[1]
      next unless new_file.start_with?('content/articles/') && new_file.end_with?('.md')

      new_basename = File.basename(new_file, '.md')
      new_dir = File.dirname(new_file)

      deleted.each do |del_line|
        del_parts = del_line.split(/\t/)
        next unless del_parts.length >= 2

        old_file = del_parts[1]
        next unless old_file.start_with?('content/articles/') && old_file.end_with?('.md')

        old_basename = File.basename(old_file, '.md')

        # If same basename but different directory, it's likely a move
        if new_basename == old_basename && new_dir != File.dirname(old_file)
          old_url = file_to_url(old_file)
          new_url = file_to_url(new_file)

          if old_url && !@redirects.key?(old_url) && !@redirects.key?("#{old_url}index.html")
            @issues << {
              type: :moved,
              severity: :high,
              old_file: old_file,
              new_file: new_file,
              old_url: old_url,
              new_url: new_url,
              message: "Article moved without redirect: #{old_file} -> #{new_file}"
            }
          end
        end
      end
    end
  end

  def category_name_to_url(category_name)
    # Convert "Domain Transfers" -> "/categories/domain-transfers/"
    slug = category_name.downcase.tr(' ', '-')
    "/categories/#{slug}/"
  end

  def check_category_yaml_changes(changed_files)
    # Check for deleted/renamed category YAML files
    deleted = changed_files.select { |line| line.start_with?('D') }
    renamed = changed_files.select { |line| line.start_with?('R') }

    deleted.each do |line|
      parts = line.split(/\t/)
      next unless parts.length >= 2
      
      file = parts[1]
      next unless file && file.start_with?('categories/') && file.end_with?('.yaml')
      next if file == 'categories/meta.yaml' # meta.yaml doesn't affect URLs

      category_name = File.basename(file, '.yaml').tr('_', ' ').split.map(&:capitalize).join(' ')
      category_url = category_name_to_url(category_name)

      @issues << {
        type: :category_yaml_deleted,
        severity: :warning,
        file: file,
        category_name: category_name,
        category_url: category_url,
        message: "Category YAML file deleted: #{file} (category: #{category_name})"
      }
    end

    renamed.each do |line|
      parts = line.split(/\t/)
      next unless parts.length >= 3
      
      old_file = parts[1]
      new_file = parts[2]
      next unless old_file && old_file.start_with?('categories/') && old_file.end_with?('.yaml')
      next if old_file == 'categories/meta.yaml' # meta.yaml doesn't affect URLs

      old_category_name = File.basename(old_file, '.yaml').tr('_', ' ').split.map(&:capitalize).join(' ')
      new_category_name = File.basename(new_file, '.yaml').tr('_', ' ').split.map(&:capitalize).join(' ')
      old_category_url = category_name_to_url(old_category_name)
      new_category_url = category_name_to_url(new_category_name)
      
      if old_category_url != new_category_url
        @issues << {
          type: :category_yaml_renamed,
          severity: :warning,
          old_file: old_file,
          new_file: new_file,
          old_category_url: old_category_url,
          new_category_url: new_category_url,
          message: "Category YAML file renamed: #{old_file} -> #{new_file}"
        }
      end
    end
  end

  def get_git_range
    if ARGV[0] && ARGV[0].include?('..')
      ARGV[0]
    elsif ARGV[0]
      "#{@base_branch}..#{ARGV[0]}"
    else
      current_branch = `git rev-parse --abbrev-ref HEAD`.strip
      if current_branch == 'main' || current_branch == 'master'
        nil # Will use HEAD for unstaged/staged changes
      else
        "#{@base_branch}..#{current_branch}"
      end
    end
  end

  def check_category_name_changes(changed_files)
    # Check for articles that changed their category frontmatter
    modified = changed_files.select { |line| line.start_with?('M') }

    range = get_git_range
    return if modified.empty?

    modified.each do |line|
      parts = line.split(/\t/)
      next unless parts.length >= 2

      file = parts[1]
      next unless file.start_with?('content/articles/') && file.end_with?('.md')

      # Get the diff to see category changes
      if range
        diff, _ = Open3.capture2("git diff #{range} -- #{file}")
      else
        # Check staged and unstaged changes
        staged_diff, _ = Open3.capture2("git diff --cached -- #{file}")
        unstaged_diff, _ = Open3.capture2("git diff -- #{file}")
        diff = staged_diff + unstaged_diff
      end
      
      # Check if categories changed
      old_categories = extract_categories_from_diff(diff, :old)
      new_categories = extract_categories_from_diff(diff, :new)

      removed_categories = old_categories - new_categories
      removed_categories.each do |category|
        category_url = category_name_to_url(category)
        
        # Check if this category URL needs a redirect
        if !@redirects.key?(category_url) && !@redirects.key?("#{category_url}index.html")
          # Check if there's a new category to redirect to
          added_categories = new_categories - old_categories
          redirect_to = added_categories.any? ? category_name_to_url(added_categories.first) : nil

          @issues << {
            type: :category_removed,
            severity: :high,
            file: file,
            category_name: category,
            category_url: category_url,
            redirect_to: redirect_to,
            message: "Article removed from category '#{category}' without redirect: #{file}"
          }
        end
      end
    end
  end

  def extract_categories_from_diff(diff, side)
    categories = []
    in_categories = false
    categories_block = []

    diff.lines.each do |line|
      # Look for the categories: line (can be context line or modified line)
      if line.match?(/categories:/)
        in_categories = true
        categories_block = []
      elsif in_categories
        # Collect lines that are part of the categories block
        # These are lines that start with + or - (diff markers) followed by YAML list items
        if line.match?(/^[\+\-]\s*-\s*/) || line.match?(/^[\+\-]\s*["']/)
          categories_block << line
        elsif line.match?(/^[\+\-]---/) || (line.match?(/^[\+\-][a-z_]+:/) && !line.match?(/^[\+\-]\s*-/))
          # End of categories block - hit next frontmatter key or end of frontmatter
          in_categories = false
          categories.concat(parse_categories_block(categories_block, side))
          categories_block = []
        elsif !line.start_with?('+') && !line.start_with?('-') && !line.start_with?(' ') && !line.start_with?('@@') && !line.start_with?('diff') && !line.start_with?('index') && !line.start_with?('---') && !line.start_with?('+++')
          # End of categories block - hit non-diff line
          in_categories = false
          categories.concat(parse_categories_block(categories_block, side))
          categories_block = []
        end
      end
    end

    # Handle case where diff ends in categories block
    if in_categories && categories_block.any?
      categories.concat(parse_categories_block(categories_block, side))
    end

    categories.uniq
  end

  def parse_categories_block(block, side)
    categories = []
    prefix = side == :old ? '-' : '+'
    
    block.each do |line|
      next unless line.start_with?(prefix)
      
      # Match lines like: 
      # - - Domain Transfers (diff shows old line with YAML list marker)
      # + - Domains (diff shows new line with YAML list marker)
      # The first +/- is the diff marker, the second - is the YAML list marker
      if match = line.match(/^#{Regexp.escape(prefix)}\s*-\s*["']?(.+?)["']?\s*$/)
        category = match[1].strip
        categories << category unless category.empty?
      end
    end
    
    categories
  end

  def print_summary
    if @issues.empty?
      puts "\n✅ No potential backlink issues found!"
      puts "All renamed/deleted articles have redirects in _redirects"
      return
    end

    high_severity = @issues.select { |i| i[:severity] == :high }
    warning_severity = @issues.select { |i| i[:severity] == :warning }
    info_severity = @issues.select { |i| i[:severity] == :info }

    if high_severity.any?
      puts "\n⚠️  POTENTIAL BACKLINK ISSUES FOUND:"
      puts "=" * 80
      high_severity.each do |issue|
        puts "\n[#{issue[:type].to_s.upcase}] #{issue[:message]}"
        if issue[:old_url]
          puts "  Old URL: #{issue[:old_url]}"
        end
        if issue[:category_url]
          puts "  Category URL: #{issue[:category_url]}"
        end
        if issue[:new_url]
          puts "  New URL: #{issue[:new_url]}"
        end
        if issue[:redirect_to]
          puts "  Suggested redirect to: #{issue[:redirect_to]}"
        end
        puts "\n  Action required: Add redirect to _redirects file:"
        if issue[:new_url] && issue[:old_url]
          puts "    #{issue[:old_url]}  #{issue[:new_url]}"
          puts "    #{issue[:old_url]}index.html  #{issue[:new_url]}"
        elsif issue[:category_url] && issue[:redirect_to]
          puts "    #{issue[:category_url]}  #{issue[:redirect_to]}"
          puts "    #{issue[:category_url]}index.html  #{issue[:redirect_to]}"
        elsif issue[:category_url]
          puts "    #{issue[:category_url]}  <new-category-url>"
          puts "    #{issue[:category_url]}index.html  <new-category-url>"
        end
      end
    end

    if warning_severity.any?
      puts "\n⚠️  WARNINGS (may need attention):"
      warning_severity.each do |issue|
        puts "\n[#{issue[:type].to_s.upcase}] #{issue[:message]}"
        if issue[:category_url]
          puts "  Category URL: #{issue[:category_url]}"
        end
        if issue[:old_category_url] && issue[:new_category_url]
          puts "  Old category URL: #{issue[:old_category_url]}"
          puts "  New category URL: #{issue[:new_category_url]}"
          puts "  Action: If articles are being moved to a new category, add redirect:"
          puts "    #{issue[:old_category_url]}  #{issue[:new_category_url]}"
          puts "    #{issue[:old_category_url]}index.html  #{issue[:new_category_url]}"
        end
        puts "  Note: Check if any articles still use this category name"
      end
    end

    if info_severity.any?
      puts "\nℹ️  Redirects already exist for:"
      info_severity.each do |issue|
        puts "  - #{issue[:message]}"
      end
    end

    if high_severity.any?
      puts "\n" + "=" * 80
      puts "Total issues requiring attention: #{high_severity.length}"
      exit 1
    end
  end
end

if __FILE__ == $PROGRAM_NAME
  checker = BacklinkChecker.new
  checker.check
end
