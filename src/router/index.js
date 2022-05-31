import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Authors from '../views/Authors.vue';
import Books from '../views/Books.vue';
import Genres from '../views/Genres.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/authors',
		name: 'authors',
		component: Authors,
	},
	{
		path: '/books',
		name: 'books',
		component: Books,
	},
	{
		path: '/genres',
		name: 'Genres',
		component: Genres,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
