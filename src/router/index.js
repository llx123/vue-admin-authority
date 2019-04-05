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
    name: 'login',
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
        meta: { title: 'Dashboard', icon: 'el-icon-menu', noCache: true }
      },
      {
        path: '/404',
        name: '404',
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
  },
  {
    path: '/ui',
    component: Layout,
    meta: { title: 'UI', icon: 'el-icon-star-on', single: false, roles: ['admin'] },
    show: true,
    children: [
      {
        path: 'button',
        component: () => import('@/pages/ui/components/Buttons'),
        name: 'Button',
        show: true,
        meta: { title: '按钮', roles: ['admin'] }
      },
      {
        path: 'animate',
        component: () => import('@/pages/ui/components/Buttons'),
        name: 'Button2',
        show: true,
        meta: { title: '动画', roles: ['admin'] }
      }
    ]
  }
]
