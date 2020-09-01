import Vue from 'vue'
import VueRouter from 'vue-router'
import Articles from '../views/Articles.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
	{
        path: '/work',
        name: 'Work',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "work" */ '../views/Work.vue')
    },
	{
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "work" */ '../views/Dashboard.vue'),
        children: [
            {
                path: 'articles', name: 'Articles', component: Articles
            },
            {
                path: 'articles/:id', name: 'Article', component: Article, props: true
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.afterEach(function (transition) {
    if (document.getElementById('nav')) nav.focus();
});

export default router
