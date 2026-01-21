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
});
