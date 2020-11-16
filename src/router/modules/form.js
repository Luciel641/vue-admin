import Layout from '@/layout'

const formRouter = {
  path: '/form',
  name: 'Form',
  component: Layout,
  redirect: '/form/base-form',
  meta: { title: '表单', icon: 'el-icon-s-order' },
  alwaysShow: true,
  children: [
    {
      path: 'base-form',
      name: 'BaseForm',
      component: () => import('@/views/form/base-form'),
      meta: { title: '基础表单' }
    },
    {
      path: 'advanced-form',
      name: 'AdvancedForm',
      component: () => import('@/views/form/advanced-form'),
      meta: { title: '高级表单' }
    }
  ]
}

export default formRouter
