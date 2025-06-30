import { mount } from '@vue/test-utils';
import { nextTick } from "vue";
import App from '../../../_widget/src/components/app/component.vue';
import ARTICLES from '../../../output/search.json';

describe('App', () => {
  const promptMessage = 'Need Help?';

  let propsData;

  beforeEach(() => {
    localStorage.clear();

    propsData = {
      gettingStartedUrl: 'https://support.dnsimple.com/articles/getting-started/',
      currentSiteUrl: 'https://support.dnsimple.com',
      fetch: () => Promise.resolve(ARTICLES),
    };
  });

  describe('init', () => {
    const subject = mount(App);

    it('initialize data attributes', () => {
      expect(subject.vm.isOpen).toEqual(false);
    });

    it('initialize prompt', () => {
      expect(subject.text()).toContain(promptMessage);
    });
  });

  describe('back', () => {
    let subject;

    beforeEach(() => {
      subject = mount(App, {
        propsData: Object.assign(
          {},
          propsData,
          {
            currentSiteUrl: "https://different-site.dnsimple.com" // Same-site never sees the back button
          }
        )
      });
    });

    it('visits the last route', async () => {
      await subject.find('[aria-label="Open widget"]').trigger('click');
      await subject.find('[aria-label="Visit Getting Started"]').trigger('click');
      expect(subject.text()).toContain('Our Comics');

      await subject.find('[href="https://support.dnsimple.com/articles/dnsimple-services/"]').trigger('click');
      expect(subject.text()).not.toContain('Our Comics');

      await subject.find('[aria-label="Back"]').trigger('click');
      expect(subject.text()).toContain('Our Comics');
    });
  });

  describe('open', () => {
    it('opens the support widget', async () => {
      const subject = mount(App, { propsData });

      await subject.vm.open();

      expect(subject.vm.isOpen).toEqual(true);
      expect(subject.text()).not.toContain(promptMessage);
    });

    it('opens the getting started article', async () => {
      const subject = mount(App, { propsData });

      await subject.vm.open();

      expect(subject.vm.isOpen).toEqual(true);
      expect(subject.text()).toContain('Getting Started');
    });
  });

  describe('close', () => {
    const subject = mount(App);

    subject.vm.isOpen = true;

    it('closes the support widget', async () => {
      await subject.vm.close();

      expect(subject.vm.isOpen).toEqual(false);
      expect(subject.text()).toContain(promptMessage);
    });
  });

  describe('highlighting', () => {
    let subject;

    beforeEach(async () => {
      subject = mount(App, { propsData });
      await subject.vm.open();
    });

    it('highlights a word', async () => {
      await subject.find('input').setValue('getting');

      expect(subject.html()).toContain('<mark>Getting</mark>');
    });

    it('highlights part of a word', async () => {
      await subject.find('input').setValue('Gett');

      expect(subject.html()).toContain('<mark>Gett</mark>ing');
    });
  });

  describe('sources', () => {
    it('groups the articles by source', async () => {
      const subject = mount(App, { propsData });
      await subject.vm.open();
      await subject.find('input').setValue('getting');

      expect(subject.find('h4').text()).toContain('DNSimple Support');
    });

    it('prioritizes results from the current site', async () => {
      const currentSiteUrl = 'https://developer.dnsimple.com';
      const articles = [
        { id: '/articles/foobar/', title: 'Foobar', body: 'Foobar', sourceUrl: 'https://support.dnsimple.com' },
        { id: '/articles/foobaz/', title: 'Foobaz', body: 'Foobaz', sourceUrl: 'https://developer.dnsimple.com' },
      ];
      const subject = mount(App, { props: { ...propsData, currentSiteUrl }, computed: { filteredArticles() { return articles; } } });
      await subject.vm.open();

      await subject.find('input').setValue('fooba');

      const sourceHeaders = subject.findAll('h4');
      expect(sourceHeaders.at(0).text()).toContain('DNSimple Developer');
      expect(sourceHeaders.at(1).text()).toContain('DNSimple Support');
    });
  });

  describe('categories', () => {
    let subject;

    beforeEach(async () => {
      subject = mount(App, { propsData });
      await subject.vm.open();
    });

    it('groups the articles by category', async () => {
      await subject.find('input').setValue('getting');

      expect(subject.find('.category').text()).toContain('DNSimple');
    });
  });

  describe('recently visited', () => {
    const article = ARTICLES[0];
    let recentlyVisitedUrls;
    let subject;

    beforeEach(async () => {
      recentlyVisitedUrls = JSON.stringify([`${propsData.currentSiteUrl}${article.id}`]);

      localStorage.clear();
      localStorage.setItem('recentlyVisitedUrls', recentlyVisitedUrls);

      subject = mount(App, { propsData });
      await subject.vm.open();
    });

    afterEach(() => {
      localStorage.clear();
    });

    it('shows recently visited articles when there is nothing else to display', async () => {
      await subject.find('input').setValue('search');
      await subject.find('input').setValue('');
      expect(subject.find('h4').text()).toContain('Recently Visited');

      expect(subject.find(`[aria-label="Visit ${article.title}"] > h6`).text()).toContain(article.title);
    });

    it('stores recently visited articles', async () => {
      const recentArticle = ARTICLES[1];
      await subject.find('input').setValue(recentArticle.title);

      const articleLink = subject.find(`[aria-label="Visit ${recentArticle.title}"] > h6`);
      expect(articleLink.text()).toContain(recentArticle.title);

      await articleLink.trigger('click');
      expect(subject.vm.recentlyVisitedArticles[0].id).toEqual(recentArticle.id);
      expect(subject.vm.recentlyVisitedArticles[1].id).toEqual(article.id);
    });
  });

  describe('keyboard shortcuts', () => {
    let subject;

    beforeEach(async () => {
      subject = mount(App, { propsData });
    });

    it('opens the support widget when command+K is pressed', async () => {
      const event = new KeyboardEvent("keydown", { key: "k", metaKey: true });
      await subject.vm.handleKeydown(event);

      expect(subject.vm.isOpen).toEqual(true);
    });

    it('opens the support widget when ctrl+K is pressed', async () => {
      const event = new KeyboardEvent("keydown", { key: "k", ctrlKey: true });
      await subject.vm.handleKeydown(event);

      expect(subject.vm.isOpen).toEqual(true);
    });

    it('closes the support widget when Escape is pressed', async () => {
      await subject.vm.open();

      const event = new KeyboardEvent("keydown", { key: "Escape" });
      await subject.vm.handleKeydown(event);

      expect(subject.vm.isOpen).toEqual(false);
    });

    it('handles articles navigation', async () => {
      const articles = [
        { id: '/articles/first/', title: 'First example', body: 'First article', sourceUrl: 'https://dnsimple.com' },
        { id: '/articles/second/', title: 'Second example', body: 'Second article', sourceUrl: 'https://dnsimple.com' },
        { id: '/articles/getting-started/', title: 'Getting Started', body: 'Getting started article', sourceUrl: 'https://support.dnsimple.com' }
      ];
      const props = Object.assign({}, propsData, {
        fetch: () => Promise.resolve(articles),
        currentSiteUrl: 'https://other.dnsimple.com' // force the article to open in the widget
      });
      subject = mount(App, { propsData: props });
      await subject.vm.open();
      await subject.vm.setQ('example');

      const down = new KeyboardEvent("keydown", { key: "ArrowDown" });
      await subject.vm.handleKeydown(down);
      await nextTick();

      let selectedArticle = subject.get('.selected-article');
      expect(selectedArticle.text()).toContain('First example');

      await subject.vm.handleKeydown(down);
      await nextTick();

      selectedArticle = subject.get('.selected-article');
      expect(selectedArticle.text()).toContain('Second example');

      const up = new KeyboardEvent("keydown", { key: "ArrowUp" });
      await subject.vm.handleKeydown(up);
      await nextTick();

      selectedArticle = subject.get('.selected-article');
      expect(selectedArticle.text()).toContain('First example');

      const enter = new KeyboardEvent("keydown", { key: "Enter" });
      await subject.vm.handleKeydown(enter);
      await nextTick();
      expect(subject.text()).toContain(articles[0].body);

      const back = new KeyboardEvent("keydown", { key: "ArrowLeft" });
      await subject.vm.handleKeydown(back);
      await nextTick();
      expect(subject.text()).toContain('First example');
      expect(subject.text()).toContain('Second example');
    });
  });

  describe('when remote data cannot be loaded', () => {
    let subject;

    beforeEach(async () => {
      subject = mount(App, { propsData: { fetch: () => Promise.reject() } });
      await subject.vm.open();
    });

    it ('shows an error message', () => {
      expect(subject.text()).toContain('We couldn\'t load our support articles. Please try reloading the page.');
    });
  });

  describe('when on the same-site', () => {
    let subject;
    let externalLinkProbe;

    beforeEach(() => {
      externalLinkProbe = jest.fn();

      subject = mount(App, {
        propsData: Object.assign(
          {},
          propsData,
          {
            externalLinkProbe
          }
        )
      });
    });

    it('opens search result links in a regular page', async () => {
      await subject.find('[aria-label="Open widget"]').trigger('click');
      await subject.find('[aria-label="Visit Getting Started"]').trigger('click');

      expect(externalLinkProbe).toHaveBeenCalledWith('https://support.dnsimple.com/articles/getting-started/');
    });

    it('opens links in the body of the article in a regular page', async () => {
      await subject.find('[aria-label="Open widget"]').trigger('click');
      await subject.find('[aria-label="Visit Getting Started"]').trigger('click');
      await subject.find('[href="https://support.dnsimple.com/articles/dnsimple-services/"]').trigger('click');

      expect(externalLinkProbe).toHaveBeenCalledWith('https://support.dnsimple.com/articles/dnsimple-services/');
    });
  });

  describe('when on a different-site', () => {
    let subject;
    let externalLinkProbe;

    beforeEach(() => {
      externalLinkProbe = jest.fn();

      subject = mount(App, {
        propsData: Object.assign(
          {},
          propsData,
          {
            currentSiteUrl: "https://different-site.dnsimple.com",
            externalLinkProbe
          }
        )
      });
    });

    it('opens the search result links in the widget', async () => {
      await subject.find('[aria-label="Open widget"]').trigger('click');
      await subject.find('[aria-label="Visit Getting Started"]').trigger('click');

      expect(externalLinkProbe).not.toHaveBeenCalled();
      expect(subject.text()).toContain('Our Comics');
    });

    it('opens links in the body of the article in the widget', async () => {
      await subject.find('[aria-label="Open widget"]').trigger('click');
      await subject.find('[aria-label="Visit Getting Started"]').trigger('click');
      await subject.find('[href="https://support.dnsimple.com/articles/dnsimple-services/"]').trigger('click');

      expect(externalLinkProbe).not.toHaveBeenCalled();
      expect(subject.text()).toContain('DNSimple provides essential services for every Internet-connected system');
    });

    it('opens hash links in the widget', async () => {
      await subject.find('[aria-label="Open widget"]').trigger('click');
      await subject.find('[aria-label="Visit Getting Started"]').trigger('click');
      await subject.find('[href="https://dnsimple.com/pricing/"]').trigger('click');
      await subject.find('[href$="#have-more-questions"]').trigger('click');

    //   expect(externalLinkProbe).not.toHaveBeenCalled();
      expect(subject.text()).toContain('Have more questions?');
    });
  });
});
