<template>
  <ol class="menu">
    <li v-for="(section, index) in sections" :key="`section-${section.name}`"
      :class="{ 'active': currentStep === index }"
      @click="handGo(index)"
    >
      {{ section.text }}
    </li>
  </ol>
</template>
<script>
export default {
  name: 'TheMenu',
  props: {
    currentStep: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      sections: [
        {
          name: 'about',
          text: 'CV'
        },
        {
          name: 'portfolio',
          text: 'Portafolio'
        },
        {
          name: 'networks',
          text: 'Contacto'
        },
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  background-color: black;
  color: white;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-basis: 33.33%;
    height: 100%;
    padding: 1rem;
    color: rgba(255, 255, 255, 0.64);
    height: 3rem;
    overflow: hidden;
    flex-grow: 1;
    font-size: 1rem;
    transition: all 250ms ease-in;
    cursor: pointer;
  }

  .active {
    color: white;
    font-size: 1rem;
    font-weight: 700;

    &:after {
      $size: 3px;
      content: '';
      display: inline-block;
      width: $size;
      height: $size;
      margin-top: 4px;
      background-color: white;
      border-radius: 50%;
    }
  }
}
</style>