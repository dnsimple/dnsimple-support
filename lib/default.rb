include Nanoc3::Helpers::Rendering

def articles
  @items.select { |item| item.identifier.start_with?("/article") }
end
