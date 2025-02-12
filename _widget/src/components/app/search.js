import { trackSearch } from './analytics.js';

// Items are matched in the order
// Dictionary only works with lowercase with no punctuation

const DICTIONARY = {
  "user": "user settings",
  "close": "unsubscribe",
  "cancel": "unsubscribe",
  "delete account": "unsubscribe",
  "letsencrypt": "lets encrypt",
  "membership": "share management",
  "team": "member",
  "annual": "yearly",
  "remove": "deleting",
  "delete": "deleting",
  "editor": "record editor",
  "record": "record editor"
};
const PUNCTUATION = /['";.()?-]/g;
const MAX_RESULTS = 30;
const MIN_SCORE = 15;
const WHITESPACE = /\s+/;
const rootURL = 'https://support.dnsimple.com';

const articleScore = (article, q) => {
  if (!q) return 0;

  var score = 0;

  if (article.searchTitle.indexOf(q) !== -1)
    score += 75;

  if (article.searchTitle === q)
    score += 50;

  if (article.searchBody.indexOf(q) !== -1)
    score += 50;

  var words = q.split(WHITESPACE).filter(function (str) {
    return str.length > 1;
  });

  for (var i = words.length - 1; i >= 0; i--) {
    if (article.searchTitle.indexOf(words[i]) !== -1)
      score += 15;

    if (article.searchBody.indexOf(words[i]) !== -1)
      score += 5;
  }

  return score;
};

const prepareArticles = (articles, source) => {
  return articles.map(function (article) {
    article.searchTitle = article.searchTitle || (article.title || '').toLowerCase().replace(PUNCTUATION, '');
    article.searchBody = article.searchBody || (article.body || '').toLowerCase().replace(PUNCTUATION, '');
    article.body = fixRelativeImgSrcs(article.body || '');
    article.categories = article.categories || [];
    article.source = source;

    return article;
  });
};

const fixRelativeImgSrcs = (str) => {
  return str.replace(
    /src=["']?(\/[^"'\s>]+)["'\s>]?/g,
    'src="' + rootURL + '$1"'
  );
};

const dictionaryTermMatches = (q, term) => {
  var matches = term.indexOf(q) === 0 || q.indexOf(term) === 0;
  var firstSpace = term.indexOf(' ');
  var termHasSpace = firstSpace !== -1;

  return (!termHasSpace && matches) || (termHasSpace && matches && firstSpace < q.length);
};

const applyDictionary = (dictionary, q) => {
  q = q.replace(PUNCTUATION, '');

  if (q.length >= 3)
    for (var term in dictionary)
      if (dictionaryTermMatches(q, term))
        return dictionary[term];

  return q;
};

const findByUrl = (url, articles) => {
  return articles.filter(function (article) {
    return article.id === url;
  });
};

const findByCategory = (category, articles) => {
  return articles
    .filter(function (article) {
      return !category || article.categories.toString().toLowerCase().indexOf(category) !== -1;
    })
    .sort(function (a, b) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
};

const findByScore = (q, articles) => {
  return articles
    .filter(function (article) {
      article.score = articleScore(article, q);
      return article.score > MIN_SCORE;
    })
    .sort(function (a, b) {
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;
      return 0;
    })
    .filter(function (article, index) {
      return index <= MAX_RESULTS;
    });
};

const search = (q, articles, dictionary = DICTIONARY) => {
  const original_q = q;

  q = (q || '').toLowerCase().trim();

  if (q[0] === '/')
    return findByUrl(q, articles);

  if (q.slice(0, 4) === 'cat:')
    return findByCategory(q.slice(4).trim(), articles);

  q = applyDictionary(dictionary, q);

  const results = findByScore(q, articles);

  if (original_q) {
    const articleTitles = results.map((r) => r.title);
    trackSearch(original_q, articleTitles);
  }

  return results;
};

export {
  search,
  prepareArticles,
  articleScore,
  dictionaryTermMatches,
  fixRelativeImgSrcs
};
