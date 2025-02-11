<template>
    <div id="dnsimple-support">
        <div v-if="isOpen">
            <div class="overlay" @click="close"></div>
            <div class="dnsimple-modal animated fadeInUp faster">
              <Header :app="app" ref="header"/>
              <Component :is="currentRoute[0]" :app="app" :article="currentRoute[1]"></Component>
            </div>
        </div>
        <Prompt v-else-if="showPrompt" :app="app"/>
    </div>
</template>

<script>
import { nextTick } from 'vue';
import { urlMatchingDictionary } from './url-dictionary.js';

import Footer from '../footer/component.vue';
import Header from '../header/component.vue';

import Article from '../article/component.vue';
import Articles from '../articles/component.vue';
import Prompt from '../prompt/component.vue';
import { search, prepareArticles } from './search.js';

import "./variables.scss";
import "./reset.scss";
import "./style.scss";

const ANIMATION_TIMEOUT = 500;

export default {
  components: {
    Footer,
    Header,

    Article,
    Articles,
    Prompt
  },
  props: {
    query: {
      default: ''
    },
    showPrompt: {
      default: true
    },
    currentSiteUrl: {
      type: String,
      default: ''
    }
  },
  data () {
    const query = this.query || urlMatchingDictionary(window.location.href);

    window.support = this;

    return {
      app: this,
      currentRoute: ['Articles'],
      q: query,
      isOpen: false,
      isLoading: true,
      isFetched: false,
      history: [],
      articles: []
    };
  },

  watch: {
    q (val) {
      if (val.length > 2) {
        if (this.currentRoute[0] !== 'Articles')
          this.go('Articles', undefined, true);
      } else if (!val.length)
        this.go('Article', this.gettingStarted, true);

    }
  },

  computed: {
    filteredArticles () {
      return search(this.q, this.articles);
    },

    gettingStarted() {
      return this.articles.find((article) => article.id === '/articles/getting-started/');
    }
  },
  methods: {
    go (page, params, ignoreHistory) {
      if (!ignoreHistory)
        this.history.push(this.currentRoute);

      this.currentRoute = [page, params];
    },

    back () {
      this.currentRoute = this.history.pop();
    },

    open () {
      this.isOpen = true;

      setTimeout(() => {
        this.fetchArticles(() => {
          if (this.filteredArticles.length === 1)
            this.go('Article', this.filteredArticles[0]);
          else if (this.filteredArticles.length === 0) {
            this.go('Article', this.gettingStarted, true);
            this.focus();
          }
        });
      }, ANIMATION_TIMEOUT);
    },

    focus () {
      nextTick(() => {
        const $header = this.$refs.header;

        if ($header !== null && $header !== undefined)
          $header.$refs.input.focus();
      });
    },

    close () {
      this.isOpen = false;
    },

    fetchArticles (done) {
      if (this.isFetched) return done();

      const source = `https://support.dnsimple.com/search.json`;

      fetch(source)
        .then((response) => response.json())
        .then((articles) => {
          prepareArticles(articles, source);
          this.articles.push(...articles);
          this.isFetched = true;
          this.isLoading = false;
          done();
        });
    },

    setQ (q) {
      this.q = q;
    },

    getCurrentSiteUrl() {
      return this.currentSiteUrl;
    },

    hasHistory() {
      return this.history.length > 0;
    }
  }
};
</script>

