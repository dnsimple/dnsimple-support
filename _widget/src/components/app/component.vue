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

const RECENTLY_VISITED_LIMIT = 10;

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
      history: [],
      articles: [],
      showRecentlyVisited: true,
    };
  },

  watch: {
    q (val) {
      this.showRecentlyVisited = false;

      if (val.length > 1) {
        if (this.currentRoute[0] !== 'Articles')
          this.go('Articles', undefined, true);
      } else if (!val.length)
        if (this.recentlyVisitedArticles.length > 0) {
          this.showRecentlyVisited = true;
          this.go('Articles', undefined, true);
        } else
          this.go('Article', this.gettingStarted, true);
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

    recentlyVisitedArticles () {
      return JSON.parse(localStorage.getItem('recentlyVisited')) || [];
    },

    showRecentlyVisitedArticles () {
      return this.showRecentlyVisited && this.recentlyVisitedArticles?.length > 0;
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
      if (params && page === 'Article') this.storeRecentlyVisited(params);
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
        .then(() => {
          if (this.filteredArticles.length === 1)
            this.go('Article', this.filteredArticles[0], true);
          else if (this.filteredArticles.length === 0) {
            this.go('Article', this.gettingStarted, true);
            this.focus();
          }
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

    storeRecentlyVisited(article) {
      if (!(typeof article === "object" && article !== null && "id" in article && "sourceUrl" in article)) return;
      if (/getting.*started/i.test(article.id)) return;

      const recentlyVisited = JSON.parse(localStorage.getItem('recentlyVisited')) || [];
      const recentlyVisitedIdentifiers = recentlyVisited.map(a => `${a.id}-${a.sourceUrl}`);
      const articleIdentifier = `${article.id}-${article.sourceUrl}`;
      if (!recentlyVisitedIdentifiers.includes(articleIdentifier))
        recentlyVisited.unshift(article);
      else {
        recentlyVisited.splice(recentlyVisitedIdentifiers.indexOf(articleIdentifier), 1);
        recentlyVisited.unshift(article);
      }

      if (recentlyVisited.length > RECENTLY_VISITED_LIMIT)
        recentlyVisited.pop();

      localStorage.setItem('recentlyVisited', JSON.stringify(recentlyVisited));
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

