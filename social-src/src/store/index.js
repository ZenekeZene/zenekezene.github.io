import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		isMini: false,
	},
	mutations: {
		toggleIsMini(state) {
			state.isMini = !state.isMini;
		}
	}
});

export default store;