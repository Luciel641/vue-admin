import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout 布局 */
import Layout from '@/layout'

/* 测试导航菜单 */
import NavTest from './modules/nav-test'

import getPageTitle from '@/utils/get-page-title'

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

const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    meta: { title: '登录页' },
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
    name: 'Dashboard',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页' }
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
  // 设置页面标题
  document.title = getPageTitle(to.meta.title)
  // 判断是否已登录

  if (to.path === '/login') {
    next()
  } else {
    next()
  }
})

export default router
