import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/pages/layout/index'

export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/pages/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/pages/login/index'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      },
      {
        path: '/404',
        component: () => import('@/pages/errors/404'),
        hidden: true
      },
    ]
  },
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const routeElimination = [ // 路由除权
  {
    path: '/user',
    component: Layout,
    meta: { title: 'user', icon: 'dashboard', roles: ['admin'] },
    children: [
      {
        path: '',
        component: () => import('@/pages/user/index'),
        name: 'user',
        meta: { title: 'user', icon: 'dashboard', roles: ['admin'] }
      }
    ]
  }
]
