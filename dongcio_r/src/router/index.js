import {
	createRouter,
	createWebHistory
} from "vue-router";

import HomePage from '../view/HomePage.vue';

const router = createRouter({
	// mode: 'history', //默認hash
	history: createWebHistory(),
	routes: [{
		path: '/',
		component: HomePage
	},
	{
		path: '/home',
		component: HomePage
	},
	// {
	// 	path: '/Process',
	// 	component: ProcessPage
	// },
	// {
	// 	path: '/ProtfolioEnter',
	// 	component: ProtfolioEnterPage
	// },
	// {
	// 	path: '/ProtfolioEnter/Protfolio',
	// 	component: ProtfolioPage
	// },
	// {
	// 	path: '/ProtfolioEnter/Protfolio2',
	// 	component: ProtfolioPage2
	// },
	// {
	// 	path: '/Contact',
	// 	component: ContactPage
	// },
	// {
	// 	path: '/Charges',
	// 	component: ChargesPage
	// },
	// {
	// 	path: '/Concept',
	// 	component: ConceptPage
	// },
	// {
	// 	path: '/ProtfolioList',
	// 	component: ProtfolioList
	// },
	// {
	// 	path: '/ProtfolioList2',
	// 	component: ProtfolioList2
	// },
	]
});

export default router;