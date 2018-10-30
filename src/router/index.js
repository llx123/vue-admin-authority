import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/pages/layout/index'

export const routes = [
  {
    path: '/login',
    component: () => import('@/pages/login/index')
  }, {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard' }
      }
    ]
  }
]

export default new Router({
  routes
})