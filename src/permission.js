import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

const whiteList = ['/login']
const hasPermission = (roles, permissionRoles) => {
  if(roles.some(item=> item==='admin') || !permissionRoles) return true
  return roles.some(role=>permissionRoles.indexOf(role)>=0)
}
// 增加全局的导航守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    /* has token*/
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) { // 判断是否是首次加载
        store.dispatch('GetUserInfo').then(res => {
          const roles = res.data.roles // type: array
          store.dispatch('AddRoutesByRole', { roles }).then(() => { // 根据权限生成新的路由表            
            router.addRoutes(store.getters.addRoutes) // 动态添加到路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
          })
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })
      } else {
        const { roles } = store.getters
        if(hasPermission(roles,to.meta.roles)) {
          next()
        } else {
          next({ path: '/404', replace: true })
        }
      }
    }
  } else {
    // 若访问路径不在白名单且没token 执行else到登录页
    if (whiteList.some(item => item === to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // end
})
