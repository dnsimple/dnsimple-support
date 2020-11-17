require 'rubygems'
require 'bundler/setup'
require 'rake/testtask'
require 'fileutils'
require 'open3'

PUBLISH_DIRECTORY = "output"
BUILD_YARN_DIRECTORY = "dist"

task default: [:test]

desc "Compile the site"
task compile: [:clean] do
  puts "Compiling site"

  stdout, stderr, status = Bundler.with_clean_env do
    Open3.capture3("yarn && yarn build && bundle exec nanoc compile")
  end
  if status.success?
    puts  "Compilation succeeded"
  else
    abort "ERROR: Compilation failed (#{$?.to_i}\n#{stdout}\n#{stderr}"
  end

  FileUtils.cp_r BUILD_YARN_DIRECTORY, PUBLISH_DIRECTORY
  FileUtils.cp_r '_redirects', PUBLISH_DIRECTORY
end

desc "Publish"
task publish: [:test] do
  puts "Published"
end

desc "Remove the compilation artifacts"
task :clean do
  FileUtils.rm_r(PUBLISH_DIRECTORY) if File.exist?(PUBLISH_DIRECTORY)
  FileUtils.rm_r(BUILD_YARN_DIRECTORY) if File.exist?(BUILD_YARN_DIRECTORY)
end

namespace :test do
  Rake::TestTask.new(:ruby) do |t|
    t.libs << "_test"
    t.test_files = FileList["_test/*_test.rb"]
    t.verbose = true
  end

  desc "Run YARN test"
  task :yarn_test do
    sh("yarn test")
  end

  desc "Run YARN tests"
  task :yarn_lint do
    sh("yarn lint")
  end

  task :all => [:ruby, :yarn_test, :yarn_lint]
end

task :test => [:compile, "test:all"]

task :priorities do
  require 'nanoc'
  require 'yaml'
  require 'set'
  @site = Nanoc::Int::SiteLoader.new.new_from_cwd

  priorities = Priorities.new
  priorities.update_all(
      'categories'  => @site.items.lazy.select { |item| item.identifier.to_s.start_with?("/categories/") }.map { |item| item.identifier.to_s }.to_a,
      'articles'    => @site.items.lazy.select { |item| item.identifier.to_s.start_with?("/articles/") }.map { |item| item.identifier.to_s }.to_a,
  )
end
