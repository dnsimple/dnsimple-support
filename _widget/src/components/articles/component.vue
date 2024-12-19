<template>
  <div class="route with-footer">
    <div v-if="app.isLoading" class="loading">
      <div v-html="spinnerIcon"></div>
    </div>
    <div v-else class="articles">
      <ul v-if="app.filteredArticles">
        <li v-for="article in app.filteredArticles" :key="article.id">
          <h3>
            <a
              @click.prevent="app.go('Article', article)"
              v-html="highlight(article.title, highlighter)"
              :href="absoluteURL(article.id)"
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
      <Footer :app="app" />
    </div>
  </div>
</template>

<script>
import Footer from '../footer/component.vue';
import { spinnerIcon } from '../../assets/svgs';

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
    }
  },
  methods: {
    absoluteURL (path) {
      return `${this.app.rootURL}${path}`;
    },

    highlight (str, highlighter) {
      str = str || '';

      str = str.replace(highlighter, this.highlightWord);

      return str;
    },

    highlightWord (a) {
      return `<mark>${a}</mark>`;
    }
  }
};
</script>
