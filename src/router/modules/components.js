import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  name: 'Components',
  component: Layout,
  redirect: 'noRedirect',
  meta: { title: '组件', icon: 'el-icon-menu' },
  alwaysShow: true,
  children: [
    {
      path: 'rich-text-editor',
      name: 'RichTextEditor',
      component: () => import('@/views/rich-text-editor'),
      meta: { title: '富文本编辑器' }
    }
  ]
}

export default componentsRouter
