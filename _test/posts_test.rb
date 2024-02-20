# frozen_string_literal: true

require "test_helper"

describe "Content" do
  it "checks for banned characters in markdown files" do
    banned_characters = [
      "\u201C", # U+201C "
      "\u201D", # U+201D "
      "\u201E", # U+201E „
      "\u2018", # U+2018 ‘
      "\u2019", # U+2019 ’
      "\u201A", # U+201A ‚
      "\u201B", # U+201B ‛
      "\u2026" # U+2020 …
    ]

    regexp   = /[#{banned_characters.join}]/
    affected = []

    Dir.glob("content/**/*.md").each do |path|
      File.readlines(path).each do |line|
        affected << [path, line] if regexp.match(line)
      end
    end

    message = "#{affected.size} lines contain banned characters:\n"
    affected.each_with_index do |(path, line), index|
      message << "#{index + 1}. #{path} -> #{line}"
    end

    assert_equal 0, affected.size, message
  end
end

describe "Links" do
  it "ensures that links are valid" do
    regexp = /(?<!\!)\[.*\]\((?!(http|\/\/|\/\d{4}|\/files|mailto|#|\/assets|\/category)([^\)]*)\))/i

    affected = []

    Dir.glob("content/**/*.md").each do |path|
      next unless File.file?(path)

      File.readlines(path).each do |line|
        affected << [path, line] if regexp.match(line)
      end
    end

    message = "#{affected.size} lines contain invalid links:\n"
    affected.each_with_index do |(path, line), index|
      message << "#{index + 1}. #{path} -> #{line}"
    end

    assert_equal 0, affected.size, message
  end
end

describe "Files" do
  it "checks that markdown file names are set to lowercase" do
    Dir.glob("content/**/*.md").each do |path|
      assert_equal path, path.downcase, "Markdown file name must be lowercase or it creates 3xx redirects in our sitemap. This is bad for SEO. Thank you!"
    end
  end

  it "checks there are no files with .markdown extension" do
    files_count = Dir.glob("content/**/*.markdown").count
    assert_equal 0, files_count, "Markdown file extension must be .md"
  end
end
