import { trackSearch } from './analytics.js';

const articleScore = (article, wordsRegex) => {
  let score = 0;

  wordsRegex.forEach((wordRegex) => {
    score += (article.searchTitle.match(wordRegex) || []).length / article.searchTitle.length * 500;
    score += (article.searchBody.match(wordRegex) || []).length / article.searchBody.length * 750;
  });

  return score;
};

const searchable = (str) => {
  return str
    .replace(/<[^>]*>/g, ' ')
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^\w]+?/g, ' ')
    .replace(/in?g?[\s|\.]/g, ' ')
    .replace(/ed[\s|\.]/g, ' ')
    .replace(/ies[\s|\.]/g, ' ')
    .replace(/ies[\s|\.]/g, ' ')
    .replace(/al[\s|\.]/g, ' ')
    .replace(/ge[\s|\.]/g, 'g ')
    .trim();
};

const fixRelativeImgSrcs = (str, source) => {
  return str.replace(
    /src=["']?(\/[^"'\s>]+)["'\s>]?/g,
    'src="' + source + '$1"'
  );
};

const dictionaryTermMatches = (q, term) => {
  var matches = term.indexOf(q) === 0 || q.indexOf(term) === 0;
  var firstSpace = term.indexOf(' ');
  var termHasSpace = firstSpace !== -1;

  return (!termHasSpace && matches) || (termHasSpace && matches && firstSpace < q.length);
};

const applyDictionary = (dictionary, q) => {
  for (const word in dictionary) 
    q = q.replace(word, dictionary[word]);
  
  return q;
};

const findByUrl = (url, articles) => {
  return articles.filter((article) => article.id === url);
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

const resultsWithScore = (articles, words) => {
  if (words[words.length - 1].length <= 1) 
    words.pop();
  
  if (!words.length) return [];

  var wordsRegex = words.map((w) => new RegExp(w, 'ig'));

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
const GOOD_SCORE = 10;
const MIN_SCORE = 10;
const LOWER_MIN_SCORE = 1;
const WHITESPACE = /\s+/;

class Search {
  constructor(dictionary = DICTIONARY) {
    this.articles = [];
    this.dictionary = DICTIONARY;
  }

  addArticles(articles, source) {
    const preppedArticles = articles.map((article) => {
      return {
        id: article.id,
        title: article.title,
        excerpt: article.excerpt,
        body: fixRelativeImgSrcs(article.body || '', source),
        searchTitle: searchable((article.title || '') + ' '),
        searchBody: searchable((article.body || '') + ' '),
        categories: article.categories || [],
        source
      };
    });

    this.articles.push(...preppedArticles);
  }

  findArticle(id) {
    return this.articles.find((a) => a.id === id);
  }

  query(q) {
    const original_q = q;

    q = (q || '').toLowerCase().trim();

    if (q[0] === '/')
      return findByUrl(q, this.articles);

    if (q.slice(0, 4) === 'cat:')
      return findByCategory(q.slice(4).trim(), this.articles);


    q = applyDictionary(this.dictionary, q);

    let words = searchable(q + ' ').split(WHITESPACE);
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
