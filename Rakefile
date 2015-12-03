require 'rubygems'
require 'bundler/setup'
require 'rake/testtask'
require 'fileutils'


desc "Compile the site"
task :compile do
  puts "Compiling site"
  FileUtils.rm_r('output') if File.exist?('output')
  `nanoc compile`
end

desc "Publish to S3"
task :publish => [:compile, :search] do
  puts "Publishing to S3"
  puts `s3_website push`
  puts "Published"
end

task :default => [:test]
Rake::TestTask.new do |t|
  t.libs << "_test"
  t.test_files = FileList["_test/*_test.rb"]
  t.verbose = true
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

task :search => :environment do
  puts "creating search index"
  require 'json'
  @site = Nanoc::Site.new('.')
  @site.load

  index = []

  @site.items.each do |item|
    if item.identifier.start_with?("/articles/")
      item = {
        id: item.identifier,
        title: item.attributes[:title],
        body: item.raw_content
      }
      index << item
    end
  end

  index_file = File.join(@site.config[:output_dir], "search.json")

  File.open(index_file, 'w') do |file|
    file.write(JSON.generate(index))
  end

end

task :imgoptim do
  puts "***"
  puts "Optimizing images... Grab some popcorn, this might take a while!"
  puts "***"
  require 'image_optim'
  image_optim = ImageOptim.new(:pngout => false)
  image_optim.optimize_images!(Dir['content/files/*.*']) do |file|
    puts file
  end
end
