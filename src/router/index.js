import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

// Vue-Router 3.1.0及以上版本会导致下面的（next({ ...to, replace: true })）报错
// https://github.com/vuejs/vue-router/issues/2881
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

/* Layout 布局 */
import Layout from '@/layout'

/* 测试导航菜单 */
import NavTest from './modules/nav-test'

import getPageTitle from '@/utils/get-page-title'
const whiteList = ['/login'] // 白名单，不需要登录验证的页面路径

/**
 * 路由相关属性说明
 * hidden: true                   当设置为true时，不在sidebar侧边栏中显示（默认：false）
 * meta: {
    roles: ['admin', 'user']    控制页面的角色权限
    title: 'title'                sidebar侧边栏和面包屑导航标题
    icon: 'el-icon-x'             侧边栏图标（使用element-ui组件库的图标）
    noCache: true                 当设置为true时不缓存该路由页面（默认：false）
    affix: true                   当设置为true时，标签固定在标签栏上
    breadcrumb: false             当设置为false时，隐藏面包屑导航
    activeMenu: '/path/path'      当设置了路径时，sidebar侧边栏对应路径的菜单项高亮
   }
 */

/**
 * 通用路由 constantRoutes
 * 没有权限要求的基本页面
 * 所有角色都可以访问
 */

export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    meta: { title: '用户登录' },
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    meta: { title: '404 Not Found!' },
    hidden: true
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'el-icon-s-home' }
      }
    ]
  }
]

/**
 * 动态添加路由 asyncRoutes
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [NavTest]

const createRouter = () =>
  new VueRouter({
    // 默认的hash模式（地址栏包含#）在微信支付和分享url等情况下会有问题，线上项目最好使用history模式（需要后台配合）
    // mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// 解决addRoute不能删除动态路由问题
// 详情见：https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// 退出登录或者改变角色的时候需要调用该函数重置路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

// 导航守卫
router.beforeEach(async (to, from, next) => {
  // console.log('to: ', to)
  // console.log('from: ', from)
  // 设置页面标题
  document.title = getPageTitle(to.meta.title)
  // 判断是否已登录
  if (store.getters.token) {
    // 有token（已登录）
    if (to.path === '/login') {
      // 已经登录了的话跳转到登录后重新跳转回首页
      next({ path: '/' })
    } else {
      // 判断是否已存在用户对应的角色
      const hasRoles = store.getters.roles.length > 0
      if (hasRoles) {
        // console.log('已登录 已存在角色')
        next()
      } else {
        // console.log('已登录 未获取用户信息')
        try {
          const { roles } = await store.dispatch('user/getInfo')
          // console.log('roles: ', roles)
          // 根据角色生成对应的路由表
          const accessRoutes = await store.dispatch(
            'permission/generateRoutes',
            roles
          )

          // 动态添加允许访问的路由
          router.addRoutes(accessRoutes)

          // 使用 replace 访问路由，不会在 history 中留下记录，
          // 防止回退到 login 页面
          // console.log('next ...to replace true ', to)
          next({ ...to, replace: true })
        } catch (error) {
          console.error(error)
          // 获取用户信息错误，移除token，重新登录
          await store.dispatch('user/logout', to.fullPath)
          // Message.error({
          //   message: error || '验证失败，请重新登录'
          // })
        }
      }
    }
  } else {
    // 没有token（未登录）
    // 判断是否在白名单内（不需要登录验证的页面路径）
    if (whiteList.indexOf(to.path) !== -1) {
      // 在白名单内的页面直接跳转
      next()
    } else {
      // 其他页面跳转到登录页
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
})

export default router
