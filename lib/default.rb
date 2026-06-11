require 'kramdown'

include Nanoc::Helpers::Rendering
include Nanoc::Helpers::XMLSitemap

def articles
  @items.select { |item| item.identifier.to_s.start_with?('/article') }
end

def prioritize(what, items, &block)
  Priorities.new.sort(what, items, &block)
end

def sub_categories(what, items, &block)
  SubCategories.new.show(what, items, &block)
end

def as_markdown(str)
  Kramdown::Document.new(str).to_html
end

POPS = [
  'Amsterdam, Netherlands',
  'Atlanta, Georgia, USA',
  'Chicago, Illinois, USA', 
  'Dallas, Texas, USA',
  'Frankfurt, Germany',
  'London, UK',
  'Los Angeles, California, USA',
  'Miami, Florida, USA',
  'Paris, France',
  'San Jose, California, USA',
  'Santiago, Chile',
  'Singapore',
  'Sydney, Australia',
  'São Paulo, Brazil',
  'Tokyo, Japan',
  'Warsaw, Poland'
].freeze

# Regions a record can be pinned to with the regional records feature. This is a
# dnsimple-app, the authoritative list the app/API accepts.
REGIONAL_RECORD_REGIONS = [
  'Amsterdam, Netherlands',
  'Ashburn, Virginia, USA',
  'Chicago, Illinois, USA',
  'Frankfurt, Germany',
  'Paris, France',
  'San Jose, California, USA',
  'Sydney, Australia',
  'Tokyo, Japan'
].freeze
