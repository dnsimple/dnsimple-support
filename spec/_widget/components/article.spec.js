import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import Article from '../../../_widget/src/components/article/component.vue';

const flushNextTick = () => new Promise((resolve) => setTimeout(resolve, 0));

describe('Article', () => {
  const app = {
    hasHistory: () => false,
    back: () => {},
    getArticleUrl: (article) => `${article.sourceUrl}${article.id}`,
    visitArticle: jest.fn(),
  };

  const mountArticle = (body) => mount(Article, {
    props: {
      app,
      article: {
        id: '/articles/getting-started/',
        title: 'Getting Started',
        sourceUrl: 'https://support.dnsimple.com',
        body,
      },
    },
  });

  it('rewrites root-relative image sources to the article source', async () => {
    const subject = mountArticle('<img src="/files/getting-started-account-get-started.png" alt="Get Started">');
    await nextTick();
    await flushNextTick();

    const img = subject.find('img');
    expect(img.attributes('src')).toBe('https://support.dnsimple.com/files/getting-started-account-get-started.png');
  });

  it('leaves absolute image sources untouched', async () => {
    const subject = mountArticle('<img src="https://cdn.example.com/logo.png" alt="Logo">');
    await nextTick();
    await flushNextTick();

    const img = subject.find('img');
    expect(img.attributes('src')).toBe('https://cdn.example.com/logo.png');
  });

  it('rewrites root-relative anchor hrefs to the article source', async () => {
    const subject = mountArticle('<a href="/articles/other/">Other</a>');
    await nextTick();
    await flushNextTick();

    const link = subject.find('.article a');
    expect(link.attributes('href')).toBe('https://support.dnsimple.com/articles/other/');
  });
});
