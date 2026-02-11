# frozen_string_literal: true

require "test_helper"
require_relative "../lib/sub_categories"

FakeArticle = Struct.new(:attributes)

describe "Sub categories" do
  it "replace the title for the nanoc article" do
    fake_article = FakeArticle.new({ title: "DNS at DNSimple" })

    result = SubCategories.new.show("dns", [fake_article]) # Loads the dns.yaml file

    assert_equal result["Getting Started"][0], fake_article
  end

  it "the article is not categorized, it goes into the 'other' section" do
    fake_article = FakeArticle.new({ title: "Dummy Article" })

    result = SubCategories.new.show("dns", [fake_article]) # loads the dns.yaml file

    assert_equal result["Other"][0], fake_article
  end
end
