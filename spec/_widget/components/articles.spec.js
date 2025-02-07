import { mount } from '@vue/test-utils';
import Articles from '../../../_widget/src/components/articles/component.vue';

describe('Articles', () => {
  const article = { id: '1', title: 'Title One', body: 'Article One' };
  const subject = mount(Articles, {
    propsData: {
      app: {
        currentRoute: ['Article', article],
        track () {},
        q: '',
        articles: [article, { id: '2', title: 'Title Two', body: 'Article Two' }]
      }
    }
  });

  describe('init', () => {
    it('initializes props', () => {
      const propKeys = Object.keys(Articles.props);

      expect(propKeys).toContain('app');
    });
  });

  describe('highlightWord', () => {
    it('highlights a word', () => {
      expect(subject.vm.highlightWord('a')).toEqual('<mark>a</mark>');
    });
  });

  describe('highlight', () => {
    it('highlights a word in a phrase', () => {
      expect(subject.vm.highlight('phrase', 'a')).toEqual(
        'phr<mark>a</mark>se'
      );
    });
  });
});
