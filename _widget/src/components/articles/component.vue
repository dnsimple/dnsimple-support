<template>
  <div class="route with-footer">
    <div v-if="app.isLoading" class="loading">
      <div v-html="spinnerIcon"></div>
    </div>
    <div v-else class="articles">
      <div v-for="(articlesByCategory, sourceUrl) in articlesBySourceAndCategory" :key="`${sourceUrl}-results`">
        <h4>
          {{ app.getSourceName(sourceUrl) }}
          <a :href="sourceUrl" v-html="externalLink" target="_blank" class="external-link"></a>
        </h4>
        <ul>
          <div v-for="(articles, category) in articlesByCategory" :key="`${category}-articles`">
            <h3 v-if="category !== 'undefined'" class="category">{{ category }}</h3>
            <li v-for="article in articles" :key="article.id">
              <div :class="{ 'selected-article': isSelectedArticle(article) }">
                <h3>
                  <a
                    v-if="sourceUrl === app.getCurrentSiteUrl()"
                    v-html="highlight(article.title, highlighter)"
                    :href="absoluteURL(article, article.id)"
                  ></a>
                  <a
                    v-else
                    @click.prevent="app.go('Article', article)"
                    v-html="highlight(article.title, highlighter)"
                    :href="absoluteURL(article, article.id)"
                  ></a>
                </h3>

                <p
                  v-html="highlight(article.excerpt, highlighter)"
                  class="excerpt"
                ></p>
              </div>
            </li>
          </div>

          <li v-if="!app.filteredArticles.length" class="pb0">
            <p>We couldn't find any articles for: <strong>{{ app.q }}</strong></p>
          </li>
        </ul>
      </div>

      <ul v-if="!app.filteredArticles.length">
        <li class="pb0">
          <p>We couldn't find any articles for: <strong>{{ app.q }}</strong></p>
        </li>
      </ul>

      <Footer :app="app" />
    </div>
  </div>
</template>

<script>
import Footer from '../footer/component.vue';
import { spinnerIcon, externalLink } from '../../assets/svgs';

import "./style.scss";

export default {
  props: {
    app: Object,
  },
  components: {
    Footer
  },
  data () {
    return {
      spinnerIcon,
      externalLink,
      selectedArticle: null,
    };
  },
  computed: {
    highlighter () {
      return new RegExp(
        (this.app.q || '')
          .trim()
          .split(/\s+/)
          .filter((word) => word.length > 1)
          .join('|'),
        'gi'
      );
    },
    articlesBySourceAndCategory() {
      const results = this.app.filteredArticles.reduce((result, article) => {
        const { sourceUrl, categories } = article;
        const category = categories?.[0];

        if (!result[sourceUrl])
          result[sourceUrl] = {};

        if (!result[sourceUrl][category])
          result[sourceUrl][category] = [];

        result[sourceUrl][category].push(article);

        return result;
      }, {});

      // prioritize results from the current site by ordering them at the top
      const currentSiteUrl = this.app.getCurrentSiteUrl();
      return {
        ...(currentSiteUrl in results ? { [currentSiteUrl]: results[currentSiteUrl] } : {}),
        ...results
      };
    }
  },
  methods: {
    absoluteURL (article, path) {
      return `${article.sourceUrl}${path}`;
    },

    highlight (str, highlighter) {
      if (!this.app.q) return str;

      return (str || '').replace(highlighter, (match) => `<mark>${match}</mark>`);
    },

    isSelectedArticle (article) {
      return this.selectedArticle &&
        this.selectedArticle.sourceUrl === article.sourceUrl &&
        this.selectedArticle.id === article.id;
    },

    selectNextArticle () {
      const articles = Object.values(this.articlesBySourceAndCategory).map(a => Object.values(a)).flat(2);

      if (!this.selectedArticle) return this.selectedArticle = articles[0];

      const currentIndex = articles.findIndex(a => this.isSelectedArticle(a));
      const nextArticle = articles[currentIndex + 1];

      if (nextArticle) this.selectedArticle = nextArticle;
    },

    selectPrevArticle () {
      const articles = Object.values(this.articlesBySourceAndCategory).map(a => Object.values(a)).flat(2);

      if (!this.selectedArticle) return this.selectedArticle = articles[0];

      const currentIndex = articles.findIndex(a => this.isSelectedArticle(a));
      const prevArticle = articles[currentIndex - 1];

      if (prevArticle) this.selectedArticle = prevArticle;
    },

    openSelectedArticle () {
      if (!this.selectedArticle) return;

      if (this.selectedArticle.sourceUrl === this.app.getCurrentSiteUrl())
        window.location.href = this.absoluteURL(this.selectedArticle, this.selectedArticle.id);
      else
        this.app.go('Article', this.selectedArticle);
    }
  }
};
</script>
