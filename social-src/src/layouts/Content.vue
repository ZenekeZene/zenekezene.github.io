<template>
	<main class="content">
		<div class="content__main">
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
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import vueCustomScrollbar from 'vue-custom-scrollbar';
import Experience from '../views/Experience';
import Social from '../views/Social';
import Portfolio from '../views/Portfolio';

export default {
	name: 'Content',
	components: {
		vueCustomScrollbar,
		Experience,
		Social,
		Portfolio
	},
	computed: {
		...mapState(['isMini', 'isExpanded', 'currentSlide']),
		contentSwiper() {
			return this.$refs.contentSwiper.$swiper
		}
	},
	data() {
		return {
			contentSwiperOptions: {
				slidesPerView: 1,
				autoHeight: true,
			},
			settingsScroll: {
				maxScrollbarLength: 60,
				suppressScrollX: true,
			},
		}
	},
	methods: {
		...mapMutations(['setIsExpanded', 'setIsMini', 'setCurrentSlide']),
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
		this.$root.$on('change:slide', ({ slideIndex }) => this.contentSwiper.slideTo(slideIndex));
		this.contentSwiper.on('slideChange', () => {
			this.$refs.scrollbar.$el.scrollTop = 0;
			this.setCurrentSlide({ currentSlide: this.contentSwiper.activeIndex });
			this.isExpanded && this.setIsExpanded({ isExpanded: false });
		});
	}
}
</script>