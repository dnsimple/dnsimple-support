<template>
  <div class="route with-footer">
    <a @click="app.back()" href="javascript:;" class="back">
      <div v-html="backIcon"></div>
    </a>

    <div class="article">
      <div v-html="article.body"></div>
    </div>

    <Footer :app="app" />
  </div>
</template>

<script>
import { backIcon } from '../../assets/svgs';
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
      backIcon
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

        if (href[0] === '/')
          this.prepRelativeLink(a);
        else if (href[0] !== '#' && href.indexOf('javascript') !== 0)
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

    prepRelativeLink (a) {
      const href = a
        .getAttribute('href')
        .replace(/#.*/, '')
        .replace(NO_TRAILING_SLASH, '/');
      const article = window.DNSimpleSupport.articles.find((a) => {
        return a.id === href;
      });

      a.href = `${this.app.rootURL}${href}`;
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
