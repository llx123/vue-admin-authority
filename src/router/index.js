import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/login',
    component: () => import('@/pages/login/index')
  },
]

export default new Router({
  routes
})