import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/stars',
    name: 'stars',
    component: () =>
      import(/* webpackChunkName: "stars" */ '../views/Stars.vue'),
  },
  {
    path: '/transition',
    name: 'transition',
    component: () =>
      import(
        /* webpackChunkName: "transition" */ '../views/SmoothTransition.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
