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
      return this.prepare();
    }
  },
  mounted () {
    return this.prepare();
  },
  methods: {
    fixLinks () {
      [...this.$el.querySelectorAll('a')].forEach((a) => {
        let url = a.getAttribute('href');

        if (url[0] === '/' || url[0] === '#') {
          url = `${this.article.sourceUrl}${url}`;
          a.setAttribute('href', url);
        }

        a.addEventListener('click', (event) => this.app.visit(url, event));
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
