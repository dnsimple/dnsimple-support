s = Site.find(1)
j = s.articles.map do |article|
  { title: article.title, slug: article.slug, category: article.category.try(:name), content: article.content }
end

File.write("public/dnsimple.json", j.to_json)
