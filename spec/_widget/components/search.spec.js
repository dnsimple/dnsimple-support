import Search from '../../../_widget/src/components/app/search.js';
import ARTICLES from '../../../output/search.json';
import { trackSearch } from '../../../_widget/src/components/app/analytics.js';

jest.mock('../../../_widget/src/components/app/analytics.js', () => ({
  trackSearch: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Search', () => {
  let subject;

  beforeEach(() => {
    subject = new Search();
    subject.addArticles(ARTICLES, 'https://support.dnsimple.com');
  });

  it('can load articles', () => {
    expect(subject.query('dns').length).toBeGreaterThan(0);
  });

  it('can find articles by category', () => {
    const results = subject.query('cat:dns');

    expect(results.length).toBeGreaterThan(0);
    expect(results[0].categories.map((c) => c.toLowerCase())).toContain('dns');
  });

  it('can find an article by a URL', () => {
    const article = subject.findArticle('https://support.dnsimple.com/articles/getting-started/');

    expect(article.title).toContain('Getting Started');
  });

  it('calls trackSearch', () => {
    subject.query('pronounce');

    expect(trackSearch).toHaveBeenCalledTimes(1);
    expect(trackSearch).toHaveBeenCalledWith('pronounce', ['How to pronounce DNSimple']);
  });

  it('can find results with a truncated query', () => {
    const results1 = subject.query('hostin');
    expect(results1.map((r) => r.title).slice(0, 3)).toContain('Web Hosting Support');

    const results2 = subject.query('reg');
    expect(results2.map((r) => r.title).slice(0, 3)).toContain('Registering a Domain');
  });

  describe('queries', () => {
    const queries = {
      'a record': {
        'Managing A Records': 6,
        'What\'s an A Record?': 1
      },
      'enable dnssec': {
        'DNSSEC': 1,
        'Why DNSSEC and Secondary DNS may not work together': 3
      },
      'creating alias record': {
        'What\'s an ALIAS record?': 1,
        'Record Editor': 4,
      },
      'alias record': {
        'What\'s an ALIAS record?': 1,
        'Record Editor': 3,
      },
      'request ssl certificate': {
        "SSL/TLS Certificates": 1,
        "SSL Certificate Types": 2
      },
      'auto-renew certificate': {
        "Renewing an SSL Certificate": 2,
        "Renewing a standard SSL Certificate": 4,
        "How does an SSL Certificate Renewal work?": 5,
        "Renewing a Let's Encrypt SSL Certificate": 6,
      },
      'delegate name servers to another provider': {
        'Setting the Name Servers for a Domain': 4,
        'Pointing a Domain to DNSimple': 3,
        'DNSimple Name Servers': 2,
        'Delegating a Domain registered with another Registrar to DNSimple': 5
      },
      'create a record': {
        'What\'s an A Record?': 1,
        "Managing A Records": 6
      },
      'retry payment': {
        'Account Invoice History': 1,
        'Changing Payment Details': 3,
        'Payment methods': 2,
        "Understanding Your DNSimple Invoice": 4
      },
      'hosting': {
        "DNS Hosting": 3,
        "Web Hosting Support": 1,
        "Email Hosting Support": 2,
        "Why we don't offer web hosting services": 4
      },
      'add user': {
        "Managing Multiple Members on One Account": 1
      },
      'access': {
        'API Access Token': 1,
        'Domain Access Control': 2
      },
      'dashboard': {
        'Getting to Know Your DNSimple Dashboard': 1
      },
      'mx': {
        'What\'s an MX Record?': 1,
      },
      'ddns': {
        'Dynamic DNS': 1
      },
      'transfer': {
        'Transfer a Domain to DNSimple': 1,
        'Transferring a domain away from DNSimple': 2,
        'Transfer or Register Domains With DNSimple': 4,
        'Domain Transfer Pricing': 5,
      },
      'certificates': {
        'SSL/TLS Certificates': 1,
        "SHA-2 SSL Certificates": 2,
        "SSL Certificates with NGINX": 3,
        "SSL Certificates with Apache": 4,
        "SSL Certificates with Heroku": 5,
        "SSL Certificates with Windows": 6,
        "Getting Started with SSL Certificates": 7
      },
      'metrics': {
        'DNS Query Volume Fees': 1
      },
      'stats': {
        'DNS Query Volume Fees': 1
      },
      'observability': {
        'DNS Query Volume Fees': 1
      },
      'queries': {
        'DNS Query Volume Fees': 1
      },
      'analytics': {
        'DNS Query Volume Fees': 1
      },
      'expiry': {
        'Product Expiration Notification': 1,
        'Disabling Expiration Notifications': 2,
      }
    };

    for (const q in queries) {
      const expectedArticles = queries[q];

      describe(`\`${q}\``, () => {
        for (const title in expectedArticles) {
          const minimumRank = expectedArticles[title];

          it(`returns \`${title}\` as result #${minimumRank}${minimumRank > 1 ? ' or better' : ''}`, () => {
            const results = subject.query(q);
            const resultTitles = results.map((a) => a.title);
            const rankForArticle = resultTitles.indexOf(title) + 1;

            if (rankForArticle > 0 && rankForArticle < minimumRank)
              console.warn(`Minimum rank for \`${title}\` for \`${q}\` can be reduced from ${minimumRank} to ${rankForArticle}.`);

            expect(resultTitles.filter((t, i) => i < minimumRank)).toContain(title);
            expect(rankForArticle).toBeLessThanOrEqual(minimumRank);
          });
        }
      });
    }

    it('limits results when good results are available', () => {
      const results = subject.query('alias');

      expect(results.length).toBeLessThanOrEqual(4);
    });
  });
});
