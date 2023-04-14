# frozen_string_literal: true

require 'test_helper'

describe 'File names' do
  it 'checks that markdown file names are set to lowercase' do
    Dir.glob('content/**/*.markdown').each do |file|
      assert_equal file, file.downcase, 'Markdown file name must be lowercase or it creates 3xx redirects in our sitemap. This is bad for SEO. Thank you!'
    end
  end
end
