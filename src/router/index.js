import { createRouter, createWebHashHistory } from 'vue-router'
import HomeV from '../views/Home.vue'
import ContactV from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeV
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactV
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
