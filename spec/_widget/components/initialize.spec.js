import initialize from '../../../_widget/src/initialize.js';
import ARTICLES from '../../../output/search.json';

describe('Initialize', () => {
  let subject;
  let goExternal;
  let fetch;

  // The widget lives in a shadow root now, so its markup is not in
  // document.body.innerHTML. Read it, and query it, through the root.
  const root = () => document.querySelector('#dnsimple-support-widget').shadowRoot;
  const widgetHtml = () => root().innerHTML;

  beforeEach(() => {
    goExternal = jest.fn();
    fetch = jest.fn(() => Promise.resolve(ARTICLES));
  });

  describe('when the target div is already on the page', () => {
    it('mounts the app to the div', () => {
      document.body.innerHTML = `<div id="dnsimple-support-widget"></div>`;
      subject = initialize(document);

      expect(widgetHtml()).toContain('Need Help?');
    });
  });

  describe('when the target div is not already on the page', () => {
    it('prepends the app to the body', () => {
      document.body.innerHTML = ``;
      subject = initialize(document);

      expect(widgetHtml()).toContain('Need Help?');
    });
  });

  it('keeps its markup out of the host document', () => {
    document.body.innerHTML = ``;
    subject = initialize(document);

    expect(document.body.innerHTML).not.toContain('Need Help?');
    expect(document.querySelector('#dnsimple-support-widget').shadowRoot).not.toBeNull();
  });

  it('sets the current site url', () => {
    const currentSiteUrl = 'https://foo.bar';
    document.body.innerHTML = `<p data-dnsimple-current-site-url="${currentSiteUrl}"></p>`;

    subject = initialize(document);

    expect(subject.getCurrentSiteUrl()).toEqual(currentSiteUrl);
  });

  it('sets the getting started url', () => {
    const gettingStartedUrl = 'https://foo.baz';
    document.body.innerHTML = `<p data-dnsimple-getting-started-url="${gettingStartedUrl}"></p>`;

    subject = initialize(document);

    expect(subject.getGettingStartedUrl()).toEqual(gettingStartedUrl);
  });

  describe('when there are custom openers on the page', () => {
    beforeEach(() => {
      document.body.innerHTML = `<a data-dnsimple-open-support-widget>Opener</a>`;

      subject = initialize(document, {
        fetch: jest.fn(() => Promise.resolve(ARTICLES))
      });
    });

    it('opens when clicking on the openers', async () => {
      await document.body.querySelector('[data-dnsimple-open-support-widget]').click();

      expect(widgetHtml()).toContain('Try some keywords');
    });
  });

  describe('when there are no custom openers on the page', () => {
    beforeEach(() => {
      document.body.innerHTML = ``;

      subject = initialize(document, {
        fetch: jest.fn(() => Promise.resolve(ARTICLES))
      });
    });

    it('opens when clicking on the default opener', async () => {
      await root().querySelector('[aria-label="Open widget"]').click();

      expect(widgetHtml()).toContain('Try some keywords');
    });
  });
});
