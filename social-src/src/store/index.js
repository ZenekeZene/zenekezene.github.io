import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		isMini: true,
		isExpanded: false,
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
		}
	}
});

export default store;