<template>
  <div v-bind="linkProps(to)">
    <slot />
  </div>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    // 判断是否为外链，如果是则新窗口打开，否则用router-link组件跳转
    linkProps(to) {
      if (isExternal(to)) {
        return {
          is: 'a',
          href: to,
          target: '_blank'
        }
      } else {
        return {
          is: 'router-link',
          to: to
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
