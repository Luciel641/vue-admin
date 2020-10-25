import Layout from '@/layout'
const navTest = {
  path: '/nav-test',
  component: Layout,
  name: 'NavTest',
  meta: { title: '导航菜单测试', icon: 'el-icon-s-order' },
  redirect: '/nav-test/nav1',
  children: [
    {
      path: 'nav1',
      name: 'Nav1',
      component: () => import('@/views/nav-test/nav1'),
      meta: { title: '菜单1' }
    },
    {
      path: 'nav2',
      name: 'Nav2',
      component: () => import('@/views/nav-test/nav2'),
      meta: { title: '菜单2' },
      redirect: '/nav-test/nav2/nav2-1',
      children: [
        {
          path: 'nav2-1',
          name: 'Nav2-1',
          component: () => import('@/views/nav-test/nav2/nav2-1'),
          meta: { title: '菜单2-1' }
        },
        {
          path: 'nav2-2',
          name: 'Nav2-2',
          component: () => import('@/views/nav-test/nav2/nav2-2'),
          meta: { title: '菜单2-2【会员】', roles: ['admin'] },
          redirect: '/nav-test/nav2/nav2-2/nav2-2-1',
          children: [
            {
              path: 'nav2-2-1',
              name: 'Nav2-2-1',
              component: () => import('@/views/nav-test/nav2/nav2-2/nav2-2-1'),
              meta: { title: '菜单2-2-1' }
            },
            {
              path: 'nav2-2-2',
              name: 'Nav2-2-2',
              component: () => import('@/views/nav-test/nav2/nav2-2/nav2-2-2'),
              meta: { title: '菜单2-2-2' }
            }
          ]
        }
      ]
    }
  ]
}
export default navTest
