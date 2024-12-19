<template>
    <div class="header">
        <a href="javascript:;" @click="app.close" class="minimize">
            <div v-html="minimizeIcon"></div>
        </a>
        <h1>DNSimple Support</h1>
        <input
                type="text"
                ref="input"
                v-model="q"
                placeholder='Try some keywords, like "alias" or "url redirect"'
                data-cy='support-widget-input-search'
        />
    </div>
</template>

<script>
import { minimizeIcon } from '../../assets/svgs';

import "./style.scss"

export default {
  props: ['app'],
  data () {
    return {
      q: this.app.q || '',
      minimizeIcon
    };
  },
  watch: {
    q (val) {
      this.app.setQ(val);
    }
  }
};
</script>
