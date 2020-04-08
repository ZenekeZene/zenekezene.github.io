<template>
	<ul ref="portfolio" class="portfolio" :class="{ '--mini': isMini }">
		<li
			v-for="(work, index) in works"
			:key="work.key"
			:ref="`work-${index}`"
			@click="showWork(index)"
		>
			<img :src="work.previewImage">
		</li>
	</ul>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import portfolio from '../../public/portfolio/portfolio.js';

export default {
	name: 'Portfolio',
	computed: {
		...mapState(['isMini', 'isExpanded']),
		works() {
			return portfolio.mountedWorks().filter(work => work.previewImage);
		},
	},
	methods: {
		...mapMutations(['setIsMini', 'setIsExpanded']),
		showWork(index) {
			this.setIsMini({ isMini: true });
			this.setIsExpanded({ isExpanded: true });
			this.generateWork(index);
		},
		generateWork(index) {
			const item = this.$refs[`work-${index}`][0];
			this.$emit('launch:ligth-box', { item, data: this.works[index] });
		}
	}
}
</script>
<style lang="scss">
	.portfolio {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-rows: 7.7rem;
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
		height: 100%;
		margin: 0;
		list-style: none;

		li {
			cursor: pointer;
			overflow: hidden;

			&:nth-last-child(2) {
				border-bottom-left-radius: 1.6rem;
			}

			&:nth-last-child(1) {
				border-bottom-right-radius: 1.6rem;
			}

			img {
				width: 100%;
			}

			@media (max-width: 414px) {
				&:nth-last-child(2) {
					border-bottom-left-radius: 0;
				}

				&:nth-last-child(1) {
					border-bottom-right-radius: 0;
				}
			}
		}

		&.--mini {

			li {
				border-radius: 0;
			}
		}
	}
</style>
