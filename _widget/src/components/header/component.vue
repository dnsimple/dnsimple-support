<template>
    <div class="header">
        <a href="javascript:;" @click="app.close" class="minimize">
            <div v-html="minimizeIcon"></div>
        </a>
        <input
                type="search"
                ref="input"
                v-model="q"
                placeholder='Try some keywords, like "alias" or "url redirect"'
        />
    </div>
</template>

<script>
import { minimizeIcon } from '../../assets/svgs';

import "./style.scss";

export default {
  props: ['app'],
  data () {
    return {
      q: this.app.q || '',
      minimizeIcon,
      debounceTimer: null
    };
  },
  watch: {
    q (val) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => this.app.setQ(val), 250);
    }
  }
};
</script>
