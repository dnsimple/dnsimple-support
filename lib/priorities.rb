class Priorities

  def initialize
    @cache = {}
  end

  def update(what, identifiers)
    write(what, merge(read(what), identifiers))
  end

  def update_all(sections = {})
    sections.each do |(what, identifiers)|
      update(what, identifiers)
    end
  end

  def sort(what, items)
    index = index_for(what.to_s)
    items.sort_by { |item| index[block_given? ? yield(item) : item.identifier] || index.size }
  end


  private

  def file_path(what)
    "priorities/#{what}.yaml".freeze
  end

  def read(what)
    @cache[what] ||= YAML.load(File.read(file_path(what))) rescue []
  end

  def write(what, content)
    File.write(file_path(what), YAML.dump(content))
  end

  def merge(set, all)
    existing = Set.new(set)
    existing.merge(all).to_a
  end

  def index_for(what)
    index = {}
    return index if read(what).nil?

    read(what).each_with_index { |identifier, i| index[identifier] = i }
    index
  end

end
