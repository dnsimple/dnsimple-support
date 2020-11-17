// To save a network request on the support widget, we inject
// the articles directly into the production version of
// search.js. As a result, we have to be creative here.

const fs = require('fs');
const subject = eval(
  fs.readFileSync(__dirname + '/../../templates/search.js.erb')
    .toString()
    .replace(/<%= articles %>/, '[]')
    .replace(/<%= dictionary %>/, '{}')
);

describe('Search', () => {
  describe('.articleScore', () => {
    test('can be calculated for a close match', () => {
      const articles = subject.loadArticles([{ title: 'test' }]);
      const score = subject.articleScore(articles[0], 'test');

      expect(score).toBeGreaterThanOrEqual(90);
    });

    test('can be calculated for a non-match', () => {
      const articles = subject.loadArticles([{ title: 'bad' }]);
      const score = subject.articleScore(articles[0], 'test');

      expect(score).toBeLessThanOrEqual(10);
    });
  });

  describe('.fixRelativeImgSrcs', () => {
    test('makes image sources absolute', () => {
      const fixed = subject.fixRelativeImgSrcs('this is my <img src="/img.png"> img.');

      expect(fixed).toContain('support.dnsimple.com');
    });

    test('does not touch external images', () => {
      const fixed = subject.fixRelativeImgSrcs('this is my <img src="https://howhttps.works/"> img.');

      expect(fixed).not.toContain('support.dnsimple.com');
    });
  });

  describe('.dictionaryTermMatches', () => {
    test('for a perfect match', () => {
      const q = subject.dictionaryTermMatches('close', 'close');

      expect(q).toBeTruthy();
    });

    test('for a partial match', () => {
      const q = subject.dictionaryTermMatches('clo', 'close');

      expect(q).toBeTruthy();
    });

    test('for an over-match', () => {
      const q = subject.dictionaryTermMatches('close my account', 'close');

      expect(q).toBeTruthy();
    });
  });

  describe('.search', () => {
    const dictionary = {
      close: 'unsubscribe'
    };

    test('finds the best article', () => {
      const articles = subject.loadArticles([{ title: 'Unsubscribe Your Account' }]);
      const results = subject.search('clo', articles, dictionary);

      expect(results).toHaveLength(1);
      expect(results[0].title).toContain('Unsubscribe');
    });

    test('ignores irrelevant article', () => {
      const articles = subject.loadArticles([{ title: 'Irrelevant' }]);
      const results = subject.search('clo', articles, dictionary);

      expect(results).toHaveLength(0);
    });

    test('finds a category', () => {
      const articles = subject.loadArticles([{ title: 'Categorized', categories: ['dns'] }, { title: 'Non-Categorized' }]);
      const results = subject.search('cat:dns', articles, dictionary);

      expect(results).toHaveLength(1);
      expect(results[0].title).toContain('Categorized');
    });

    test('applies the dictionary', () => {
      const articles = subject.loadArticles([{ title: 'Unsubscribed' }, { title: 'Another Article' }]);
      const results = subject.search('close', articles, dictionary);

      expect(results).toHaveLength(1);
      expect(results[0].title).toContain('Unsubscribed');
    });

    test('ranks by score', () => {
      const articles = subject.loadArticles([{ title: 'Unsubscribed' }, { title: 'Less Relevant', body: 'Unsubscribed' }, { title: 'Irrelevant' }]);
      const results = subject.search('close', articles, dictionary);

      expect(results).toHaveLength(2);
      expect(results[0].title).toContain('Unsubscribed');
      expect(results[1].title).toContain('Less Relevant');
    });
  });
});
