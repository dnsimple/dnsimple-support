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
  });

  it("can find results with a truncated query", () => {
    const results1 = subject.query("hostin");
    expect(results1.map((r) => r.title).slice(0, 3)).toContain("Web Hosting Support");

    const results2 = subject.query("reg");
    expect(results2.map((r) => r.title).slice(0, 3)).toContain("Registering a Domain");
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

  describe("dictionary expansion", () => {
    // Maps dictionary keys to expected articles based on old query specs
    const dictionaryQueries = {
      "add user": ["account-users"],
      "metrics": ["dns-query-limits"],
      "stats": ["dns-query-limits"],
      "observability": ["dns-query-limits"],
      "queries": ["dns-query-limits"],
      "analytics": ["dns-query-limits"],
      "comment": ["record-notes"],
      "expiry": ["product-expiration-notification", "disabling-expiration-notifications"],
      "axfr": ["secondary-dns"],
      "2fa": ["multi-factor-authentication"],
      "login": ["getting-started"],
      "transfer": ["domain-transfer", "transferring-domain-away"],
      "validation": ["icann-domain-validation"],
      "propagation": ["domain-resolution-issues"],
      "ipv6": ["ipv6-support"],
      "email": ["mx-record", "email-forwarding"],
      "registration": ["registering-domain"],
      "nameservers": ["setting-name-servers"],
      "delegate": ["setting-name-servers"],
    };

    Object.entries(dictionaryQueries).forEach(([searchTerm, expectedIds]) => {
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
  });
});
