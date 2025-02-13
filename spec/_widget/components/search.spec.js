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

  describe('queries', () => {
    const queries = {
      'a record': {
        'Managing A Records': 1,
        'What\'s an A Record?': 2
      },
      'enable dnssec': {
        'DNSSEC': 1,
        'Why DNSSEC and Secondary DNS may not work together': 3
      },
      'creating alias record': {
        'What\'s an ALIAS record?': 1,
        'Record Editor': 3,
        // 'Differences Among A, CNAME, ALIAS, and URL records': 3,
        // 'Common DNS Records': 7
      },
      'alias record': {
        'What\'s an ALIAS record?': 1,
        'Record Editor': 3,
        // 'Differences Among A, CNAME, ALIAS, and URL records': 7,
        // 'Common DNS Records': 7
      },
      'request ssl certificate': {
        "SSL/TLS Certificates": 1,
        "SSL Certificate Types": 2
      },
      'auto-renew certificate': {
        "Renewing an SSL Certificate": 2,
        "Renewing a standard SSL Certificate": 6,
        "How does an SSL Certificate Renewal work?": 5,
        "Renewing a Let's Encrypt SSL Certificate": 7,
      },
      'delegate name servers to another provider': {
        'Setting the Name Servers for a Domain': 3,
        'Pointing a Domain to DNSimple': 4,
        'DNSimple Name Servers': 2,
        'Delegating a Domain registered with another Registrar to DNSimple': 6
      },
      'create a record': {
        "Managing A Records": 1
      },
      'retry payment': {
        'Account Invoice History': 2,
        'Changing Payment Details': 3,
        'Payment methods': 1,
        "Understanding Your DNSimple Invoice": 4
      },
      'domain host': {
        "DNS Hosting": 1,
        "Web Hosting Support": 2,
        "Registering a Domain": 3,
        "Email Hosting Support": 4,
        "Why we don't offer web hosting services": 5
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
        'What\'s an MX Record?': 2,
        // 'Common DNS Records': 4
      },
      'ddns': {
        'Dynamic DNS': 1
      },
      'transfer': {
        'Transfer a Domain to DNSimple': 1,
        'Transferring a domain away from DNSimple': 3,
        'Domain Transfer Pricing': 6,
        // 'Transfer or Register Domains With DNSimple': 10,
        // 'Preparing a Domain Transfer to Avoid Downtime': 10,
        // 'Transferring a Domain to Another DNSimple Account': 10,
        // 'Transfer Account Ownership': 10,
        // 'Whois Privacy may cause transfer approval emails to not be delivered': 10
      },
      'certificates': {
        'SSL/TLS Certificates': 1,
        "SHA-2 SSL Certificates": 2,
        "SSL Certificates with NGINX": 3,
        "SSL Certificates with Apache": 4,
        "SSL Certificates with Heroku": 5,
        "SSL Certificates with Windows": 6,
        "Getting Started with SSL Certificates": 7,
        // 'SSL Certificates Frequently Asked Questions': 10,
        // 'What is a Certificate Authority?': 10,
        // 'What is the SSL Certificate Common Name?': 10,
        // 'What is the CSR?': 10,
        // 'What is the SSL Certificate Chain?': 10,
        // 'What is a Root Certificate?': 10,
        // 'What is the Subject Alternative Name (SAN)?': 10,
        // 'How long does it take to issue an SSL certificate?': 10,
        // 'How do I determine the Certificate Authority that signed my SSL certificate?': 10,
        // 'How does an SSL Certificate Renewal work?': 10,
        // 'SSL Certificate Authorities used by DNSimple': 10,
        // 'Let\'s Encrypt': 10,
        // 'Standard vs Let\'s Encrypt SSL Certificates': 10,
        // 'Let\'s Encrypt and DNSimple': 10,
        // 'Ordering a Let\'s Encrypt Certificate': 10,
        // 'Renewing a Let\'s Encrypt SSL Certificate': 10,
        // 'Ordering a Standard SSL Certificate': 10,
        // 'Ordering a Wildcard SSL Certificate': 10,
        // 'Re-issuing an SSL Certificate': 10,
        // 'Renewing an SSL Certificate': 10,
        // 'Renewing a standard SSL Certificate': 10,
        // 'How can I select a different SSL certificate domain validation email?': 10,
        // 'Choosing the SSL Certificate Names': 10,
        // 'I got an ECC-signed certificate but want RSA': 10,
        // 'Installing an SSL Certificate': 10,
        // 'SSL Certificates with Microsoft Azure': 10,
      }
    };

    for (const q in queries) {
      const expectedArticles = queries[q];

      for (const title in expectedArticles) 
        it(`can find \`${title}\` for \`${q}\``, () => {
          const results = subject.query(q);
          const minimumRank = expectedArticles[title];
          const resultTitles = results.map((a) => a.title);
          const rankForArticle = resultTitles.indexOf(title) + 1;

          if (rankForArticle > 0 && rankForArticle < minimumRank) 
            console.warn(`Minimum rank for \`${title}\` for \`${q}\` can be reduced to ${rankForArticle}.`);

          expect(resultTitles.filter((t, i) => i < minimumRank)).toContain(title);
          expect(rankForArticle).toBeLessThanOrEqual(minimumRank);
        });
    }

    it('limits results when good results are available', () => {
      const results = subject.query('alias');

      expect(results.length).toBeLessThanOrEqual(4);
    });
  });
});
