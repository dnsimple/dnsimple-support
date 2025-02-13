<template>
  <div class="route with-footer">
    <div v-if="app.isLoading" class="loading">
      <div v-html="spinnerIcon"></div>
    </div>
    <div v-else class="articles">
      <div v-for="(articles, sourceUrl) in articlesBySource" :key="`${sourceUrl}-results`">
        <h4>
          {{ app.getSourceName(sourceUrl) }}
        </h4>
        <ul>
          <li v-for="article in articles" :key="article.id">
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
import { spinnerIcon } from '../../assets/svgs';

import "./style.scss";

export default {
  props: {
    app: Object
  },
  components: {
    Footer
  },
  data () {
    return {
      spinnerIcon
    };
  },
  computed: {
    highlighter () {
      return new RegExp(
        (this.app.q || '')
          .trim()
          .split(/\s+/)
          .filter((word) => {
            return word.length > 1;
          })
          .join('|'),
        'gi'
      );
    },
    articlesBySource() {
      return Object.groupBy(this.app.filteredArticles, (a) => a.source);
    }
  },
  methods: {
    absoluteURL (article, path) {
      return `${article.source}${path}`;
    },

    highlight (str, highlighter) {
      if (!this.app.q) return str

      return (str || '').replace(highlighter, (match) => `<mark>${match}</mark>`);
    }
  }
};
</script>
