<template>
    <div class="prompt">
        <a href="javascript:;" @click="app.open" aria-label="Open widget">
            <div v-html="trustyIcon" class="mascot"></div>
            <span class="text">Need Help?</span>
        </a>
    </div>
</template>

<script>
import { trustyIcon } from '../../assets/svgs';

import "./style.scss";

export default {
  props: ['app'],
  data () {
    return {
      trustyIcon
    };
  }
};
</script>
