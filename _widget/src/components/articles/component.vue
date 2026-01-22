<template>
  <div class="route with-footer">
    <span v-html="trustyIcon" class="back" />

    <div v-if="app.isLoading" class="loading">
      <div v-html="spinnerIcon"></div>
    </div>

    <div v-else-if="app.filteredArticles.length" class="articles">
      <div v-for="(articlesByCategory, sourceUrl) in articlesBySourceAndCategory" :key="`${sourceUrl}-results`">
        <h4>
          {{ app.getSourceName(sourceUrl) }}
          <a :href="sourceUrl" v-html="externalLink" target="_blank" class="external-link"></a>
        </h4>

        <div v-for="(articles, category) in articlesByCategory" :key="`${category}-articles`">
          <h5 v-if="category !== 'undefined'" class="category">{{ category }}</h5>

          <ul>
            <li v-for="article in articles" :key="article.id" :class="{ 'selected-article': isSelectedArticle(article) }">
              <a
                :ref="isSelectedArticle(article) ? 'selected' : 'notSelected'"
                @click="app.visitArticle(app.getArticleUrl(article), $event)"
                :href="app.getArticleUrl(article)"
                :aria-label="`Visit ${article.title}`"
              >
                <h6 v-html="highlight(article.title, highlighter)"></h6>
                <p
                  v-html="highlight(article.excerpt, highlighter)"
                  class="excerpt"
                ></p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-else-if="app.hasRecentlyVisitedArticles && app.q.length === 0" class="articles">
      <h4>Recently Visited</h4>
      <ul>
        <li v-for="article in app.recentlyVisitedArticles" :key="article.id" :class="{ 'selected-article': isSelectedArticle(article) }">
          <a
            :ref="isSelectedArticle(article) ? 'selected' : 'notSelected'"
            @click="app.visitArticle(app.getArticleUrl(article), $event)"
            :href="app.getArticleUrl(article)"
            :aria-label="`Visit ${article.title}`"
          >
            <h6 v-html="highlight(article.title, highlighter)"></h6>
            <p
              v-html="highlight(article.excerpt, highlighter)"
              class="excerpt"
            ></p>
          </a>
        </li>
      </ul>
    </div>

    <div v-else-if="app.q.length > 0" class="articles">
      <ul>
        <li class="pb0">
          <p class="a-padding">We couldn't find any articles for: <strong>{{ app.q }}</strong></p>
        </li>
      </ul>
    </div>

    <div v-else class="articles">
      <ul>
        <li class="pb0">
          <p class="a-padding">Try searching for something like "alias" or "transfer"</p>
        </li>
      </ul>
    </div>

    <Footer :app="app" />
  </div>
</template>

<script>
import Footer from '../footer/component.vue';
import { spinnerIcon, externalLink, trustyIcon } from '../../assets/svgs';

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
      trustyIcon,
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
    highlight (str, highlighter) {
      if (!this.app.q) return str;

      return (str || '').replace(highlighter, (match) => `<mark>${match}</mark>`);
    },

    isSelectedArticle (article) {
      return this.selectedArticle &&
        this.selectedArticle.sourceUrl === article.sourceUrl &&
        this.selectedArticle.id === article.id;
    },

    selectNoArticle() {
      this.selectedArticle = null;
    },

    selectFirstArticle() {
      const firstArticleTag = [...this.$el.querySelectorAll('li > a')][0];

      if (firstArticleTag) 
        this.selectedArticle = this.app.findArticle(firstArticleTag.href);
      
    },

    selectNextArticle () {
      if (!this.selectedArticle) {
        this.selectFirstArticle();

        return;
      }

      const articles = [...this.$el.querySelectorAll('li > a')];
      const currentIndex = articles.findIndex(a => this.isSelectedArticle(this.app.findArticle(a.href)));
      const nextArticleTag = articles[currentIndex + 1];

      if (nextArticleTag) 
        this.selectedArticle = this.app.findArticle(nextArticleTag.href);
      
    },

    selectPrevArticle () {
      if (!this.selectedArticle) {
        this.selectFirstArticle();

        return;
      }

      const articles = [...this.$el.querySelectorAll('li > a')];
      const currentIndex = articles.findIndex(a => this.isSelectedArticle(this.app.findArticle(a.href)));
      const prevArticleTag = articles[currentIndex - 1];

      if (prevArticleTag) 
        this.selectedArticle = this.app.findArticle(prevArticleTag.href);
      
    },

    openSelectedArticle () {
      if (!this.$refs.selected || !this.$refs.selected[0]) return;

      this.$refs.selected[0].click();
    },
  }
};
</script>
