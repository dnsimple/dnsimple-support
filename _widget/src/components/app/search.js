import Fuse from 'fuse.js';
import { trackSearch } from './analytics.js';
import DICTIONARY from './dictionary.js';

const MAX_RESULTS = 7;

const fuseOptions = {
  keys: ['title', 'excerpt', 'searchBody'],
  threshold: 0.4,
  ignoreLocation: true,
  includeScore: true
};

const expandQuery = (q) => {
  // Check for exact multi-word matches first
  for (const key in DICTIONARY) 
    if (q === key) 
      return q + ' ' + DICTIONARY[key];
    
  

  // Then check individual words
  const words = q.split(/\s+/);
  const expanded = words.map(word => {
    if (word.length <= 1) return word;
    if (DICTIONARY[word]) 
      return word + ' ' + DICTIONARY[word];
    
    return word;
  });
  return expanded.join(' ');
};

class Search {
  constructor(dictionary = {}, currentSiteUrl = '') {
    this.currentSiteUrl = currentSiteUrl;
    this.articles = new Map();
    this.articleList = [];
    this.fuse = null;
  }

  addArticles(articles, sourceUrl) {
    articles.forEach(a => {
      const url = `${sourceUrl}${a.id}`.replace(/\/$/, '') + '/';
      const article = {
        ...a,
        sourceUrl,
        fullUrl: url,
        // Keep original body for display, strip HTML for search
        searchBody: (a.body || '').replace(/<[^>]*>/g, ' ')
      };
      this.articles.set(url, article);
      this.articleList.push(article);
    });

    this.fuse = new Fuse(this.articleList, fuseOptions);
  }

  findArticle(url) {
    const normalized = url.replace(/\/$/, '') + '/';
    return this.articles.get(normalized);
  }

  query(q) {
    const originalQ = q;
    q = (q || '').toLowerCase().trim();

    if (q.length === 0) return [];

    // URL lookup
    if (q.slice(0, 4) === 'http') {
      const article = this.findArticle(q);
      return article ? [article] : [];
    }

    // Category lookup
    if (q.slice(0, 4) === 'cat:') {
      const category = q.slice(4).trim();
      return [...this.articles.values()]
        .filter(a => a.categories?.map(c => c.toLowerCase()).includes(category))
        .sort((a, b) => a.title.localeCompare(b.title));
    }

    if (!this.fuse) return [];

    const expandedQ = expandQuery(q);
    const results = this.fuse.search(expandedQ);

    // Boost same-site results by putting them first (subtract 1 from score)
    const boostedResults = results.map(result => ({
      ...result,
      score: result.item.sourceUrl === this.currentSiteUrl ? result.score - 1 : result.score
    }));

    boostedResults.sort((a, b) => a.score - b.score);

    const finalResults = boostedResults.slice(0, MAX_RESULTS).map(r => r.item);

    if (originalQ) 
      trackSearch(originalQ, finalResults.map(a => a.title));
    

    return finalResults;
  }
}

export default Search;
