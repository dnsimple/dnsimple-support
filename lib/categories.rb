include Nanoc::Helpers::LinkTo

module Categories
  DDMemoize.activate(self)

  # Collect all categories from articles
  #
  # By default all items are scanned. Add a collection to limit the
  # items scanned. The items in the array are Nanoc::Items where the
  # +kind+ is +article+
  #
  # Returns an array of strings with the name of categories on those items.
  def all_categories(items = articles)
    cats = []
    items.each do |article|
      next if article[:categories].nil?
      cats << article[:categories]
    end
    cats.flatten.compact.uniq
  end
  memoize :all_categories

  # Check if a given article has a category
  #
  # :call-seq: has_category?(category, article) -> boolean
  def has_category?(category, article)
    if article.identifier.to_s.include?("categories")
      category_has_category(article, category)
    else
      article_has_category(article, category)
    end
  end

  # Check if category page matches a category
  #
  # Returns boolean
  def category_has_category(article, category)
    /^#{article[:categories]}$/.match(category)
  end

  # Check if article page matches a category
  #
  # Returns boolean
  def article_has_category(article, category)
    if article[:categories].nil?
      false
    else
      article[:categories].include?(category)
    end
  end

  # Find all articles with a specific category.
  #
  # By default all articles are checked. Pass in an array to limit the
  # search to a subset of articles.
  def articles_with_category(category, items = articles)
    items.select { |article| has_category?(category, article) }
  end
  memoize :articles_with_category

  # Collect all articles and return them in sub-arrays by category.
  #
  # By default all articles are checked. Pass in an array to limit the
  # search to a subset of articles.
  def articles_by_category(items = articles)
    cats = []
    all_categories.each do |cat|
      cats << [cat, articles_with_category(cat)]
    end
    cats
  end
  memoize :articles_by_category


  def category_slug(category)
    category.downcase.tr(' ', '-')
  end

  def category_identifier(category)
    "/categories/#{category_slug(category)}.html"
  end

  def url_for_category(category)
    category_identifier(category).gsub(".html", "/")
  end

  def link_to_category(category, attributes = {})
    link_to(category, url_for_category(category), attributes)
  end

  # Turn a collection of categories into HTML links.
  #
  # This is ugly, but better here then in the middle of a layout.
  def link_categories(categories)
    categories.map { link_to_category(category) }
  end

  # Create individual pages for each category under root/categories.
  #
  # There's no way to know in advance what categories the blog will have.
  # Instead of creating pages beforehand, we hook into the +preprocess+
  # method to run this method.
  #
  # The method gathers all categories and their accompanying articles,
  # creates a page for each category and lists the articles for it. Each
  # article is added to nanoc's +@items+ array for further processing.
  def create_category_pages
    articles_by_category.each do |category, items|
      @items.create(
        %Q{<%= render("/category_index.html", category: "#{category}") %>},
        {
            title: "Articles in #{category}",
            excerpt: "List of articles in the category #{category}.",
            h1: "#{category} articles",
            items: items,
        },
        category_identifier(category),
        :binary => false
      )
    end
  end
end

include Categories
