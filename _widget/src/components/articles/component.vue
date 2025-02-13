<template>
  <div class="route with-footer">
    <div v-if="app.isLoading" class="loading">
      <div v-html="spinnerIcon"></div>
    </div>
    <div v-else class="articles">
      <div v-for="(articles, sourceUrl) in articlesBySource" :key="`${sourceUrl}-results`">
        <h4>
          {{ app.getSourceName(sourceUrl) }}
          <a :href="sourceUrl" v-html="externalLink" target="_blank" class="external-link"></a>
        </h4>
        <ul>
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

          <li v-if="!app.filteredArticles.length">
            <p>We could not find any articles for: <strong>{{ app.q }}</strong></p>
          </li>
        </ul>
      </div>

      <ul v-if="!app.filteredArticles.length">
        <li>
          <p>We could not find any articles for: <strong>{{ app.q }}</strong></p>
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
    articlesBySource() {
      return Object.groupBy(this.app.filteredArticles, (a) => a.sourceUrl);
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
      const articles = Object.values(this.articlesBySource).flat();

      if (!this.selectedArticle) return this.selectedArticle = articles[0];

      const currentIndex = articles.findIndex(a => this.isSelectedArticle(a));
      const nextArticle = articles[currentIndex + 1];

      if (nextArticle) this.selectedArticle = nextArticle;
    },

    selectPrevArticle () {
      const articles = Object.values(this.articlesBySource).flat();

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
