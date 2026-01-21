import Fuse from 'fuse.js';
import { trackSearch } from './analytics.js';

const MAX_RESULTS = 7;

const fuseOptions = {
  keys: ['title', 'excerpt', 'searchBody'],
  threshold: 0.4,
  ignoreLocation: true,
  includeScore: true
};

class Search {
  constructor({ currentSiteUrl = '', riggedResults = {} } = {}) {
    this.currentSiteUrl = currentSiteUrl;
    this.riggedResults = riggedResults;
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

    // Get pinned articles by ID
    const pinnedIds = this.riggedResults[q] || [];
    const pinned = pinnedIds
      .map(id => this.articleList.find(a => a.id === id))
      .filter(Boolean);

    const results = this.fuse.search(q);

    // Remove pinned articles from fuse results to avoid duplicates
    const fuseResults = results
      .filter(r => !pinnedIds.includes(r.item.id))
      .slice(0, MAX_RESULTS - pinned.length)
      .map(r => r.item);

    const finalResults = [...pinned, ...fuseResults];

    if (originalQ) 
      trackSearch(originalQ, finalResults.map(a => a.title));
    

    return finalResults;
  }
}

export default Search;
