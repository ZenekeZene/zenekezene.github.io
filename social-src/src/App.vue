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
    <div class="fab-wrapper" v-if="currentSlide === 2">
      <button class="fab"><span class="icon-port-share"></span></button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { trickViewport } from './viewport';
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
  }
}
</script>
