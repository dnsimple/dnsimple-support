import { mount } from '@vue/test-utils';
import Article from '../../../_widget/src/components/article/component.vue';

describe('Article', () => {
  const article = { id: '1', title: 'Title One', body: 'Article One', sourceUrl: 'https://support.dnsimple.com' };
  const subject = mount(Article, {
    propsData: {
      app: {
        track () {},
        q: '',
        hasHistory() { return false; },
        findArticle() { return article; },
        getCurrentSiteUrl() { return 'https://support.dnsimple.com'; }
      },
      article
    }
  });

  describe('init', () => {
    it('initializes props', () => {
      const propKeys = Object.keys(Article.props);

      expect(propKeys).toContain('app');
      expect(propKeys).toContain('article');
    });
  });

  describe('prepAbsoluteLink', () => {
    const a = {};
    it('adds target', () => {
      subject.vm.prepAbsoluteLink(a);

      expect(a.target).toEqual('_blank');
    });
  });

  describe('prepRelativeLink', () => {
    const a = { getAttribute () { return '/'; } };

    it('adds onclick', () => {
      subject.vm.prepRelativeLink(a);

      expect(a.onclick).toBeInstanceOf(Function);
    });
  });
});
