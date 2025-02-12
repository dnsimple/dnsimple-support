import { mount } from '@vue/test-utils';
import App from '../../../_widget/src/components/app/component.vue';

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
    const gettingStarted = { id: '/articles/getting-started/', title: 'Getting started', body: 'Getting started' };
    const propsData = { fetch: () => Promise.resolve([gettingStarted]) };

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
      expect(subject.text()).toContain('Getting started');
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
});
