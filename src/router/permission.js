import router from './index'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // 进度条设置

const whiteList = ['/login'] // 白名单，不需要登录验证的页面路径

// 导航守卫
router.beforeEach(async (to, from, next) => {
  // 跳转时开始加载进度条
  NProgress.start()

  // 设置页面标题
  document.title = getPageTitle(to.meta.title)
  // 判断是否已登录
  if (store.getters.token) {
    // 有token（已登录）
    if (to.path === '/login') {
      // 已经登录了的话跳转到登录后重新跳转回首页
      next({ path: '/' })
      NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    } else {
      // 判断是否已存在用户对应的角色
      const hasRoles = store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const { roles } = await store.dispatch('user/getInfo')
          // 根据角色生成对应的路由表
          const accessRoutes = await store.dispatch(
            'permission/generateRoutes',
            roles
          )

          // 动态添加允许访问的路由
          router.addRoutes(accessRoutes)

          // 使用 replace 访问路由，不会在 history 中留下记录，
          // 防止回退到 login 页面
          next({ ...to, replace: true })
        } catch (error) {
          // 获取用户信息错误，移除token，重新登录
          await store.dispatch('user/logout', to.fullPath)
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
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 进度加载完成
  NProgress.done()
})
