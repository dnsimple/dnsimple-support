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

const RECENTLY_VISITED_KEY = "recentlyVisitedUrls";
const RECENTLY_VISITED_LIMIT = 6;

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
    externalLinkProbe: {
      type: Function,
      default: () => {}
    },
    search: {
      type: Object,
      default(props) { return new Search(undefined, props.currentSiteUrl); }
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
      this.initialQ = '';
      this.chooseRoute();

      if (typeof this.$refs.body?.selectNoArticle === 'function') {
        this.$refs.body.selectNoArticle();
        this.scrollToSelectedItem();
      }
    }
  },

  computed: {
    filteredArticles () {
      return this.query(this.q || this.initialQ);
    },

    gettingStarted() {
      return this.findArticle(this.getGettingStartedUrl());
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
    },

    recentlyVisitedUrls () {
      return JSON.parse(localStorage.getItem(RECENTLY_VISITED_KEY)) || [];
    },

    recentlyVisitedArticles () {
      return this.recentlyVisitedUrls.map(url => this.findArticle(url)).filter(a => a).slice(0, RECENTLY_VISITED_LIMIT);
    },

    showRecentlyVisitedArticles () {
      return this.q.length === 0 && this.filteredArticles.length === 0 && this.recentlyVisitedArticles?.length > 0;
    }
  },

  mounted () {
    document.addEventListener("keydown", this.handleKeydown);
  },

  beforeUnmount () {
    document.removeEventListener("keydown", this.handleKeydown);
  },

  methods: {
    visitArticle (url, event = null) {
      const hasHash = url.indexOf('#') === 0;
      const article = this.findArticle(url);

      if (hasHash) {
        event.preventDefault();
        document.getElementById(url.split('#')[1]).scrollIntoView();
        return;
      }

      if (article) {
        const articleUrl = this.getArticleUrl(article);

        this.storeRecentlyVisited(articleUrl);

        if (!this.isSameSite(articleUrl)) {
          if (event) {
            event.preventDefault();
            event.stopImmediatePropagation();
          }

          this.history.push(this.currentRoute);
          this._goToRoute('Article', article);

          return;
        }
      }

      this.externalLinkProbe(url);
    },

    _goToRoute (page, params) {
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
          this.sources.map((s) => this.fetchArticles(s.url))
        )
        .catch(() => {})
        .finally(this.chooseRoute);
    },

    chooseRoute() {
      if (this.couldNotLoad)
        this._goToRoute('Article', this.errorArticle);
      else if (this.q.length === 0 && this.recentlyVisitedArticles?.length > 0)
        this._goToRoute('Articles', undefined);
      else if (this.filteredArticles.length === 0 && this.q.length === 0)
        this._goToRoute('Article', this.gettingStarted);
      else if (this.filteredArticles.length === 0 && this.q.length > 0)
        this._goToRoute('Articles', undefined);
      else if (this.filteredArticles.length === 1)
        this._goToRoute('Article', this.filteredArticles[0]);
      else if (this.currentRoute[0] !== 'Articles')
        this._goToRoute('Articles', undefined);
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

      return new Promise((resolve, reject) => {
        this.fetch(`${sourceUrl}/search.json`)
          .then((articles) => {
            this.addArticles(articles, sourceUrl);
            this.isFetched[sourceUrl] = true;
            resolve();
          }).catch(reject);
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

    getGettingStartedUrl() {
      return this.gettingStartedUrl;
    },

    hasHistory() {
      return this.history.length > 0;
    },

    getArticleUrl(article) {
      return `${article.sourceUrl}${article.id}`;
    },

    isSameSite(url) {
      return url.indexOf(this.getCurrentSiteUrl()) === 0;
    },

    storeRecentlyVisited(articleUrl) {
      if (/getting.*started/i.test(articleUrl)) return;

      const recentlyVisitedUrls = JSON.parse(localStorage.getItem(RECENTLY_VISITED_KEY)) || [];
      if (!recentlyVisitedUrls.includes(articleUrl))
        recentlyVisitedUrls.unshift(articleUrl);
      else {
        recentlyVisitedUrls.splice(recentlyVisitedUrls.indexOf(articleUrl), 1);
        recentlyVisitedUrls.unshift(articleUrl);
      }

      if (recentlyVisitedUrls.length > RECENTLY_VISITED_LIMIT)
        recentlyVisitedUrls.pop();

      localStorage.setItem(RECENTLY_VISITED_KEY, JSON.stringify(recentlyVisitedUrls));
    },

    scrollToSelectedItem() {
      nextTick(() => {
        const selectedDiv = document.querySelector('.selected-article');
        selectedDiv && selectedDiv.scrollIntoView({ behavior: 'instant', block: 'nearest' });
      });
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

          this.scrollToSelectedItem();
        });
      } else if (event.key === "ArrowUp" && this.currentRoute[0] === 'Articles') {
        event.preventDefault();

        nextTick(() => {
          const $body = this.$refs.body;
          if (!$body) return;

          $body.selectPrevArticle();

          this.scrollToSelectedItem();
        });
      } else if (event.key === "Enter" && this.currentRoute[0] === 'Articles') {
        event.preventDefault();

        nextTick(() => {
          const $body = this.$refs.body;
          if (!$body) return;

          $body.openSelectedArticle();
        });
      } else if (event.key === "ArrowLeft" && this.currentRoute[0] === 'Article') {
        event.preventDefault();

        nextTick(() => this.back());
      }
    }
  }
};
</script>

