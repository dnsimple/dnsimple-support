import Search from "../../../_widget/src/components/app/search.js";
import ARTICLES from "../../../output/search.json";
import { trackSearch } from "../../../_widget/src/components/app/analytics.js";

jest.mock("../../../_widget/src/components/app/analytics.js", () => ({
  trackSearch: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Search", () => {
  let subject;

  beforeEach(() => {
    subject = new Search();
    subject.addArticles(ARTICLES, "https://support.dnsimple.com");
  });

  it("can load articles", () => {
    expect(subject.query("dns").length).toBeGreaterThan(0);
  });

  it("returns no articles if there is no query", () => {
    expect(subject.query("").length).toEqual(0);
  });

  it("can find articles by category", () => {
    const results = subject.query("cat:dns");

    expect(results.length).toBeGreaterThan(0);
    expect(results[0].categories.map((c) => c.toLowerCase())).toContain("dns");
  });

  it("can find an article by a URL", () => {
    const article = subject.findArticle("https://support.dnsimple.com/articles/getting-started/");

    expect(article.title).toContain("Getting Started");
  });

  it("calls trackSearch", () => {
    subject.query("pronounce");

    expect(trackSearch).toHaveBeenCalledTimes(1);
    expect(trackSearch).toHaveBeenCalledWith("pronounce", ["How to pronounce DNSimple"]);
  });

  it("can find results with a truncated query", () => {
    const results1 = subject.query("hostin");
    expect(results1.map((r) => r.title).slice(0, 3)).toContain("Web Hosting Support");

    const results2 = subject.query("reg");
    expect(results2.map((r) => r.title).slice(0, 3)).toContain("Registering a Domain");
  });

  it("can find results with a truncated query from the dictionary", () => {
    const results1 = subject.query("comme");

    expect(results1.map((r) => r.title).slice(0, 2)).toContain("Record Notes");
  });

  it("prioritizes same-site results", () => {
    subject = new Search(undefined, "https://developer.dnsimple.com");
    subject.addArticles(ARTICLES, "https://support.dnsimple.com");

    const sameSiteArticle = {
      id: "/v2/zones/ns-records/",
      title: "Zone NS Records API | Zones | DNSimple API v2",
    };
    subject.addArticles([sameSiteArticle], "https://developer.dnsimple.com");

    const results = subject.query("records");

    expect(results[0].id).toEqual(sameSiteArticle.id);
    expect(results[0].title).toEqual(sameSiteArticle.title);
  });

  describe("queries", () => {
    const queries = {
      "what's a cname record": ["cname-record"],
      "a record": ["a-record-format", "a-record"],
      "manage account": ["account-creation", "account-activation"],
      "enable dnssec": ["dnssec", "disabling-dnssec", "dnssec-glossary"],
      "creating alias record": ["alias-record"],
      "alias record": ["alias-record"],
      "request ssl certificate": ["ssl-certificates", "ssl-certificates-types"],
      "auto-renew certificate": [
        "renewing-ssl-certificate",
        "renewing-standard-ssl-certificate",
        "how-certificate-renewal-works",
        "renewing-lets-encrypt-ssl-certificate",
      ],
      "delegate name servers to another provider": [
        "setting-name-servers",
        "pointing-domain-to-dnsimple",
        "dnsimple-nameservers",
        "delegating-dnsimple-hosted",
      ],
      "create a record": ["a-record", "a-record-format"],
      "retry payment": [
        "account-invoice-history",
        "changing-payment-details",
        "payment-methods",
        "understanding-invoice",
      ],
      hosting: ["web-hosting", "dns-hosting", "email-hosting", "why-not-web-hosting"],
      "add user": ["account-users"],
      access: ["api-access-token", "domain-access-control"],
      dashboard: ["dashboard"],
      mx: ["mx-record"],
      ddns: ["dynamic-dns"],
      transfer: [
        "domain-transfer",
        "transferring-domain-away",
        "guide-register-or-transfer-a-domain",
        "domain-transfer-pricing",
      ],
      certificates: [
        "ssl-certificates",
        "sha-2-ssl-certificates",
        "ssl-certificate-with-nginx",
        "ssl-certificate-with-apache",
        "ssl-certificate-with-heroku",
        "ssl-certificate-with-windows",
        "getting-started-ssl-certificates",
      ],
      metrics: ["dns-query-limits"],
      stats: ["dns-query-limits"],
      observability: ["dns-query-limits"],
      queries: ["dns-query-limits"],
      analytics: ["dns-query-limits"],
      comment: ["record-notes"],
      expiry: ["product-expiration-notification", "disabling-expiration-notifications"],
      axfr: [
        "secondary-dns",
        "secondary-dns-dnsimple-as-secondary",
        "secondary-dns-provider-dns-made-easy",
        "secondary-dns-provider-dyn",
        "secondary-dns-dnsimple-with-hidden-primary",
      ],
      "domain validation": ["icann-domain-validation"],
      "password reset": ["forgot-password"],
      "password recovery": ["forgot-password"],
      "email not working": ["mx-record", "email-hosting"],
      "domain registration": ["registering-domain"],
      "domain name search": ["drop-catching"],
      "dns records": ["common-dns-records"],
      "2fa": [
        "multi-factor-authentication-enforcement",
        "guide-getting-started-with-your-team",
        "multi-factor-authentication",
      ],
      "domain parking": ["web-hosting"],
      "dns propagation": ["domain-resolution-issues", "record-resolution-issues"],
      "dnsimple pricing": ["dnsimple-plans", "domain-transfer-pricing"],
      "change nameservers": ["setting-name-servers", "what-is-a-nameserver"],
      "domain expiration": ["what-happens-when-domain-expires"],
      "ipv6 dns": ["ipv6-support", "aaaa-record"],
      "email settings": ["email-hosting", "email-forwarding", "mx-record"],
      "domain owner": ["changing-domain-contact", "whois-privacy"],
      login: ["getting-started"],
    };

    Object.entries(queries).forEach(([searchTerm, expectedIds]) => {
      describe(`\`${searchTerm}\``, () => {
        expectedIds
          .map((id) => `/articles/${id}/`)
          .forEach((id) => {
            it(`returns \`${id}\` as result`, () => {
              const results = subject.query(searchTerm);
              const resultIds = results.map((result) => result.id);
              expect(resultIds).toContain(id);
            });
          });
      });
    });

    it("limits results when good results are available", () => {
      const results = subject.query("alias");
      expect(results.length).toBeLessThanOrEqual(4);
    });
  });
});
