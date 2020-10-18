<template>
  <section class="app-main">
    <transition>
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="scss" scoped>
.app-main {
  height: 100%;
}
</style>
