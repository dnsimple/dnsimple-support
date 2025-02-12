import { search, prepareArticles, dictionaryTermMatches, articleScore, fixRelativeImgSrcs } from '../../../_widget/src/components/app/search.js';
import { trackSearch } from '../../../_widget/src/components/app/analytics.js';

jest.mock('../../../_widget/src/components/app/analytics.js', () => ({
  trackSearch: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Search', () => {
  describe('.articleScore', () => {
    test('can be calculated for a close match', () => {
      const articles = prepareArticles([{ title: 'test' }]);
      const score = articleScore(articles[0], 'test');

      expect(score).toBeGreaterThanOrEqual(90);
    });

    test('can be calculated for a non-match', () => {
      const articles = prepareArticles([{ title: 'bad' }]);
      const score = articleScore(articles[0], 'test');

      expect(score).toBeLessThanOrEqual(10);
    });
  });

  describe('.fixRelativeImgSrcs', () => {
    test('makes image sources absolute', () => {
      const fixed = fixRelativeImgSrcs('this is my <img src="/img.png"> img.');

      expect(fixed).toContain('support.dnsimple.com');
    });

    test('does not touch external images', () => {
      const fixed = fixRelativeImgSrcs('this is my <img src="https://howhttps.works/"> img.');

      expect(fixed).not.toContain('support.dnsimple.com');
    });
  });

  describe('.dictionaryTermMatches', () => {
    test('for a perfect match', () => {
      const q = dictionaryTermMatches('close', 'close');

      expect(q).toBeTruthy();
    });

    test('for a partial match', () => {
      const q = dictionaryTermMatches('clo', 'close');

      expect(q).toBeTruthy();
    });

    test('for an over-match', () => {
      const q = dictionaryTermMatches('close my account', 'close');

      expect(q).toBeTruthy();
    });
  });

  describe('.search', () => {
    const dictionary = {
      close: 'unsubscribe'
    };

    test('finds an article by a URL', () => {
      const articles = prepareArticles([{ id: '/articles/my-article', title: 'My Article' }, { id: '/not-a-match' }]);
      const results = search('/articles/my-article', articles, {});

      expect(results).toHaveLength(1);
      expect(results[0].title).toContain('My Article');
    });

    test('finds the best article', () => {
      const articles = prepareArticles([{ title: 'Unsubscribe Your Account' }]);
      const results = search('clo', articles, dictionary);

      expect(results).toHaveLength(1);
      expect(results[0].title).toContain('Unsubscribe');
    });

    test('ignores irrelevant article', () => {
      const articles = prepareArticles([{ title: 'Irrelevant' }]);
      const results = search('clo', articles, dictionary);

      expect(results).toHaveLength(0);
    });

    test('finds a category', () => {
      const articles = prepareArticles([{ title: 'Categorized', categories: ['dns'] }, { title: 'Non-Categorized' }]);
      const results = search('cat:dns', articles, dictionary);

      expect(results).toHaveLength(1);
      expect(results[0].title).toContain('Categorized');
    });

    test('applies the dictionary', () => {
      const articles = prepareArticles([{ title: 'Unsubscribed' }, { title: 'Another Article' }]);
      const results = search('close', articles, dictionary);

      expect(results).toHaveLength(1);
      expect(results[0].title).toContain('Unsubscribed');
    });

    test('ranks by score', () => {
      const articles = prepareArticles([{ title: 'Unsubscribed' }, { title: 'Less Relevant', body: 'Unsubscribed' }, { title: 'Irrelevant' }]);
      const results = search('close', articles, dictionary);

      expect(results).toHaveLength(2);
      expect(results[0].title).toContain('Unsubscribed');
      expect(results[1].title).toContain('Less Relevant');
    });

    test('calls trackSearch', () => {
      const articles = prepareArticles([{ id: '/articles/my-article', title: 'My Article' }, { id: '/not-a-match' }]);
      const results = search('my', articles, {});

      expect(trackSearch).toHaveBeenCalledTimes(1);
      expect(trackSearch).toHaveBeenCalledWith('my', ['My Article']);
    });
  });
});
