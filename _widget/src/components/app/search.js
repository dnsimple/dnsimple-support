import { trackSearch } from './analytics.js';

const HTML_REGEX = /<[^>]*>/g;
const QUOTE_REGEX = /['"]/g;
const NON_WORD_REGEX = /[^\w]+?/g;
const ING_REGEX = /ing[\s|\.]/g;
const RRING_REGEX = /rring[\s|\.]/g;
const ED_REGEX = /ed[\s|\.]/g;
const IES_REGEX = /ies[\s|\.]/g;
const AL_REGEX = /al[\s|\.]/g;
const TIN_REGEX = /tin[\s|\.]/g;
const GE_REGEX = /ge[\s|\.]/g;

const searchable = (str) => {
  return str
    .replace(HTML_REGEX, ' ')
    .toLowerCase()
    .replace(QUOTE_REGEX, '')
    .replace(NON_WORD_REGEX, ' ')
    .replace(RRING_REGEX, 'r ')
    .replace(ING_REGEX, ' ')
    .replace(ED_REGEX, ' ')
    .replace(IES_REGEX, ' ')
    .replace(AL_REGEX, ' ')
    .replace(TIN_REGEX, 't ')
    .replace(GE_REGEX, 'g ')
    .trim();
};

const RELATIVE_IMG_REGEX = /src=["']?(\/[^"'\s>]+)["'\s>]?/g;

const fixRelativeImgSrcs = (str, sourceUrl) => {
  return str.replace(
    RELATIVE_IMG_REGEX,
    'src="' + sourceUrl + '$1"'
  );
};

const applyDictionary = (dictionary, q) => {
  for (const word in dictionary) 
    q = q.replace(word, dictionary[word]);
  
  return q;
};

const findByUrl = (url, articles) => {
  return articles.filter((a) => `${a.sourceUrl}${a.id}` === url);
};

const findByCategory = (category, articles) => {
  return articles
    .filter((article) => {
      return !category || article.categories.map((c) => c.toLowerCase()).indexOf(category) !== -1;
    })
    .sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
};

const MIN_ARTICLE_LENGTH = 750;
const articleScore = (article, wordsRegex) => {
  let score = 0;

  wordsRegex.forEach((wordRegex) => {
    score += (article.searchTitle.match(wordRegex) || []).length / article.searchTitle.length * 500;
    score += (article.searchBody.match(wordRegex) || []).length / Math.max(MIN_ARTICLE_LENGTH, article.searchBody.length) * 750;
  });

  return score;
};

const resultsWithScore = (articles, words) => {
  if (!words.length) return [];

  var wordsRegex = words.map((w) => new RegExp(`(^|\\s)${w}`, 'ig'));

  return articles.map((article) => {
    return {
      score: articleScore(article, wordsRegex),
      article
    };
  }).sort((a, b) => {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  });
};

import DICTIONARY from './dictionary.js';

const PUNCTUATION = /['";.()?-]/g;
const MAX_RESULTS = 7;
const GOOD_SCORE = 20;
const MIN_SCORE = 10;
const LOWER_MIN_SCORE = 1;
const WHITESPACE = /\s+/;

class Search {
  constructor(dictionary = DICTIONARY) {
    this.articles = [];
    this.dictionary = DICTIONARY;
  }

  addArticles(articles, sourceUrl) {
    const preppedArticles = articles.map((article) => {
      return {
        id: article.id,
        title: article.title,
        excerpt: article.excerpt,
        body: fixRelativeImgSrcs(article.body || '', sourceUrl),
        searchTitle: searchable((article.title || '') + ' '),
        searchBody: searchable((article.body || '') + ' '),
        categories: article.categories || [],
        sourceUrl
      };
    });

    this.articles.push(...preppedArticles);
  }

  findArticle(url) {
    return this.articles.find((a) => `${a.sourceUrl}${a.id}` === url);
  }

  query(q) {
    const original_q = q;

    q = (q || '').toLowerCase().trim();

    if (q.slice(0, 4) === 'http')
      return findByUrl(q, this.articles);

    if (q.slice(0, 4) === 'cat:')
      return findByCategory(q.slice(4).trim(), this.articles);

    q = applyDictionary(this.dictionary, q);

    let words = searchable(` ${q} `).split(WHITESPACE);
    let results = resultsWithScore(this.articles, words);

    if (results.filter((r) => r.score > GOOD_SCORE).length === 0)
      results = results.filter((r) => r.score > LOWER_MIN_SCORE);
     else
      results = results.filter((r) => r.score > MIN_SCORE);

    results = results
      .filter((r, index) => index < MAX_RESULTS)
      .map((r) => r.article);

    if (original_q) {
      const articleTitles = results.map((r) => r.title);
      trackSearch(original_q, articleTitles);
    }

    return results;
  }
}

export default Search;
