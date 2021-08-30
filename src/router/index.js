import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MijnStamboom from '../views/MijnStamboom.vue'
import DeMatrix from '../views/DeMatrix.vue'
import Speedrunning from '../views/Speedrunning.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mijnstamboom',
    name: 'MijnStamboom',
    component: MijnStamboom
  },
  {
    path: '/dematrix',
    name: 'DeMatrix',
    component: DeMatrix
  },
  {
    path: '/speedrunning',
    name: 'Speedrunning',
    component: Speedrunning
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
