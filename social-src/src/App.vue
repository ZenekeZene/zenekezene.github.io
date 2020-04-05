<template>
  <div id="app" class="app" v-touch:swipe.top="swipeUpHandler" v-touch:swipe.bottom="swipeDownHandler">
    <TheHeader />
    <HelloWorld
      author="Héctor Villar"
      role="Software Engineer"
    />
    <TheMenu ref="menuSwiper" :options="menuSwiperOptions" :current-step="currentStep" @go:to="handGo($event)"/>
    <main class="content">
      <div class="content__main">
        <swiper ref="contentSwiper" :options="contentSwiperOptions">
          <swiper-slide><About /></swiper-slide>
          <swiper-slide><Social /></swiper-slide>
          <swiper-slide><Portfolio /></swiper-slide>
        </swiper>
      </div>
    </main>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
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
    menuSwiper() {
      return this.$refs.contentSwiper.$swiper
    },
    contentSwiper() {
      return this.$refs.contentSwiper.$swiper
    },
  },
  data() {
    return {
      menuSwiperOptions: {
        slidesPerView: 3,
      },
      contentSwiperOptions: {
        slidesPerView: 1,
      },
      currentStep: 0
    }
  },
  methods: {
    ...mapMutations(['toggleIsMini']),
    handGo({ slideIndex }) {
      this.currentStep = slideIndex;
      this.$refs.contentSwiper.$swiper.slideTo(slideIndex);
    },
    swipeUpHandler() {
      console.log('swipeUpHandler');
      this.toggleIsMini();
    },
    swipeDownHandler() {
      console.log('swipeDownHandler');
      this.toggleIsMini();
    }
  },
  mounted() {
    this.menuSwiper.controller.control = this.floorSwiper;
    this.$refs.contentSwiper.$swiper.on('slideChange', () => {
      this.currentStep = this.$refs.contentSwiper.$swiper.activeIndex;
    });
    this.contentSwiper.controller.control = this.indexSwiper;

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
