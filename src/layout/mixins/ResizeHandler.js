import store from '@/store'

const { body } = document
const WIDTH = 992

export default {
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        store.dispatch('app/closeSidebar', { withoutAnimation: false })
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    const isMobile = this.$_isMobile()
    if (isMobile) {
      store.dispatch('app/toggleDevice', 'mobile')
      store.dispatch('app/closeSidebar', { withoutAnimation: true })
    }
  },
  methods: {
    // 私有 property 名使用 $_ 命名
    // 参考：https://cn.vuejs.org/v2/style-guide/#%E7%A7%81%E6%9C%89-property-%E5%90%8D%E5%BF%85%E8%A6%81
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile()
        store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')

        if (isMobile) {
          store.dispatch('app/closeSidebar', { withoutAnimation: true })
        }
      }
    }
  }
}
