import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		lists: [],
	},
	getters: {},
	mutations: {
		addlist(state, payload) {
			state.lists.push({ title: payload.title, cards: [] });
		},
	},
	actions: {
		addlist(context, payload) {
			context.commit('addlist', payload);
		},
	},
	modules: {},
});
