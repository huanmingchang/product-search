import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/search',
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create.vue'),
  },
  {
    path: '*',
    name: 'Not-found',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
