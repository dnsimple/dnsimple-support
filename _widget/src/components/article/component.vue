<template>
  <div class="route with-footer">
    <a v-if="app.hasHistory()" @click="app.back()" href="javascript:;" class="back" aria-label="Back">
      <div v-html="backIcon"></div>
    </a>

    <a :href="`${app.getArticleUrl(article)}`" v-html="externalLink" target="_blank" class="external-link"></a>

    <div class="article">
      <div v-html="article.body"></div>
    </div>

    <Footer :app="app" />
  </div>
</template>

<script>
import { backIcon, externalLink, trustyIcon } from '../../assets/svgs';
import Footer from '../footer/component.vue';

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
      externalLink,
      trustyIcon
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
      [...this.$el.querySelectorAll('.article a')].forEach((a) => {
        let url = a.getAttribute('href');

        if (url[0] === '/') {
          url = `${this.article.sourceUrl}${url}`;
          a.setAttribute('href', url);
        }

        a.addEventListener('click', (event) => this.app.visitArticle(url, event));
      });
    },

    fixImages () {
      [...this.$el.querySelectorAll('.article img')].forEach((img) => {
        const src = img.getAttribute('src');

        if (src && src[0] === '/')
          img.setAttribute('src', `${this.article.sourceUrl}${src}`);
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
        this.fixImages();
        this.fixTables();
      });
    }
  }
};
</script>
