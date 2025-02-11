import { mount } from '@vue/test-utils';
import Article from '../../../_widget/src/components/article/component.vue';

describe('Article', () => {
  const article = { id: '1', title: 'Title One', body: 'Article One' };
  const subject = mount(Article, {
    propsData: {
      app: {
        track () {},
        q: '',
        articles: [article, { id: '2', title: 'Title Two', body: 'Article Two' }],
        hasHistory() { return false; },
        findArticle() { return article }
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
