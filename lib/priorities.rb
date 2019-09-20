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
    items.sort_by do |item|
      # Get the identifier of the article.
      # Then check if the identifier is in the priority index, in that case uses its position in the index.
      # Otherwise compute the final position using the index size (the final position) + the name,
      # that will guarantee the non-priority articles to be appended at the end, ordered by path alphabetically.
      identifier = block_given? ? yield(item) : item.identifier.to_s
      (index[identifier] || "#{index.size}-#{identifier}").to_s
    end
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
