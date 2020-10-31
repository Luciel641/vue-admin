<template>
  <el-container :class="wrapClass" class="app-wrapper">
    <el-aside>
      <sidebar class="sidebar-container" />
    </el-aside>

    <el-container>
      <div
        v-if="device === 'mobile' && sidebar.opened"
        class="mask-bg"
        @click="hideSidebar"
      ></div>
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
import { mapState, mapGetters } from 'vuex'
import { Sidebar, AppHeader, AppMain } from './components'
import ResizeMixin from './mixins/ResizeHandler'

export default {
  name: 'Layout',
  components: { Sidebar, AppHeader, AppMain },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      withoutAnimation: state => state.sidebar.withoutAnimation
    }),
    ...mapGetters(['sidebar', 'device']),
    wrapClass() {
      return {
        'sidebar-open': this.sidebar.opened,
        'sidebar-close': !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    hideSidebar() {
      this.$store.dispatch('app/closeSidebar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
.mask-bg {
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
