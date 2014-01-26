class Priorities

  def file_path
    "priorities.yaml".freeze
  end

  def update(sections = {})
    content = sections.inject({}) do |data, (what, identifiers)|
      data[what] = merge(read[what], identifiers)
      data
    end
    write(content)
  end

  def sort(what, items)
    index = index_for(what.to_s)
    items.sort_by { |item| index[block_given? ? yield(item) : item.identifier] || items.size }
  end


  private

  def read
    @read ||= YAML.load(File.read(file_path))
  end

  def write(content)
    File.write(file_path, YAML.dump(content))
  end

  def merge(set, all)
    existing = Set.new(set)
    existing.merge(all).to_a
  end

  def index_for(what)
    index = {}
    return index if read[what].nil?

    read[what].each_with_index { |identifier, i| index[identifier] = i }
    index
  end

end
