require "nanoc"
require "json"

class SearchIndexFilter < Nanoc3::Filter
  identifier :search_index

  def run(content, params = {})
    html = Nokogiri::HTML(content)
    url = assigns[:item_rep].path
    document = {
      id: url,
      title: html.xpath("//h1").text.strip,
      subtitle: html.xpath("//h2").text.strip,
      body: html.css("#main").text.strip.gsub('\r', ' ').gsub('\n', ' ')
    }

    search_file = File.join(@site.config[:output_dir], "search.json")

    if File.exist?(search_file)
      documents = JSON.parse(File.read(search_file))
    else
      documents = []
    end

    documents << document

    File.open(search_file, 'w') do |file|
      file.write(JSON.pretty_generate(documents))
    end

    content
  end

end
