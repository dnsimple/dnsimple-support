# frozen_string_literal: true

require "test_helper"
require "yaml"

# Enforces the mechanical rules in .cursor/rules/article-writing.mdc — the ones a
# machine can decide without judgement. Voice, structure, and whether an article
# does one job stay in the rule file for a human or an AI to follow.
#
# Not enforced here, on purpose:
#   - contractions in body text: 487 existing uses, and some are deliberate
#   - vague link text ("here", "this article"): 16 uses, each needs a rewrite
describe "Writing rules" do
  ARTICLES = Dir.glob("content/articles/*.md").sort

  # These two are the support contact page and a call to action in their own right.
  NO_CTA_EXPECTED = %w[dnsimple-support.md leave-a-review.md].freeze

  REQUIRED_FRONTMATTER = %w[title excerpt meta categories].freeze
  ALLOWED_CALLOUTS = %w[NOTE TIP WARNING].freeze

  # Terminology retired in the rule file. Comodo is allowed after "formerly",
  # which is how the rebrand is explained.
  DEPRECATED = {
    /\bStandard (certificate|SSL|Single-name|Wildcard)\b/ => "Sectigo",
    /(?<!formerly )\bComodo\b/ => "Sectigo",
  }.freeze

  # Preferred spellings. The right-hand side is the form to use.
  VARIANTS = {
    /(?<!")\bnameservers?\b(?!")/i => "name server",
    /\bsub-domains?\b/i => "subdomain",
    /\borganisation/i => "organization",
    /\bautorenewal\b/i => "auto-renewal",
    /\btop level domain/i => "top-level domain",
  }.freeze

  # Phrases the rule file bans outright. Openers are anchored so that ordinary
  # references such as "the instructions in this article" are not flagged.
  BANNED = [
    /^In this article/i,
    /it (is|'s) important to note/i,
    /it should be noted/i,
    /it (is|'s) worth mentioning/i,
    /it can be seen that/i,
    /^(Essentially|Basically),/,
    /\bessentially (acting|means)\b/i,
    /^(In summary|To recap),/i,
    /Great question/i,
  ].freeze

  # Strips what the rules do not govern: code, link targets, bare URLs. Slugs and
  # filenames keep their own spelling ("URLs do not change"), so they must not be
  # read as prose.
  def prose(body)
    body
      .gsub(/```.*?```/m, "")
      .gsub(/`[^`]*`/, "")
      .gsub(/\]\([^)]*\)/, "](link)")
      .gsub(%r{https?://\S+}, "url")
  end

  def each_article
    ARTICLES.each do |path|
      raw = File.read(path, encoding: "UTF-8")
      match = raw.match(/\A---\n(.*?)\n---\n(.*)\z/m)
      frontmatter = match ? (YAML.safe_load(match[1]) || {}) : {}
      yield File.basename(path), frontmatter, (match ? match[2] : raw)
    end
  end

  def report(failures, rule)
    assert failures.empty?,
           "#{failures.size} #{rule}:\n  #{failures.join("\n  ")}\n" \
           "See .cursor/rules/article-writing.mdc."
  end

  it "gives every article the required frontmatter" do
    failures = []
    each_article do |name, frontmatter, _body|
      missing = REQUIRED_FRONTMATTER.reject { |key| frontmatter.key?(key) }
      failures << "#{name}: missing #{missing.join(', ')}" if missing.any?
    end
    report(failures, "articles with incomplete frontmatter")
  end

  it "ends every article with the support CTA" do
    failures = []
    each_article do |name, _frontmatter, body|
      next if NO_CTA_EXPECTED.include?(name)
      failures << name unless body.include?("## Have more questions?")
    end
    report(failures, "articles without a '## Have more questions?' section")
  end

  it "uses only the supported callout types" do
    failures = []
    each_article do |name, _frontmatter, body|
      body.scan(/^>\s*\[!([A-Z]+)\]/) do |(type)|
        failures << "#{name}: [!#{type}]" unless ALLOWED_CALLOUTS.include?(type)
      end
    end
    report(failures, "callouts of an unsupported type (use NOTE, TIP, or WARNING)")
  end

  it "links to internal pages with a root-relative path ending in a slash" do
    failures = []
    each_article do |name, _frontmatter, body|
      # A path on our own site should be root-relative. Naming the site itself,
      # as dnsimple-support.md does beside the developer docs, is not a link to
      # a page and stays as it is.
      body.scan(%r{\]\((https?://support\.dnsimple\.com/[^)\s]+)\)}) do |(link)|
        failures << "#{name}: #{link} — drop the domain"
      end
      body.scan(%r{\]\((/(?:articles|categories)/[a-z0-9.\-]+)\)}) do |(link)|
        failures << "#{name}: #{link} — add the trailing slash"
      end
    end
    report(failures, "internal links in the wrong form")
  end

  it "titles TLD articles '.XXX Domains'" do
    failures = []
    each_article do |name, frontmatter, body|
      title = frontmatter["title"].to_s
      next unless title.start_with?(".")
      heading = body[/^#\s+(.+)$/, 1].to_s.strip
      failures << "#{name}: title #{title.inspect}" unless title.end_with?("Domains")
      failures << "#{name}: H1 #{heading.inspect}" unless heading.end_with?("Domains")
    end
    report(failures, "TLD articles whose title or H1 does not end in 'Domains'")
  end

  it "uses current terminology" do
    failures = []
    each_article do |name, _frontmatter, body|
      DEPRECATED.each do |pattern, replacement|
        body.scan(pattern) { failures << "#{name}: #{Regexp.last_match(0)} — use #{replacement}" }
      end
    end
    report(failures, "uses of deprecated terminology")
  end

  it "uses the preferred spelling of each term" do
    failures = []
    each_article do |name, _frontmatter, body|
      text = prose(body)
      VARIANTS.each do |pattern, preferred|
        text.scan(pattern) { failures << "#{name}: #{Regexp.last_match(0)} — use #{preferred}" }
      end
    end
    report(failures, "uses of a non-preferred spelling")
  end

  it "avoids the banned phrases" do
    failures = []
    each_article do |name, _frontmatter, body|
      prose(body).each_line do |line|
        BANNED.each do |pattern|
          failures << "#{name}: #{Regexp.last_match(0).strip}" if line.match(pattern)
        end
      end
    end
    report(failures, "uses of a banned phrase")
  end
end
