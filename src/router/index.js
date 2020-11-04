import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决跳转同一个路由报错
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

/* 路由模块 */
import componentsRouter from './modules/components' // 组件
import formRouter from './modules/form' // 表单
import NavTest from './modules/nav-test'

/**
 * 路由相关属性说明
 * name: keep-alive匹配的是组件的name，所以需保持和组件的name一致且唯一（不能有重复name）
 * redirect: noRedirect           设置为noRedirect时，面包屑不能点击跳转
 * hidden: true                   当设置为true时，不在sidebar侧边栏中显示（默认：false）
 * alwaysShow: true               当设置为true时，总是在菜单显示，不设置时只有当子路由超过一个时才会显示
 * meta: {
    roles: ['admin', 'user']      控制页面的角色权限
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
  // 页面重定向，用于刷新路由
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    meta: { title: '用户登录' },
    hidden: true
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
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
        meta: { title: '首页', icon: 'el-icon-s-home', affix: true }
      }
    ]
  }
]

/**
 * 动态添加路由 asyncRoutes
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [
  // 组件
  componentsRouter,
  // 表单
  formRouter,
  // 图表
  {
    path: '/charts',
    name: 'Charts',
    component: Layout,
    meta: { title: '图表', icon: 'el-icon-s-marketing' }
  },
  // 表格
  {
    path: '/table',
    name: 'Table',
    component: Layout,
    meta: { title: '表格', icon: 'el-icon-s-grid' }
  },
  // Excel
  {
    path: '/excel',
    name: 'Excel',
    component: Layout,
    meta: { title: 'Excel', icon: 'el-icon-document' }
  },
  {
    path: '/error',
    name: 'ErrorPages',
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: '错误页面', icon: 'el-icon-s-release' },
    children: [
      {
        path: '401',
        name: 'Page401',
        component: () => import('@/views/error-page/401'),
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/error-page/404'),
        meta: { title: '404', noCache: true }
      }
    ]
  },
  NavTest,
  // 404 页面必须放在最后面！！！
  { path: '*', redirect: '/404', hidden: true }
]

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

export default router
