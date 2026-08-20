import { mount } from '@vue/test-utils';
import Footer from '../../../_widget/src/components/footer/component.vue';

describe('Footer', () => {
  const mountWith = (contactUrl) => mount(Footer, {
    propsData: { app: { getContactUrl: () => contactUrl } }
  });

  it('points "Get in touch" at the contact url the app was given', () => {
    const subject = mountWith('https://app.dnsimple.com/contact');

    expect(subject.get('a.button').attributes('href')).toEqual('https://app.dnsimple.com/contact');
  });
});
