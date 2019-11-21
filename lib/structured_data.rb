require 'nokogiri'
require 'erb'

# This creates a Structured Data FAQ section for google search results
# https://developers.google.com/search/docs/data-types/faqpage
#
# The page needs to be annotated with the attribute `structured_data`
# and questions and answers formatted with a `.section-faq`.
# See `/articles/faq-ssl-certificates/` for an example.
class AddStructuredDataFilter < Nanoc::Filter

  identifier :add_structured_data

  def run(content, params={})
    if @item[:structured_data]
      doc = Nokogiri::HTML(content)
      write_faqs(doc, collect_faqs(doc))
      return doc.to_html
    end
    content
  end

  def write_faqs(doc, faqs)
    head = doc.at('head')
    template = ERB.new <<-eos
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        <% faqs.each_with_index do |faq, index| %>
          {
            "@type": "Question",
            "name": "<%= faq[:question] %>",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "<%= faq[:answer] %>"
            }
          }
          <%= index != faqs.size - 1 ? "," : "" %>
        <% end %>
      ]
    }
    </script>
    eos
    head << template.result(binding)
  end

  def collect_faqs(doc)
    faqs = []
    section = doc.css('.section-faq li')
    section.each do |faq|
      transform_links(faq)
      question = faq.css('h4').text
      answer = faq.css('p').to_html
      faqs << { question: question, answer: enforce_single_quotes(answer) }
    end
    faqs
  end

  def transform_links(faq)
    faq.css('a').each do |a|
      if a['href'].start_with? ("/")
        a['href'] = "https://support.dnsimple.com#{a['href']}"
      end
    end
  end

  def enforce_single_quotes(string)
    string.gsub("\"", "'")
  end

end
