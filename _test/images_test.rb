# frozen_string_literal: true

require 'test_helper'

describe 'Images' do
  it 'checks that image sizes are not over 500 KB' do
    Dir.glob('content/files/**/*.{jpg,jpeg,png}').each do |file|
      size_kb = File.size(file) / 1000
      assert_equal(true, size_kb <= 500, "File size of #{file} is #{size_kb} KB, which is over 500 KB. Resize the image and/or use https://tinypng.com to compress it further.")
    end
  end
end
