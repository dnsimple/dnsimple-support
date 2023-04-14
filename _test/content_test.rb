# frozen_string_literal: true

require 'test_helper'

describe 'Content' do
  it 'checks for banned characters in markdown files' do
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

    Dir['content/**/*.markdown'].each do |path|
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
