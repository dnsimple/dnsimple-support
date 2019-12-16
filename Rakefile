require 'rubygems'
require 'bundler/setup'
require 'rake/testtask'
require 'fileutils'


task :default => [:test, :compile]

desc "Compile the site"
task :compile => [:clean] do
  puts "Compiling site"
  Bundler.with_clean_env do
    yarn = sh(*%w(yarn))
    build = sh(*%w(yarn build))
    compile = sh(*%w(bundle exec nanoc compile))
  end

  FileUtils.cp_r 'dist', 'output'

  if $?.to_i == 0
    puts  "Compilation succeeded"
  else
    abort "Compilation failed: #{$?.to_i}\n #{yarn}\n #{build}\n #{compile}\n"
  end
end

desc "Publish to S3"
task :publish => [:compile, :imgoptim] do
  puts "Publishing to S3 is done from Travis"
end

desc "Remove the compilation artifacts"
task :clean do
  FileUtils.rm_r('output') if File.exist?('output')
  FileUtils.rm_r('dist') if File.exist?('dist')
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
  @site = Nanoc::Int::SiteLoader.new.new_from_cwd

  priorities = Priorities.new
  priorities.update_all(
      'categories'  => @site.items.lazy.select { |item| item.identifier.to_s.start_with?("/categories/") }.map { |item| item.identifier.to_s }.to_a,
      'articles'    => @site.items.lazy.select { |item| item.identifier.to_s.start_with?("/articles/") }.map { |item| item.identifier.to_s }.to_a,
  )
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
