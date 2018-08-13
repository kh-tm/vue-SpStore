import Vue from 'vue';
import App from './App.vue';

import Vuex from 'vuex';
import {store} from './store/'
Vue.use(Vuex);

import VueRouter from 'vue-router';
import {router} from './routes.js';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
