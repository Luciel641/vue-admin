import { asyncRoutes, constantRoutes } from '@/router'

/**
 * 通过 meta.roles 来判断角色的访问权限
 * @param route
 * @param roles
 */
function hasPermission(route, roles) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 通过递归过滤异步路由表
 * @param routes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const newRoutes = []

  routes.forEach(route => {
    const child = { ...route }
    if (hasPermission(child, roles)) {
      if (child.children) {
        child.children = filterAsyncRoutes(child.children, roles)
      }
      newRoutes.push(child)
    }
  })

  return newRoutes
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = [...constantRoutes, ...routes]
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessRoutes
      if (roles.includes('admin')) {
        accessRoutes = asyncRoutes || []
      } else {
        accessRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessRoutes)
      resolve(accessRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
