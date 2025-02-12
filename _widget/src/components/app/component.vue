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
import Search from './search.js';

import "./variables.scss";
import "./reset.scss";
import "./style.scss";

export default {
  components: {
    Footer,
    Header,

    Article,
    Articles,
    Prompt
  },
  props: {
    showPrompt: {
      default: true
    },
    currentSiteUrl: {
      type: String,
      default: ''
    },
    fetch: {
      type: Function,
      default(url) {
        return window.fetch(url).then((r) => r.json());
      }
    },
    search: {
      type: Object,
      default() { return new Search() }
    }
  },
  data () {
    window.support = this;

    return {
      app: this,
      currentRoute: ['Articles'],
      initialQ: urlMatchingDictionary(window.location.href) || '/articles/getting-started/',
      q: '',
      isOpen: false,
      isLoading: true,
      isFetched: false,
      history: [],
      articles: []
    };
  },

  watch: {
    q (val) {
      if (val.length > 1) {
        if (this.currentRoute[0] !== 'Articles')
          this.go('Articles', undefined, true);
      } else if (!val.length)
        this.go('Article', this.gettingStarted, true);
    }
  },

  computed: {
    filteredArticles () {
      return this.query(this.q || this.initialQ);
    },

    gettingStarted() {
      return this.findArticle('/articles/getting-started/');
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

      return new Promise((resolve) => {
        this.fetchArticles('https://support.dnsimple.com', () => {
          if (this.filteredArticles.length === 1)
            this.go('Article', this.filteredArticles[0], true);
          else if (this.filteredArticles.length === 0) {
            this.go('Article', this.gettingStarted, true);
            this.focus();
          }

          resolve();
        });
      });
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

    fetchArticles (source, done) {
      if (this.isFetched) return done();

      this.fetch(`${source}/search.json`)
        .then((articles) => {
          this.addArticles(articles, source)
          this.isFetched = true;
          this.isLoading = false;
          done();
        })
        .catch(console.error);
    },

    query(q) {
      return this.search.query(q)
    },

    findArticle(id) {
      return this.search.findById(id);
    },

    addArticles(articles, source) {
      return this.search.addArticles(articles, source);
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

