import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import {Smartphone} from './classes/classes';
import {SmartphoneBasket} from './classes/classes';

import Catalog from './modules/Catalog';

export const store = new Vuex.Store({
	modules: {
		Catalog
	},
	state: {
		
	},
	getters: {

	},
	mutations: {

	},
	actions: {

	},
	strict: process.env.NODE_ENV !== 'production'
});