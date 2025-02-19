<template>
  <div class="route with-footer">
    <a v-if="app.hasHistory()" @click="app.back()" href="javascript:;" class="back">
      <div v-html="backIcon"></div>
    </a>

    <a :href="`${article.sourceUrl}${article.id}`" v-html="externalLink" target="_blank" class="external-link"></a>

    <div class="article">
      <div v-html="article.body"></div>
    </div>

    <Footer :app="app" />
  </div>
</template>

<script>
import { backIcon, externalLink } from '../../assets/svgs';
import Footer from '../footer/component.vue';

import "./style.scss";
import "./resolving.scss";
import "./syntax.scss";
import "./tables.scss";

const NO_TRAILING_SLASH = /\/?$/;

export default {
  props: {
    app: Object,
    article: Object
  },
  components: {
    Footer
  },
  data () {
    return {
      backIcon,
      externalLink
    };
  },
  watch: {
    'article' () {
      this.prepare();
    }
  },
  mounted () {
    this.prepare();
  },
  methods: {
    fixLinks () {
      [...this.$el.querySelectorAll('a')].forEach((a) => {
        const href = a.getAttribute('href');
        const isSameSite = this.article.sourceUrl.indexOf(this.app.getCurrentSiteUrl()) === 0;

        if (href[0] === '/' && !isSameSite)
          this.prepRelativeLink(a);
        else if (href[0] === '#')
          this.prepHashLink(a);
        else if (href.indexOf('javascript') !== 0 && (!isSameSite || href.startsWith('http')))
          this.prepAbsoluteLink(a);
      });
    },

    fixTables () {
      [...this.$el.querySelectorAll('table')].forEach((table) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      });
    },

    prepAbsoluteLink (a) {
      a.target = '_blank';
    },

    prepHashLink (a) {
      a.onclick = (event) => {
        event.preventDefault();
        document.getElementById(a.href.split('#')[1]).scrollIntoView();
      };
    },

    prepRelativeLink (a) {
      const href = a
        .getAttribute('href')
        .replace(/#.*/, '')
        .replace(NO_TRAILING_SLASH, '/');
      const url = `${this.article.sourceUrl}${href}`;
      const article = this.app.findArticle(url);

      a.href = url;
      a.onclick = (event) => {
        event.stopImmediatePropagation();
        event.preventDefault();

        if (article)
          this.app.go('Article', article);
      };
    },

    prepare () {
      this.$nextTick(() => {
        this.$el.scrollTop = 0;
        this.fixLinks();
        this.fixTables();
      });
    }
  }
};
</script>
