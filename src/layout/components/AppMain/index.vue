<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppMain',
  computed: {
    ...mapGetters(['cachedViews'])
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  height: 100%;
}
</style>
