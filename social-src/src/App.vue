<template>
  <div id="app" class="app">
    <div class="card"><div class="shine"></div></div>
    <LightBox />
    <div
      ref="structure"
      :class="{ '--mini': isMini }"
    >
      <TheHeader />
      <HelloWorld
        author="Héctor Villar"
        role="Software Engineer"
      />
      <TheMenu ref="menuSwiper"
        :options="menuSwiperOptions"
        @go:to="handGo($event)"
      />
    </div>
    <main class="content">
      <div class="content__main" v-scroll="onScroll">
        <vue-custom-scrollbar
          ref="scrollbar"
          class="scroll-area"
          :settings="settingsScroll"
          @ps-y-reach-end="reachEnd"
          @ps-scroll-y="onScroll"
        >
          <swiper ref="contentSwiper" :options="contentSwiperOptions">
            <swiper-slide><Experience /></swiper-slide>
            <swiper-slide><Portfolio /></swiper-slide>
            <swiper-slide><Social /></swiper-slide>
          </swiper>
        </vue-custom-scrollbar>
      </div>
    </main>
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
import { debounce } from 'lodash'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'
import TheMenu from './components/TheMenu.vue'
import LightBox from './components/LightBox.vue'
import Experience from './views/Experience.vue'
import Social from './views/Social.vue'
import Portfolio from './views/Portfolio.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader,
    TheMenu,
    LightBox,
    Experience,
    Social,
    Portfolio,
    vueCustomScrollbar
  },
  computed: {
    ...mapState(['isMini', 'isExpanded', 'currentSlide']),
    contentSwiper() {
      return this.$refs.contentSwiper.$swiper
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
      settingsScroll: {
        maxScrollbarLength: 60,
        suppressScrollX: true,
      },
      claimIsVisible: false
    }
  },
  methods: {
    ...mapMutations(['toggleIsMini', 'setIsExpanded', 'setIsMini', 'setCurrentSlide']),
    handGo({ slideIndex }) {
      this.contentSwiper.slideTo(slideIndex);
    },
    onScroll(event) {
      if (event.target.scrollTop > 135 && this.isMini === false) {
        this.setIsMini({ isMini: true });
      }
      this.claimIsVisible = false;
    },
    reachEnd(event) {
      if (event.target.scrollTop > 0 && this.claimIsVisible === false) {
        this.claimIsVisible = true;
        return false;
      }
    }
  },
  mounted() {
    this.contentSwiper.slideTo(this.currentSlide);
    this.contentSwiper.on('slideChange', () => {
      this.$refs.scrollbar.$el.scrollTop = 0;
      this.contentSwiper.offsetTop = 0;
      this.setCurrentSlide({ currentSlide: this.contentSwiper.activeIndex });
      if (this.isExpanded) {
        this.setIsExpanded({ isExpanded: false })
      }
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
