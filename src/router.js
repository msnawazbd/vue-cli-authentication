import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: "/home",
            name: 'home',
            component: () => import("./components/Home")
        },
        {
            path: '/login',
            name: 'login',
            component: () => import("./components/Login")
        },
        {
            path: '/register',
            name: 'register',
            component: () => import("./components/Register")
        },
        {
            path: '/category',
            name: 'category',
            component: () => import("./components/Category")
        },
        {
            path: '/post',
            name: 'post',
            component: () => import("./components/Post")
        }
    ]
})