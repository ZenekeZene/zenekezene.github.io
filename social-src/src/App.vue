<template>
  <div id="app" class="app">
    <Glass />
    <LightBox />
    <Structure ref="structure" />
    <Content />
    <div class="fab-wrapper" v-if="currentSlide === 0">
      <p v-if="claimIsVisible">Descargate el CV</p>
      <button class="fab"><span class="icon-port-download"></span></button>
    </div>
    <button v-if="currentSlide === 2" class="fab"><span class="icon-port-share" style="margin-left: -3px;"></span></button>
    <div class="app__base"></div>
    <div class="app__base2"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { trickViewport } from './scripts/viewport';
import LightBox from './components/LightBox';
import Glass from './components/Glass';
import Structure from './layouts/Structure';
import Content from './layouts/Content';

export default {
  name: 'App',
  components: {
    Glass,
    LightBox,
    Structure,
    Content
  },
  computed: {
    ...mapState(['currentSlide']),
  },
  data() {
    return {
      claimIsVisible: false
    }
  },
  mounted() {
    trickViewport();
    if (window.innerWidth > 900) {
      this.setIsMini({ isMini: false });
    }
  },
  methods: {
    ...mapMutations(['setIsMini']),
  }
}
</script>
