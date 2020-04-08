<template>
  <div class="hello">
    <div class="info">
      <h1 class="author">{{ author }}</h1>
      <p class="role">{{ role }}</p>
    </div>
    <img class="background" src="/social/avatar2.jpg">
    <swiper ref="aboutSwiper" class="slider" :options="optionsSwiper">
      <swiper-slide class="description">
        <p>Creo <span class="font-bold">aplicaciones web</span> e <span class="font-bold">híbridas</span> con <span class="font-bold">estándares web</span>, en entornos ágiles,
          con tests y clean code. Además, hago <span class="font-bold">videojuegos</span>, desde el arte
          hasta animación e implementación de mecánicas.
          <br/><br/>
          Trabajo haciendo lo que me apasiona y me siento realmente afortunado.
          <br/><br/>
          <span class="claim font-bold">Trabajo, compromiso y pasión.</span>
          <br/><br/>
          <span class="badge">JS <span class="icon-port-js"></span></span>
          <span class="badge">Vue <span class="icon-port-vue"></span></span>
          <span class="badge">React <span class="icon-port-react"></span></span>
          <span class="badge">Ionic <span class="icon-port-ionic"></span></span>
          <span class="badge">Nuxt <span class="icon-port-nuxt"></span></span>
          <span class="badge">Firebase <span class="icon-port-firebase"></span></span>
          <span class="badge">SASS <span class="icon-port-sass"></span></span>
          <span class="badge">CSS <span class="icon-port-css"></span></span>
          <span class="badge">HTML<span class="icon-port-html5"></span></span>
          <span class="badge">Git <span class="icon-port-git"></span></span>
          <span class="badge">Unity <span class="icon-port-unity"></span></span>
        </p>
      </swiper-slide>
      <swiper-slide></swiper-slide>
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
  top: 3rem;
  left: 0;
  width: 100%;
  filter: grayscale(100%);
  transition: all 250ms ease-in;
}

.description {
  background-color: black;
}

.slider {

  img {
    max-width: 100%;
  }

  p {
    min-height: 16rem;
    color: white;
    text-align: left;
    padding: 0.5rem 1rem 0.5rem 1.5rem;
    font-size: 0.8rem;
  }
}

.hello {
  position: relative;
  height: 19rem;
  overflow: hidden;
  margin: 0 0.7rem;
  border-radius: 1rem 1rem 0 0;
  transition: all 50ms ease-in;

  &:hover {
    img {
      filter: grayscale(0);
    }
  }
}

.author,
.role {
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: 1.5rem;
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
  padding: 0 1rem 0.5rem 0.5rem;
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
  top: 0;
  right: 0;
  z-index: 2;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

.button-prev,
.button-next {
  position: absolute;
  z-index: 1;
  top: 50%;
  padding: 0 0.1rem;
  color: white;
  font-size: 1.5rem;
}

.button-prev {
  color: black;
}

.button-next {
  right: 0;
  transform: rotate(180deg);
}

.badge {
  display: inline-block;
  margin-bottom: 0.2rem;
  padding-right: 0.8rem;
  color: #9e9e9e;
}

@media screen and (max-height: 512px) {
  .claim {
    display: none;
  }
}
</style>
