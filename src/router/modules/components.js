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
      component: () => import('@/views/components-demo/rich-text-editor'),
      meta: { title: '富文本编辑器' }
    },
    {
      path: 'avatar-upload',
      name: 'AvatarUpload',
      component: () => import('@/views/components-demo/avatar-upload'),
      meta: { title: '头像上传' }
    },
    {
      path: 'count-to',
      name: 'CountToDemo',
      component: () => import('@/views/components-demo/count-to'),
      meta: { title: '数字滚动' }
    },
    {
      path: 'clipboard',
      name: 'Clipboard',
      component: () => import('@/views/components-demo/clipboard'),
      meta: { title: '剪贴板' }
    }
  ]
}

export default componentsRouter
