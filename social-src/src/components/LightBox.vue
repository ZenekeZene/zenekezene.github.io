<template>
	<section>
      <span
        v-if="isExpanded && currentSlide === 1 && isMini"
        class="close icon-port-cross"
        @click="handCloseExpanded"
      ></span>
      <div ref="work" class="work" :style="lightBoxStyle">
        <div v-if="lightBoxItem" v-html="lightBoxItem.content"></div>
      </div>
    </section>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'LightBox',
	computed: {
		...mapState(['isExpanded', 'currentSlide', 'isMini']),
		work() {
			return this.$refs.work;
		},
		structure() {
			return this.$parent.$refs.structure;
		}
	},
	data() {
		return {
			lightBoxItem: null,
			lightBoxStyle: {}
		};
	},
	mounted() {
		this.$root.$on('launch:ligth-box', ($event) => this.launchLightBox($event));
	},
	methods: {
		...mapMutations(['setIsExpanded']),
		launchLightBox($event) {
			const item = $event.item;
			this.lightBoxItem = $event.data;
			const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = item;
			this.lightBoxStyle = {
				top: `calc(${this.structure.offsetHeight +  offsetTop}px + 0.5rem)`,
				left: `calc(${offsetLeft}px + 1.2rem)`,
				width: `${offsetWidth}px`,
				height: `${offsetHeight}px`,
			}

			setTimeout(() => {
				this.work.classList.add('--expanded');
			}, 100);
		},
		handCloseExpanded() {
			this.lightBoxItem = null;
			this.lightBoxStyle = null;
			this.setIsExpanded({ isExpanded: false });
			this.work.classList.remove('--expanded');
		}
	}
}
</script>