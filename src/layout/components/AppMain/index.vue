<template>
  <section class="app-main">
    <transition :name="routerTransition ? 'fade-transform' : ''" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view v-if="routerViewShow" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'AppMain',
  computed: {
    ...mapGetters(['cachedViews']),
    ...mapState({
      routerViewShow: state => state.app.routerViewShow,
      routerTransition: state => state.app.routerTransition // 是否显示路由切换的过渡效果
    })
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  min-height: 100%;
}
</style>
