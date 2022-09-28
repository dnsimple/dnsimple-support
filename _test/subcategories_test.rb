require 'test_helper'
require_relative '../lib/sub_categories'

describe "Sub categories" do

  FakeArticle = Struct.new(:attributes)

  it "replace the title for the nanoc article" do
    fake_article = FakeArticle.new({ title: "What is a TLD?" })

    result = SubCategories.new.show(:domains, [fake_article]) # Loads the domains.yaml file

    assert_equal result["Top-level domains"][0], fake_article
  end

  it "the article is not categorized, it goes into the 'other' section" do
    fake_article = FakeArticle.new({ title: "Dummy Article" })

    result = SubCategories.new.show(:domains, [fake_article]) # loads the domains.yaml file

    assert_equal result["Other"][0], fake_article
  end

end
