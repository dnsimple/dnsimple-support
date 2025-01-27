# frozen_string_literal: true

require "test_helper"

describe "Images" do
  it "checks that image sizes are not over 500 KB" do
    Dir.glob("content/files/**/*.{jpg,jpeg,png}").each do |file|
      size_kb = File.size(file) / 1000
      assert_equal(true, size_kb <= 500, "File size of #{file} is #{size_kb} KB, which is over 500 KB. Resize the image and/or use https://tinypng.com to compress it further.")
    end
  end

  it "ensures all images are referenced in Markdown files" do
    image_files = Dir.glob("content/files/**/*.{jpg,jpeg,png}")
    markdown_files = Dir.glob("content/**/*.md")
    referenced_images = Set.new

    markdown_files.each do |file|
      content = File.read(file)
      content.scan(/\!\[.*?\]\((.*?)\)/).each do |match| # Match Markdown image syntax ![alt](path)
        referenced_images << match[0]
      end
    end

    unused_images = image_files.reject do |image|
      referenced_images.any? { |ref| ref == image.sub("content", "") }
    end

    assert_equal(0, unused_images.count, "The following images are not used in any Markdown file: #{unused_images}")
  end
end
