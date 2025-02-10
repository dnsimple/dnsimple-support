import { mount } from '@vue/test-utils';
import App from '../../../_widget/src/components/app/component.vue';

describe('App', () => {
  const promptMessage = 'Need Help?';

  describe('init', () => {
    const subject = mount(App);

    it('initialize props', () => {
      expect(Object.keys(App.props).includes('query')).toEqual(true);
    });

    it('initialize data attributes', () => {
      expect(subject.vm.isOpen).toEqual(false);
      expect(subject.vm.rootURL).toEqual('https://support.dnsimple.com');
    });

    it('initialize prompt', () => {
      expect(subject.vm.$el.textContent).toContain(promptMessage);
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
      const subject = mount(App);
      await subject.vm.open();

      expect(subject.vm.isOpen).toEqual(true);
      expect(subject.vm.$el.textContent).not.toContain(promptMessage);
    });

    it('pre-populates results based on the current URL', async () => {
      delete window.location;
      window.location = new URL('https://dnsimple.com/a/1/contacts/');
      const subject = mount(App);
      const expectedTitle = 'Example Title';
      window.DNSimpleSupport = { search: jest.fn(() => [{ id: '/a', title: expectedTitle }]) };

      subject.vm.isLoading = false; // To avoid the artificial loading delay

      await subject.vm.open();

      expect(subject.vm.$el.textContent).toContain(expectedTitle);
    });
  });

  describe('close', () => {
    const subject = mount(App);

    subject.vm.isOpen = true;

    it('closes the support widget', async () => {
      await subject.vm.close();

      expect(subject.vm.isOpen).toEqual(false);
      expect(subject.vm.$el.textContent).toContain(promptMessage);
    });
  });
});
