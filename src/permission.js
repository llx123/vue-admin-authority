import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

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
            // begin            
            const { routes, addRoutes } = store.getters
            const newRoutes = routes.concat(addRoutes)
            let arrList = ['/dashboard','/redirect','/404','/'] // 允许访问的所有路径
            newRoutes.map(item=>arrList.push(item.path))
            let path = to.path
            let hasPath = arrList.some(item=>item === path) // 权限验证
            if(!hasPath){
              next({ path: '/404' })
              NProgress.done()
              return false  // 解决更改path空白页问题
            }
            // end
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
        const { routes, addRoutes } = store.getters
        const newRoutes = routes.concat(addRoutes)
        let arrList = ['/dashboard','/redirect','/404','/'] // 允许访问的所有路径
        newRoutes.map(item=>arrList.push(item.path))
        let path = to.path
        let hasPath = arrList.some(item=>item === path) // 权限验证

        if(!hasPath){
          next({ path: '/404' })
          NProgress.done()
          return false  // 解决更改path空白页问题
        } else {
          next()
        }
      }
    }
  } else {
    next(`/login?redirect=${to.path}`)
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
