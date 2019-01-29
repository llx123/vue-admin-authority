import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/pages/layout/index'

export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
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
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    meta: {single: true},
    show: true,
    children: [
      {
        path: '/dashboard',
        component: () => import('@/pages/dashboard/index'),
        show: true,
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'el-icon-menu', noCache: true }
      },
      {
        path: '/404',
        component: () => import('@/pages/errors/404'),
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
    meta: { title: 'user', single: true, icon: 'dashboard', roles: ['admin'] },
    show: true,
    children: [
      {
        path: '',
        component: () => import('@/pages/user/index'),
        name: 'user',
        show: true,
        meta: { title: 'Users', icon: 'el-icon-service', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/posts',
    component: Layout,
    meta: { title: 'Posts', single: true, roles: ['admin'] },
    show: true,
    children: [
      {
        path: '',
        component: () => import('@/pages/posts/index'),
        name: 'post',
        show: true,
        meta: { title: 'Posts', icon: 'el-icon-goods', roles: ['admin'] }
      }
    ]
  }
]
