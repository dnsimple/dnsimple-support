import { mount } from '@vue/test-utils';
import { nextTick } from "vue";
import App from '../../../_widget/src/components/app/component.vue';
import ARTICLES from '../../../output/search.json';

const propsData = {
  gettingStartedUrl: 'https://support.dnsimple.com/articles/getting-started/',
  currentSiteUrl: 'https://support.dnsimple.com',
  fetch: () => Promise.resolve(ARTICLES)
};

describe('App', () => {
  const promptMessage = 'Need Help?';

  describe('init', () => {
    const subject = mount(App);

    it('initialize data attributes', () => {
      expect(subject.vm.isOpen).toEqual(false);
    });

    it('initialize prompt', () => {
      expect(subject.text()).toContain(promptMessage);
    });
  });

  describe('go', () => {
    const subject = mount(App);

    it('visits a route with params', () => {
      const route = ['Article', { title: 'Title' }];

      subject.vm.go(route[0], route[1]);

      expect(subject.vm.history).toHaveLength(1);
      expect(subject.vm.currentRoute).toEqual(route);
    });
  });

  describe('back', () => {
    const subject = mount(App);

    it('visits the last route', () => {
      const route1 = ['Article', { title: 'Title' }];
      const route2 = ['Article', { title: 'Title #2' }];

      subject.vm.go(route1[0], route1[1]);
      subject.vm.go(route2[0], route2[1]);
      subject.vm.back();

      expect(subject.vm.history).toHaveLength(1);
      expect(subject.vm.currentRoute).toEqual(route1);
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

  describe('article links', () => {
    let subject;

    describe('when using the widget in the same site', () => {
      beforeEach(async () => {
        subject = mount(App, { propsData });
        await subject.vm.open();
      });

      it('does not open article links of the same site in the widget', () => {
        expect(subject.find('.article a').element.onclick).toBeNull();
      });
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
        { id: '/articles/first/', title: 'First', body: 'First', sourceUrl: 'https://dnsimple.com' },
        { id: '/articles/second/', title: 'Second', body: 'Second', sourceUrl: 'https://dnsimple.com' },
      ];
      subject = mount(App, { props: { ...propsData }, computed: { filteredArticles() { return articles; } } });
      await subject.vm.open();

      const down = new KeyboardEvent("keydown", { key: "ArrowDown" });
      await subject.vm.handleKeydown(down);
      await nextTick();

      let selectedArticle = subject.get('.selected-article');
      expect(selectedArticle.text()).toContain('First');

      await subject.vm.handleKeydown(down);
      await nextTick();

      selectedArticle = subject.get('.selected-article');
      expect(selectedArticle.text()).toContain('Second');

      const up = new KeyboardEvent("keydown", { key: "ArrowUp" });
      await subject.vm.handleKeydown(up);
      await nextTick();

      selectedArticle = subject.get('.selected-article');
      expect(selectedArticle.text()).toContain('First');

      const enter = new KeyboardEvent("keydown", { key: "Enter" });
      await subject.vm.handleKeydown(enter);
      await nextTick();

      expect(subject.vm.currentRoute).toEqual(['Article', articles[0]]);
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
});
