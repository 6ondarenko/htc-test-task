import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '../pages/Films.vue'
import TVPrograms from '../pages/TVPrograms.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Films',
    component: Films
  },
  {
    path: '/tv',
    name: 'TVPrograms',
    component: TVPrograms
  }
]

const router = new VueRouter({
  routes
})

export default router
