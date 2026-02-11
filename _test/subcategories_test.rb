# frozen_string_literal: true

require "test_helper"
require_relative "../lib/sub_categories"

FakeArticle = Struct.new(:attributes)

describe "Sub categories" do
  it "replace the title for the nanoc article" do
    fake_article = FakeArticle.new({ title: "Domain Auto-Renewal" })

    result = SubCategories.new.show("domains_and_transfers", [fake_article]) # Loads domains_and_transfers.yaml

    assert_equal result["Explanation"]["Domain Lifecycle"][1], fake_article
  end

  it "the article is not categorized, it goes into the 'other' section" do
    fake_article = FakeArticle.new({ title: "Dummy Article" })

    result = SubCategories.new.show("domains_and_transfers", [fake_article]) # loads domains_and_transfers.yaml

    assert_equal result["Other"][0], fake_article
  end
end
