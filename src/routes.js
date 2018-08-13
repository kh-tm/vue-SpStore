import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Guarantee from './views/guarantee/guarantee.vue';
import PaymentAndDelivery from './views/paymentAndDelivery/paymentAndDelivery.vue';
import Contacts from './views/contacts/contacts.vue';

const routes = [
	{
		path: '/guarantee',
		component: Guarantee
	},
	{
		path: '/paymentAndDelivery',
		component: PaymentAndDelivery
	},
	{
		path: '/contacts',
		component: Contacts
	},
];

export const router = new VueRouter({
	routes,
	mode: 'history'
});