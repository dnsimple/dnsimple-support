<template>
    <div id="dnsimple-support">
        <div v-if="isOpen">
            <div class="overlay" @click="close"></div>
            <div class="dnsimple-modal animated fadeInUp faster">
              <Header :app="app" ref="header"/>
              <Component :is="currentRoute[0]" :app="app" :article="currentRoute[1]" ref="body"></Component>
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
    gettingStartedUrl: {
      type: String,
      default: 'https://support.dnsimple.com/articles/getting-started/'
    },
    fetch: {
      type: Function,
      default(url) {
        return window.fetch(url).then((r) => r.json());
      }
    },
    search: {
      type: Object,
      default() { return new Search(); }
    },
    sources: {
      type: Array,
      default() {
        return [
          { name: 'DNSimple Support', url: 'https://support.dnsimple.com' },
          { name: 'DNSimple Developer', url: 'https://developer.dnsimple.com' }
        ];
      }
    }
  },
  data () {
    window.support = this;

    return {
      app: this,
      currentRoute: ['Articles'],
      initialQ: urlMatchingDictionary(window.location.href) || this.gettingStartedUrl,
      q: '',
      isOpen: false,
      isFetched: {},
      history: []
    };
  },

  watch: {
    q () {
      this.chooseRoute();
    }
  },

  computed: {
    filteredArticles () {
      return this.query(this.q || this.initialQ);
    },

    gettingStarted() {
      return this.findArticle(this.gettingStartedUrl);
    },

    isLoading() {
      return this.sources.filter((s) => this.isFetched[s.url]).length < this.sources.length;
    },

    couldNotLoad() {
      return !this.gettingStarted;
    },

    errorArticle() {
      return {
        id: '' ,
        sourceUrl: '',
        title: 'Something went wrong',
        body: 'We couldn\'t load our support articles. Please try reloading the page.',
      };
    }
  },

  mounted () {
    document.addEventListener("keydown", this.handleKeydown);
  },

  beforeUnmount () {
    document.removeEventListener("keydown", this.handleKeydown);
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

      return Promise
        .all(
          // We catch the errors here so that the show can go on
          this.sources.map((s) => this.fetchArticles(s.url).catch(() => {}))
        )
        .then(this.chooseRoute);
    },

    chooseRoute() {
      if (this.couldNotLoad)
        this.go('Article', this.errorArticle, true);
       else if (this.filteredArticles.length === 0 && this.q.length === 0)
        this.go('Article', this.gettingStarted, true);
       else if (this.filteredArticles.length === 0 && this.q.length > 0)
        this.go('Articles', undefined, true);
       else if (this.filteredArticles.length === 1)
        this.go('Article', this.filteredArticles[0], true);
       else if (this.currentRoute[0] !== 'Articles')
        this.go('Articles', undefined, true);
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

    fetchArticles (sourceUrl) {
      if (this.isFetched[sourceUrl]) return Promise.resolve();

      return this.fetch(`${sourceUrl}/search.json`)
        .then((articles) => {
          this.addArticles(articles, sourceUrl);
          this.isFetched[sourceUrl] = true;
        });
    },

    query(q) {
      return this.search.query(q);
    },

    findArticle(url) {
      return this.search.findArticle(url);
    },

    addArticles(articles, sourceUrl) {
      return this.search.addArticles(articles, sourceUrl);
    },

    getSources() {
      return this.sources;
    },

    getSourceName(sourceUrl) {
      return this.getSources().find((source) => source.url === sourceUrl)?.name;
    },

    setQ (q) {
      this.q = q;
    },

    getCurrentSiteUrl() {
      return this.currentSiteUrl;
    },

    hasHistory() {
      return this.history.length > 0;
    },

    handleKeydown(event) {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();

        this.open();
        this.focus();
      } else if (event.key === "Escape")
        this.close();
      else if (event.key === "ArrowDown" && this.currentRoute[0] === 'Articles') {
        event.preventDefault();

        nextTick(() => {
          const $body = this.$refs.body;
          if (!$body) return;

          $body.selectNextArticle();

          nextTick(() => {
            const selectedDiv = document.querySelector('.selected-article');
            selectedDiv && selectedDiv.scrollIntoView({ behavior: 'instant', block: 'nearest' });
          });
        });
      } else if (event.key === "ArrowUp" && this.currentRoute[0] === 'Articles') {
        event.preventDefault();

        nextTick(() => {
          const $body = this.$refs.body;
          if (!$body) return;

          $body.selectPrevArticle();

          nextTick(() => {
            const selectedDiv = document.querySelector('.selected-article');
            selectedDiv && selectedDiv.scrollIntoView({ behavior: 'instant', block: 'nearest' });
          });
        });
      } else if (event.key === "Enter" && this.currentRoute[0] === 'Articles') {
        event.preventDefault();

        nextTick(() => {
          const $body = this.$refs.body;
          if (!$body) return;

          $body.openSelectedArticle();
        });
      }
    }
  }
};
</script>

