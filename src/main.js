import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { store } from './store/store.js';

Vue.config.productionTip = false;

new Vue({
	beforeCreate() {
		this.$store.commit('initialiseStore');
	},
	router,
	vuetify,
	store: store,
	render: (h) => h(App),
}).$mount('#app');
