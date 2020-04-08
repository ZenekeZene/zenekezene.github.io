<template>
  <div id="app" class="app">
    <div class="card"><div class="shine"></div></div>
    <div ref="workWrapper">
      <span
        v-if="isExpanded && currentStep === 1 && isMini"
        class="close icon-port-cross"
        @click="handCloseExpanded"
      ></span>
      <div ref="work" class="work" :style="lightBoxStyle">
        <div v-if="lightBoxItem" v-html="lightBoxItem.content"></div>
      </div>
    </div>
    <div
      ref="structure"
      v-touch:swipe.top="swipeUpHandler"
      v-touch:swipe.bottom="swipeDownHandler"
      :class="{ '--mini': isMini }"
    >
      <TheHeader />
      <HelloWorld
        author="Héctor Villar"
        role="Software Engineer"
      />
      <TheMenu ref="menuSwiper"
        :options="menuSwiperOptions"
        :current-step="currentStep"
        @go:to="handGo($event)"
      />
    </div>
    <main class="content">
      <div class="content__main">
        <swiper ref="contentSwiper" :options="contentSwiperOptions">
          <swiper-slide><About /></swiper-slide>
          <swiper-slide><Portfolio @launch:ligth-box="launchLightBox($event)" /></swiper-slide>
          <swiper-slide><Social /></swiper-slide>
        </swiper>
      </div>
    </main>
    <button v-if="currentStep === 0" class="fab"><span class="icon-port-download"></span></button>
    <button v-if="currentStep === 2" class="fab"><span class="icon-port-share"></span></button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { debounce } from 'lodash'
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'
import TheMenu from './components/TheMenu.vue'
import About from './views/About.vue'
import Social from './views/Social.vue'
import Portfolio from './views/Portfolio.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader,
    TheMenu,
    About,
    Social,
    Portfolio
  },
  computed: {
    ...mapState(['isMini', 'isExpanded']),
    menuSwiper() {
      return this.$refs.contentSwiper.$swiper
    },
    contentSwiper() {
      return this.$refs.contentSwiper.$swiper
    },
    work() {
      return this.$refs.work;
    }
  },
  data() {
    return {
      menuSwiperOptions: {
        slidesPerView: 3,
      },
      contentSwiperOptions: {
        slidesPerView: 1,
        autoHeight: true,
      },
      currentStep: 2,
      lightBoxStyle: {},
      lightBoxItem: null
    }
  },
  methods: {
    ...mapMutations(['toggleIsMini', 'setIsExpanded']),
    handGo({ slideIndex }) {
      this.currentStep = slideIndex;
      this.$refs.contentSwiper.$swiper.slideTo(slideIndex);
    },
    handCloseExpanded() {
      this.lightBoxItem = null;
      this.lightBoxStyle = null;
      this.setIsExpanded({ isExpanded: false });
      this.work.classList.remove('--expanded');
    },
    swipeUpHandler() {
      // this.toggleIsMini();
    },
    swipeDownHandler() {
      // this.toggleIsMini();
    },
    launchLightBox($event) {
      const item = $event.item;
      this.lightBoxItem = $event.data;
      const { structure, workWrapper } = this.$refs;

			const offsetTopStructure = structure.offsetTop;
			const offsetHeightStructure = structure.offsetHeight;
			const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = item;

      this.lightBoxStyle = {
        top: `calc(${offsetHeightStructure +  offsetTop}px + 0.5rem)`,
        left: `calc(${offsetLeft}px + 1.2rem)`,
        width: `${offsetWidth}px`,
        height: `${offsetHeight}px`,
      }

			setTimeout(() => {
				this.work.classList.add('--expanded');
			}, 100);
    }
  },
  mounted() {
    this.$refs.contentSwiper.$swiper.slideTo(this.currentStep);
    this.$refs.contentSwiper.$swiper.on('slideChange', () => {
      this.currentStep = this.$refs.contentSwiper.$swiper.activeIndex;
      this.setIsExpanded({ isExpanded: false })
    });

    // Hack mobile viewport with vh units:
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener(
      "resize",
      debounce(() => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      }, 100)
    );
  }
}
</script>
