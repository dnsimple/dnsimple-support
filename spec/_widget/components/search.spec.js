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

  it('returns no articles if there is no query', () => {
    expect(subject.query('').length).toEqual(0);
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

  it('can find results with a truncated query from the dictionary', () => {
    const results1 = subject.query('comme');

    expect(results1.map((r) => r.title).slice(0, 2)).toContain('Record Notes');
  });

  it('prioritizes same-site results', () => {
    subject = new Search(undefined, 'https://developer.dnsimple.com');
    subject.addArticles(ARTICLES, 'https://support.dnsimple.com');

    const sameSiteArticle = { id: '/v2/zones/ns-records/', title: 'Zone NS Records API | Zones | DNSimple API v2' };
    subject.addArticles([sameSiteArticle], 'https://developer.dnsimple.com');

    const results = subject.query('records');

    expect(results[0].id).toEqual(sameSiteArticle.id);
    expect(results[0].title).toEqual(sameSiteArticle.title);
  });

  describe('queries', () => {
    const queries = {
      'what\'s a cname record': {
        'What\'s a CNAME record?': 3
      },
      'a record': {
        'Managing A Records': 5,
        'What\'s an A Record?': 1
      },
      'enable dnssec': {
        'DNSSEC': 1,
        'Why DNSSEC and Secondary DNS may not work together': 3
      },
      'creating alias record': {
        'What\'s an ALIAS record?': 1,
        'Record Editor': 5,
      },
      'alias record': {
        'What\'s an ALIAS record?': 1,
        'Record Editor': 5,
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
        'DNSimple Name Servers': 1,
        'Delegating a Domain registered with another Registrar to DNSimple': 5
      },
      'create a record': {
        'What\'s an A Record?': 1,
        "Managing A Records": 5
      },
      'retry payment': {
        'Account Invoice History': 3,
        'Changing Payment Details': 2,
        'Payment methods': 1,
        "Understanding Your DNSimple Invoice": 4
      },
      'hosting': {
        "Web Hosting Support": 1,
        "DNS Hosting": 2,
        "Email Hosting Support": 3,
        "Why We Don't Offer Web Hosting Services": 4
      },
      'add user': {
        "Managing Multiple Members on One Account": 2
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
        'Transferring a domain away from DNSimple': 3,
        'Transfer or Register Domains With DNSimple': 4,
        'Domain Transfer Pricing': 2,
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
      'comment': {
        'Record Notes': 1
      },
      'expiry': {
        'Product Expiration Notification': 1,
        'Disabling Expiration Notifications': 2,
      },
      'axfr': {
        "Add a secondary DNS server to DNSimple": 1,
        "Add DNSimple as a secondary DNS server": 2,
        "Add DNSMadeEasy as a secondary DNS server": 3,
        "Adding Dyn as a Secondary DNS Server": 4,
        "Add DNSimple as a Secondary DNS with a Hidden Primary": 5,
        "Integrated DNS Providers at DNSimple": 6,
        "Using DNSimple alongside other DNS providers": 7,
      },
      'domain validation': {
        'ICANN Domain Validation Requirements': 1
      },
      'password reset': {
        'Forgot Password': 1
      },
      'password recovery': {
        'Forgot Password': 1
      },
      'email not working': {
        'What\'s an MX Record?': 4,
        'Email Hosting Support': 3
      },
      'domain registration': {
        'Registering a Domain': 1
      },
      'domain name search': {
        'Can I use DNSimple for drop catching?': 3
      },
      'dns records': {
        'Common DNS Records': 1,
      },
      '2fa': {
        "Enforce Multi-Factor Authentication for All Members of an Account": 1,
        "First Steps Guide to Setting Up Your Team": 2,
        "Multi-Factor Authentication": 3,
      },
      'dns management': {
        'Record Editor': 1,
        'Common DNS Records': 2
      },
      'domain parking': {
        'DNS Hosting': 3
      },
      'dns propagation': {
        'Troubleshooting Domain Resolution Issues': 2,
        'Using DNSimple alongside other DNS providers': 5
      },
      'dnsimple pricing': {
        'DNSimple Plans': 2,
        'Domain Transfer Pricing': 3
      },
      'change nameservers': {
        'Setting the Name Servers for a Domain': 3,
        'What is a name server?': 5
      },
      'domain expiration': {
        'What Happens When a Domain Expires?': 7
      },
      'ipv6 dns': {
        'IPv6 Domain Resolution': 1,
        'What\'s an AAAA record?': 2
      },
      'email settings': {
        'Email Hosting Support': 3,
        'Troubleshooting Email Forwarding with Gmail': 7,
        'What\'s an MX Record?': 4
      },
      'domain owner': {
        'Changing Domain Contacts': 2,
        'WHOIS Privacy Protection': 1
      },
      'login': {
        'Getting Started': 1
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

            expect(resultTitles).toContain(title);
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
