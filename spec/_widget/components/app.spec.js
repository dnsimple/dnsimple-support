import { mount } from '@vue/test-utils';
import App from '../../../_widget/src/components/app/component.vue';
import ARTICLES from '../../../output/search.json';

const propsData = {
  gettingStartedUrl: '/articles/getting-started/',
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
        await subject.vm.go('Article', subject.vm.findArticle(subject.find('.articles li a').element.href), true);
      });

      it('does not open article links of the same site in the widget', () => {
        expect(subject.find('.article a').element.onclick).toBeNull();
      });
    });
  });

  describe('sources', () => {
    let subject;

    beforeEach(async () => {
      subject = mount(App, { propsData });
      await subject.vm.open();
    });

    it('groups the articles by source', async () => {
      await subject.find('input').setValue('getting');

      expect(subject.find('h4').text()).toContain('DNSimple Support');
    });
  });

  describe('keyboard shortcuts', () => {
    it('opens the support widget when command+K is pressed', async () => {
      const gettingStarted = { id: '/articles/getting-started/', title: 'Getting started', body: 'Getting started' };
      const propsData = { fetch: () => Promise.resolve([gettingStarted]) };
      const subject = mount(App, { propsData });

      const event = new KeyboardEvent("keydown", { key: "k", metaKey: true });
      await subject.vm.handleKeydown(event);

      expect(subject.vm.isOpen).toEqual(true);
    });

    it('opens the support widget when ctrl+K is pressed', async () => {
      const gettingStarted = { id: '/articles/getting-started/', title: 'Getting started', body: 'Getting started' };
      const propsData = { fetch: () => Promise.resolve([gettingStarted]) };
      const subject = mount(App, { propsData });

      const event = new KeyboardEvent("keydown", { key: "k", ctrlKey: true });
      await subject.vm.handleKeydown(event);

      expect(subject.vm.isOpen).toEqual(true);
    });

    it('closes the support widget when Escape is pressed', async () => {
      const subject = mount(App);
      subject.vm.isOpen = true;

      const event = new KeyboardEvent("keydown", { key: "Escape" });
      await subject.vm.handleKeydown(event);

      expect(subject.vm.isOpen).toEqual(false);
    });
  });
});
