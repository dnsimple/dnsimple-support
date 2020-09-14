var articles = [];
var MAX_RESULTS = 30;
var MIN_SCORE = 15;
var PUNCTUATION = /['";:.()?-]/g;
var rootURL = "https://support.dnsimple.com";

var articleScore = function articleScore(article, q) {
  if (!q) return 0;

  var score = 0;

  if (article.searchTitle.indexOf(q) !== -1) {
    score += 75;
  }

  if (article.searchBody.indexOf(q) !== -1) {
    score += 50;
  }

  var words = q.split(/\s+/).filter(function (str) {
    return str.length > 1;
  });

  for (var i = words.length - 1; i >= 0; i--) {
    if (article.searchTitle.indexOf(words[i]) !== -1) {
      score += 15;
    }

    if (article.searchBody.indexOf(words[i]) !== -1) {
      score += 5;
    }
  }

  return score;
};

var prepArticles = function prepArticles(articles) {
  var article;
  articles.forEach(function (article) {
    article.searchTitle = article.searchTitle || (article.title || "").toLowerCase().replace(PUNCTUATION, "");
    article.searchBody = article.searchBody || (article.body || "").toLowerCase().replace(PUNCTUATION, "");
    article.body = fixRelativeImgSrcs(article.body);
    article.categories = article.categories || [];
  });
  return articles;
};

var fixRelativeImgSrcs = function fixRelativeImgSrcs(str) {
  return str.replace(
    /src=["']?(\/[^"'\s>]+)["'\s>]?/g,
    'src="' + rootURL + '$1"'
  );
};

var search = function search(q, options) {
  if (!q) return [];

  var category;

  if (q[0] === "/")
    return articles.filter(function (article) {
      return article.id === q;
    });
  else if (q.slice(0, 4) === "cat:") {
    category = q.slice(4).trim();
    q = category;
  }

  q = q.toLowerCase().trim();

  return articles
    .filter(function (article) {
      return !category || article.categories.indexOf(category) !== -1;
    })
    .filter(function (article) {
      article.score = articleScore(article, q);
      return article.score > MIN_SCORE;
    })
    .filter(function (article, index) {
      return index <= MAX_RESULTS;
    })
    .sort(function (a, b) {
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;
      return 0;
    });
};

prepArticles(articles);

window.DNSimpleSupport = window.DNSimpleSupport || {};
window.DNSimpleSupport.search = search;
