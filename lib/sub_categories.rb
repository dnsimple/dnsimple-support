require 'yaml'

class SubCategories
  def initialize
    @cache = {}
  end

  def show(what, items)
    @content = {}

    if File.file?(file_path(what))
      yaml = YAML.load(File.read(file_path(what)))
      @content = yaml.clone

      items.each do |item|
        item_found = false
        title = item.attributes[:title]

        yaml.each do |key, value|
          if value.is_a?(Hash)
            # Handle nested structure (e.g., "How-to" => { "Section" => [...] })
            value.each do |nested_key, nested_array|
              if nested_array.is_a?(Array)
                index = nested_array.find_index(title)
                if !index.nil?
                  @content[key][nested_key][index] = item
                  item_found = true
                  break
                end
              end
            end
          elsif value.is_a?(Array)
            # Handle flat structure (e.g., "Section" => [...])
            index = value.find_index(title)
            if !index.nil?
              @content[key][index] = item
              item_found = true
              break
            end
          end
        end

        unless item_found
          unless @content.keys.include?('Other')
            @content["Other"] = []
          end
          @content["Other"] << item
        end
      end
    else
      @content["Other"] = items
    end
    @content
  end

  private

  def file_path(what)
    file = what.split(" ").join("_").downcase
    "categories/#{file}.yaml".freeze
  end
end
