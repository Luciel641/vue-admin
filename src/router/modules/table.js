import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/base-table',
  meta: { title: '表格', icon: 'el-icon-s-grid' },
  alwaysShow: true,
  children: [
    {
      path: 'base-table',
      name: 'BaseTable',
      component: () => import('@/views/table/base-table'),
      meta: { title: '基础表格' }
    },
    {
      path: 'advanced-table',
      name: 'AdvancedTable',
      component: () => import('@/views/table/advanced-table'),
      meta: { title: '高级表格' }
    }
  ]
}

export default tableRouter
