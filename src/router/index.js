import Vue from 'vue'
import VueRouter from 'vue-router'
import Articles from '../views/Articles.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
	{
        path: '/work',
        name: 'Work',
        component: () => import(/* webpackChunkName: "work" */ '../views/Work.vue')
    },
	{
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
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

export default router
