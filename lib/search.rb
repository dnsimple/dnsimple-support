require 'json'

module Search
  include Nanoc::Helpers::Text

  def create_search_index
    json = generate_json(@items)
    write_json_file json
    write_js_file json
  end

  private

  def generate_json(items = [])
    index = []

    items.each do |item|
      if item.identifier.to_s.start_with?("/articles/")
        index << {
          id: item.path,
          title: item.attributes[:title],
          excerpt: item[:excerpt],
          categories: item[:categories],
          body: item.compiled_content,
        }
      end
    end

    JSON.generate(index)
  end

  def write_json_file(json)
    index_file = File.join(@config[:output_dir], "search.json")
    File.write(index_file, json)
  end

  def write_js_file(json)
    js_file = File.join(@config[:output_dir], "search.js")
    js_lines = File.open(js_file).readlines.map(&:chomp)
    js_lines[0] = "var articles = #{json};"

    dictionary_file = File.join(@config[:output_dir], "search-dictionary.json")
    dictionary = File.open(dictionary_file).read
    js_lines[1] = "var dictionary = #{dictionary};"

    File.write(js_file, js_lines.join("\n"))
  end

end

include Search
