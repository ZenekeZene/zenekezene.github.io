<template>
	<div
      ref="structure"
      :class="{ '--mini': isMini }"
    >
      <TheHeader />
      <HelloWorld
        author="Héctor Villar"
        role="Software Engineer"
      />
      <TheMenu
        :options="menuSwiperOptions"
        @go:to="handGo($event)"
      />
    </div>
</template>
<script>
import { mapState } from 'vuex'
import HelloWorld from '../components/HelloWorld.vue'
import TheHeader from '../components/TheHeader.vue'
import TheMenu from '../components/TheMenu.vue'

export default {
	name: 'Structure',
	components: {
		HelloWorld,
		TheHeader,
		TheMenu,
	},
  computed: {
    ...mapState(['isMini'])
  },
  data() {
    return {
      menuSwiperOptions: {
        slidesPerView: 3,
      },
    }
  },
  methods: {
    handGo({ slideIndex }) {
      this.$root.$emit('change:slide', { slideIndex });
    }
  }
}
</script>
	