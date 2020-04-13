import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		isMini: true,
		isExpanded: false,
		currentSlide: 1
	},
	mutations: {
		setIsExpanded(state, { isExpanded }) {
			state.isExpanded = isExpanded;
		},
		setIsMini(state, { isMini }) {
			state.isMini = isMini;
		},
		toggleIsMini(state) {
			state.isMini = !state.isMini;
		},
		setCurrentSlide(state, payload) {
			state.currentSlide = payload.currentSlide;
		}
	}
});

export default store;