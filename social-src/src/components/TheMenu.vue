<template>
  <nav class="menu">
    <ol class="menu__inner">
      <li v-for="(section, index) in sections" :key="`section-${section.name}`"
        :class="{ 'active': currentSlide === index }"
        @click="handGo(index)"
      >
        <span class="label">{{ section.text }}</span><span :class="`icon-port-${section.icon}`"></span>
      </li>
      <li :class="{ 'active': currentSlide === 2 }" @click="handGo(2)"><span class="label">Contacto</span><span class="icon-port-mail"></span></li>
      <li class="only-desktop"><span class="label">Whatsapp</span><span class="icon-port-whatsapp"></span></li>
      <li class="only-desktop"><span class="label">Twitter</span><span class="icon-port-twitter"></span></li>
      <li class="only-desktop"><span class="label">Instagram</span><span class="icon-port-instagram"></span></li>
      <li class="only-desktop"><span class="label">Linkedin</span><span class="icon-port-linkedin"></span></li>
    </ol>
  </nav>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'TheMenu',
  computed: {
    ...mapState(['currentSlide'])
  },
  data() {
    return {
      sections: [
        {
          name: 'about',
          text: 'CV',
          icon: 'user-circle'
        },
        {
          name: 'portfolio',
          text: 'Portfolio',
          icon: 'heart'
        }
      ]
    }
  },
  methods: {
    handGo(index) {
      this.$emit('go:to', { slideIndex: index });
    }
  }
}
</script>
<style lang="scss">
.menu {
  position: relative;
  z-index: 1;
  width: 97%;
  background-color: var(--background-color-app);
  color: var(--color-text--invert);
  list-style: none;

  &__inner {
    max-width: 24rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-basis: 33.33%;
    height: 100%;
    padding: 1rem;
    color: var(--color-text--invert);
    height: 3rem;
    flex-grow: 1;
    font-size: 1rem;
    transition: all 250ms ease-in;
    cursor: pointer;
  }

  .active {
    color: var(--color-text--invert);
    font-size: 1rem;
    font-weight: var(--font-bold);
  }
}
</style>