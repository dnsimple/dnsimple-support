require 'rubygems'
require 'bundler/setup'
require 'fileutils'


desc "Compile the site"
task :compile do
  puts "Compiling site"
  FileUtils.rm_r('output') if File.exist?('output')
  `nanoc compile`
end

desc "Publish to S3"
task :'publish' => :compile do
  puts "Publishing to S3"
  puts `s3_website push`
  puts "Published"
end

task :environment do
  require 'nanoc'
end

task :priorities => :environment do
  require 'yaml'
  require 'set'
  @site = Nanoc::Site.new('.')
  @site.load

  priorities = Priorities.new
  priorities.update_all(
      'categories'  => @site.items.lazy.select { |item| item.identifier.start_with?("/categories/") }.map(&:identifier).to_a,
      'articles'    => @site.items.lazy.select { |item| item.identifier.start_with?("/articles/") }.map(&:identifier).to_a,
  )
end

