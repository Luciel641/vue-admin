<template>
  <el-scrollbar
    ref="scrollbarX"
    class="scrollbar-x"
    @wheel.native.prevent="handleScroll"
  >
    <slot />
  </el-scrollbar>
</template>

<script>
export default {
  name: 'ScrollbarX',
  data() {
    return {
      left: 0
    }
  },
  computed: {
    scrollWrapper() {
      return this.$refs.scrollbarX.$refs.wrap // 获取el-scrollbar的wrap实例
    }
  },
  beforeDestroy() {},
  methods: {
    // 参考：https://github.com/PanJiaChen/vue-element-admin/blob/1bc2e5c1980b2e5131164849f66dd4f03216806d/src/layout/components/TagsView/ScrollPane.vue#L29
    handleScroll(e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 40
      const $scrollWrapper = this.scrollWrapper
      // $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4
      // 调整滚动效果
      $scrollWrapper.scroll({
        left: $scrollWrapper.scrollLeft - eventDelta / 4,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.scrollbar-x {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  // height: 100%;
  ::v-deep {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      // height: 100%;
    }
  }
}
</style>
