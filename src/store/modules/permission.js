import { routeElimination, constantRouterMap } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes routeElimination
 * @param roles
 */
function filterAsyncRouter(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const permission = {
  state: {
    routes: constantRouterMap,
    addRoutes: [],
  },
  mutations: {
    SET_ROUTERS: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRouterMap.concat(routes)
    }
  },
  actions: {
    AddRoutesByRole({ commit }, data) { // 根据role权限增加路由
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        if (roles.includes('admin')) {
          accessedRouters = routeElimination
        } else {
          accessedRouters = filterAsyncRouter(routeElimination, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
