# frozen_string_literal: true

require 'json'
require 'erb'

module Search
  include Nanoc::Helpers::Text

  def create_search_index
    write_js_file
    write_json_file
  end

  private

  def write_json_file
    index_file = File.join(@config[:output_dir], 'search.json')
    File.write(index_file, articles_json)
  end

  def write_js_file
    create_from_template(
      'search.js.erb',
      'search.js',
      articles: articles_json,
      dictionary: dictionary_json
    )
  end

  def get_template_content(template_name, data = {})
    template = File.read(File.join(@config[:output_dir], "../templates/#{template_name}"))
    renderer = ERB.new(template)
    renderer.result_with_hash(data).chomp.delete!("\n")
  end

  def create_from_template(template_name, output_file, data = {})
    output_file = File.join(@config[:output_dir], output_file)
    File.write(
      output_file,
      get_template_content(template_name, data)
    )
  end

  def articles_json
    @articles_json ||= begin
      index = []

      @items.each do |item|
        next unless item.identifier.to_s.start_with?('/articles/')

        index << {
          id: item.path,
          title: item.attributes[:title],
          excerpt: item[:excerpt],
          categories: item[:categories],
          body: item.compiled_content
        }
      end

      JSON.generate(index)
    end
  end

  def dictionary_json
    @dictionary_json ||= begin
      get_template_content 'dictionary.json.erb'
    end
  end
end

include Search
