# frozen_string_literal: true

require "test_helper"
require_relative "../lib/sub_categories"

FakeArticle = Struct.new(:attributes)

describe "Sub categories" do
  it "replace the title for the nanoc article" do
    fake_article = FakeArticle.new({ title: "What Happens When a Domain Expires?" })

    result = SubCategories.new.show("Domains and Transfers", [fake_article])

    assert_equal result["Explanation"]["Domain lifecycle and expiration"][0], fake_article
  end

  it "the article is not categorized, it goes into the 'other' section" do
    fake_article = FakeArticle.new({ title: "Dummy Article" })

    result = SubCategories.new.show("Domains and Transfers", [fake_article])

    assert_equal result["Other"][0], fake_article
  end
end
