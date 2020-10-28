<template>
  <div class="full-screen-btn" @click="toggleFullScreen">
    <i v-if="!isFullscreen" class="el-icon-full-screen"></i>
    <i v-else class="el-icon-full-screen"></i>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'ScreenFull',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    toggleFullScreen() {
      if (!screenfull.isEnabled) {
        this.$message.warning('当前浏览器不支持全屏')
        return false
      }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.isEnabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
