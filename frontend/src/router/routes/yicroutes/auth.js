export default [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/Sas/login.vue'),
		meta: {
			layout: "full",
			authReq: false
		  },
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/Sas/home.vue'),
		meta: {
			layout: "full",
			authReq: false
		  },
	},
	
]