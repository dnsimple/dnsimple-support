include Nanoc3::Helpers::Rendering

def articles
  @items.select { |item| item[:kind] == 'article' }
end
