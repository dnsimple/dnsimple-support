include Nanoc::Helpers::Rendering
include Nanoc::Helpers::XMLSitemap

def articles
  @items.select { |item| item.identifier.to_s.start_with?("/article") }
end

def prioritize(what, items, &block)
  Priorities.new.sort(what, items, &block)
end

POPS = [
  'San Jose, CA, USA',
  'Chicago, IL, USA',
  'Ashburn, VA, USA',
  'Amsterdam, Netherlands',
  'Tokyo, Japan',
  'Sydney, Australia',
  'Paris, France',
  'Frankfurt, Germany'
].freeze
