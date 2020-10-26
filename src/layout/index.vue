<template>
  <el-container :class="wrapClass" class="app-wrapper">
    <el-aside>
      <sidebar class="sidebar-container" />
    </el-aside>

    <el-container>
      <el-header>
        <app-header />
      </el-header>

      <el-main>
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { Sidebar, AppHeader, AppMain } from './components'

export default {
  name: 'Layout',
  components: { Sidebar, AppHeader, AppMain },
  computed: {
    ...mapGetters(['sidebar']),
    wrapClass() {
      return {
        'sidebar-open': this.sidebar.opened,
        'sidebar-close': !this.sidebar.opened,
        whithoutAnimation: this.sidebar.whithoutAnimation
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
