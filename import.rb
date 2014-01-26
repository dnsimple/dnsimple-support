#!/usr/bin/env ruby -w
require 'json'
require 'fileutils'

j = JSON.load(File.read('dnsimple.json'))
j.each do |article|
  category = article["category"]
  next if category.nil?

  category_path = category.downcase.tr(' ', '-')
  file_path = "content/articles/#{article["slug"]}.markdown"
  FileUtils.mkdir_p(File.dirname(file_path))

  title = article["title"].tr('"', '')
  content = <<-EOF
---
title: #{title}
excerpt: 
categories:
- #{category}
---

# #{article["title"]}

#{article["content"]}
  EOF

  File.write(file_path, content)
end
