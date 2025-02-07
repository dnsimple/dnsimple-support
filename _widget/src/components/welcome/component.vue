<template>
    <div class="route welcome">
        <div v-html="trustyIcon" class="mascot"></div>
        <h1>We're here to help.</h1>
        <p>Type a keyword into the search bar above to find relevant support articles.</p>
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
