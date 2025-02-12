// Items are matched in the order
// Dictionary only works with lowercase with no punctuation

const DICTIONARY = {
  "add user": "member",
  "remove user": "member",
  "user": "user settings",
  "close": "unsubscribe",
  "cancel": "unsubscribe",
  "delete account": "unsubscribe",
  "letsencrypt": "lets encrypt",
  "membership": "share management",
  "team": "member",
  "annual": "yearly",
  "remove": "delete",
  "delegate": "registrar point setting",
  "payment": "invoice payment"
};
const PUNCTUATION = /['";.()?-]/g;
const MAX_RESULTS = 7;
const MIN_SCORE = 10;
const WHITESPACE = /\s+/;

const articleScore = (article, wordsRegex) => {
  let score = 0;

  wordsRegex.forEach((wordRegex) => {
    // if (article.searchTitle.indexOf('alias') !== -1) {
    //   // console.log({
    //   //   title: article.searchTitle,
    //   //   wordRegex,
    //   //   title: (article.searchTitle.match(wordRegex) || []).length * 100 / article.searchTitle.length,
    //   //   body: (article.searchBody.match(wordRegex) || []).length * 10 / article.searchBody.length,
    //   //   searchBody: article.searchBody
    //   // })
    // }

    // if (article.id.indexOf('encrypt') !== -1) {
    //   console.log({
    //     wordRegex,
    //     title: (article.searchTitle.match(wordRegex) || []).length,
    //     body: (article.searchBody.match(wordRegex) || []).length,
    //     searchTitle: (article.searchTitle.match(wordRegex) || []).length / article.searchTitle.length * 5000,
    //     searchBody: (article.searchBody.match(wordRegex) || []).length / article.searchBody.length / 5 * 10,
    //   })
    // }

    // if (article.id.indexOf('/articles/alias-record/') !== -1 || article.id.indexOf('/articles/record-editor/') !== -1) {
    //   console.log({
    //     id: article.id,
    //     wordRegex,
    //     score,
    //     searchTitle: (article.searchTitle.match(wordRegex) || []).length,
    //     searchBody: (article.searchBody.match(wordRegex) || []).length,
    //   })
    // }

    score += (article.searchTitle.match(wordRegex) || []).length / article.searchTitle.length * 500;
    score += (article.searchBody.match(wordRegex) || []).length / article.searchBody.length * 100;
  })

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
    .trim()
}

const prepareArticles = (articles, source) => {
  return articles.map((article) => {
    article.searchTitle = article.searchTitle || searchable((article.title || '') + ' ')
    article.searchBody = article.searchBody || searchable((article.body || '') + ' ')
    article.body = fixRelativeImgSrcs(article.body || '', source);
    article.categories = article.categories || [];
    article.source = source;

    return article;
  });
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
  for (const word in dictionary) {
    q = q.replace(word, dictionary[word])
  }

  return q;
};

const findByUrl = (url, articles) => {
  return articles.filter((article) => {
    return article.id === url;
  });
};

const findByCategory = (category, articles) => {
  return articles
    .filter((article) => {
      return !category || article.categories.toString().toLowerCase().indexOf(category) !== -1;
    })
    .sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
};

const findByScore = (articles, words) => {
  if (!words.length) return []

  if (words[words.length - 1].length <= 1) {
    words.pop()
  }

  var wordsRegex = words.map((w) => new RegExp(w, 'ig'))

  return articles
    .filter((article) => {
      article.score = articleScore(article, wordsRegex);
      return article.score > MIN_SCORE;
    })
    .sort((a, b) => {
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;
      return 0;
    })
};

const search = (q, articles, dictionary = DICTIONARY) => {
  q = (q || '').toLowerCase();

  if (q[0] === '/')
    return findByUrl(q, articles);
  else if (q.slice(0, 4) === 'cat:')
    return findByCategory(q.slice(4).trim(), articles);
  else {
    q = applyDictionary(dictionary, q);
    let words = searchable(q + ' ').split(WHITESPACE)
    return findByScore(articles, words)
      .filter((a, index) => index < MAX_RESULTS);
  }
};

export {
  search,
  prepareArticles,
  articleScore,
  dictionaryTermMatches,
  fixRelativeImgSrcs
};
