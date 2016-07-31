require 'rubygems'
require 'bundler/setup'
require 'rake/testtask'
require 'fileutils'


task :default => [:test, :compile]

desc "Compile the site"
task :compile => [:clean] do
  puts "Compiling site"
  out = `bundle exec nanoc compile`

  if $?.to_i == 0
    puts  "Compilation succeeded"
  else
    abort "Compilation failed: #{$?.to_i}\n" +
          "#{out}\n"
  end
end

desc "Publish to S3"
task :publish => [:compile, :search, :imgoptim] do
  puts "Publishing to S3"
  puts `s3_website push`
  puts "Published"
end

desc "Remove the compilation artifacts"
task :clean do
  FileUtils.rm_r('output') if File.exist?('output')
end

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
      'categories'  => @site.items.lazy.select { |item| item.identifier.to_s.start_with?("/categories/") }.map(&:identifier).to_a,
      'articles'    => @site.items.lazy.select { |item| item.identifier.to_s.start_with?("/articles/") }.map(&:identifier).to_a,
  )
end

task :search => :environment do
  puts "creating search index"
  require 'json'
  @site = Nanoc::Site.new('.')
  @site.load

  index = []

  @site.items.each do |item|
    if item.identifier.to_s.start_with?("/articles/")
      item = {
        id: item.identifier,
        title: item.attributes[:title],
        body: item.raw_content
      }
      index << item
    end
  end

  index_file = File.join(@config[:output_dir], "search.json")

  File.open(index_file, 'w') do |file|
    file.write(JSON.generate(index))
  end

end

desc "Optimizes the image size in /files"
task :imgoptim do
  require 'image_optim'

  image_optim = ImageOptim.new(advpng: false,
                               gifsicle: false,
                               optipng: false,
                               pngout: false,
                               jhead: false,
                               jpegrecompress: false,
                               jpegtran: false,
                               svgo: false)

  puts "Searching for images to optimize..."
  image_optim.optimize_images!(Dir['output/files/*.*']) do |unoptimized, optimized|
    if optimized
      puts "Optimized #{optimized}"
    end
  end
  puts "All images optimized!"
end
