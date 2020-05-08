require 'json'

module Search
  include Nanoc::Helpers::Text

  def create_search_index
    index = []
    @items.each do |item|
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

    index_file = File.join(@config[:output_dir], "search.json")
    File.write(index_file, JSON.generate(index))
  end

end

include Search
