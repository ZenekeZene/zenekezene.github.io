<template>
	<ul ref="portfolio" class="portfolio" :class="{ '--mini': isMini }">
		<li
			v-for="(work, index) in works"
			:key="`work-${index}`"
			@click="showWork(index)"
			:ref="`work-${index}`"
		>
			<img :src="work.src">
		</li>
	</ul>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
// import mdPrueba from '../portfolio/test.md';
// console.log(mdPrueba);

export default {
	name: 'Portfolio',
	computed: {
		...mapState(['isMini', 'isExpanded']),
	},
	data() {
		return {
			works: [
				{
					key: "",
					src: "https://instagram.fbio2-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/82414017_1586345854839301_252668707078321734_n.jpg?_nc_ht=instagram.fbio2-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=-XzwkpYvYFAAX_GaQbh&oh=e167982ec997042d2f29db062d875031&oe=5EB19CBC"
				},
				{
					key: "",
					src: "https://instagram.fbio2-2.fna.fbcdn.net/v/t51.2885-15/e35/50246537_119251855830841_5415370244134001188_n.jpg?_nc_ht=instagram.fbio2-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=KIxsOU4pFngAX8QZLtY&oh=c5c495f96d0b9ee42129e294b285df3d&oe=5EAF6649"
				},
				{
					key: "",
					src: "https://instagram.fbio2-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/68865920_674675336379478_3321306553085518456_n.jpg?_nc_ht=instagram.fbio2-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=0-sAUPF4rhwAX_hbRjo&oh=a8eb4e2ed9070253aa9e875e61172408&oe=5EAFE123"
				},
				{
					key: "",
					src: "https://instagram.fbio2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.133.1063.1063a/s640x640/79038099_153520295914233_8335738709108248233_n.jpg?_nc_ht=instagram.fbio2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Apwc40p28AwAX-5U06B&oh=6ae91e6382404fa2d3e1016b7493a38d&oe=5EB1739F",
					title: 'Título 4'
				},
			]
		};
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
		grid-template-rows: 7.75rem 7.75rem;
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
