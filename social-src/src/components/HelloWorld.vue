<template>
  <div class="hello">
    <div class="info">
      <h1 class="author">{{ author }}</h1>
      <p class="role">{{ role }}</p>
    </div>
    <img class="background" src="/social/avatar2.jpg">
    <swiper ref="aboutSwiper" class="slider" :options="optionsSwiper">
      <swiper-slide></swiper-slide>
      <swiper-slide class="description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Rerum illo alias possimus distinctio velit et autem magni sapiente,
          dolore optio praesentium ea, aliquam quibusdam nemo veniam vel saepe,
          tempore commodi?
          <span class="icon-port-vue"></span>
          <span class="icon-port-sass"></span>
          <span class="icon-port-html5"></span>
          <span class="icon-port-js"></span>
          <span class="icon-port-git"></span>
        </p>
      </swiper-slide>
    </swiper>
    <div v-if="currentStep === 1" class="button-prev" @click="previous"><span class="icon-port-arrow-left"></span></div>
    <div v-if="currentStep === 0" class="button-next" @click="next"><span class="icon-port-arrow-left"></span></div>
    <span @click="toggleIsMini" class="hand-size" :class="isMini ? 'icon-port-info' : 'icon-port-minimize'"></span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    author: String,
    role: String,
  },
  computed: {
    ...mapState(['isMini']),
  },
  data() {
    return {
      optionsSwiper: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      currentStep: 0
    }
  },
  mounted() {
    this.$refs.aboutSwiper.$swiper.on('slideChange', () => {
      this.currentStep = this.$refs.aboutSwiper.$swiper.activeIndex;
    });
  },
  methods: {
    ...mapMutations(['toggleIsMini']),
    next() {
      this.$refs.aboutSwiper.$swiper.slideNext();
    },
    previous() {
      this.$refs.aboutSwiper.$swiper.slidePrev();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.swiper-container {
  width: 100%;
  min-height: 16.7rem;
}

.background {
  position: absolute;
  top: 5rem;
  left: 0;
  width: 100%;
}

.description {
  background-color: black;
}

.slider {

  img {
    max-width: 100%;
  }

  p {
    min-height: 22rem;
    color: white;
    text-align: left;
    padding: 1rem 2rem;
  }
}

.hello {
  position: relative;
  height: 49vh;
  overflow: hidden;
  margin: 0 0.7rem;
  border-radius: 1rem 1rem 0 0;
  transition: all 50ms ease-in;

  &:hover {
    .image {
      filter: grayscale(0);
    }
  }
}

.author,
.role {
  position: relative;
  z-index: 1;
  margin: 0;
  text-align: left;
  color: white;
  text-shadow: 0 0 5px black;
}

.role {
  font-size: 0.7rem;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 100%;
  min-height: 10rem;
  filter: grayscale(100%);
  transition: all 150ms ease-in;
}

.contact {
  position: absolute;
  top: 0;
  left: 0;
  right: unset;
  height: 3rem;

  &:after {
    content: '';
    $size: 0.5rem;
    position: relative;
    top: -0.8rem;
    display: inline-block;
    width: $size;
    height: $size;
    background-color: red;
    border-radius: 50%;
  }

}

.info {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 1rem;
  background: black;

  &:before {
    // content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 5.5rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 90%, rgba(0, 0, 0, 0.7));
  }
}

.hand-size {
  position: absolute;
  top: 2rem;
  right: 0;
  z-index: 2;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

.button-prev,
.button-next {
  position: absolute;
  z-index: 1;
  top: 50%;
  margin-top: 1.5rem;
  padding: 0 0.1rem;
  color: black;
  font-size: 1.5rem;
}

.button-prev {
  color: white;
}

.button-next {
  right: 0;
  transform: rotate(180deg);
}
</style>
