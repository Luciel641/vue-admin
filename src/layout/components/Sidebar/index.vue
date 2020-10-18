<template>
  <div :class="{ 'has-logo': showLogo }">
    <div v-if="showLogo" class="slidebar-logo-box">
      <router-link to="/">
        <img class="logo" src="@/assets/logo.png" alt="" />
        <span class="title">Vue Admin</span>
      </router-link>
    </div>
    <el-scrollbar>
      <el-menu
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
      >
        <sidebar-item v-for="(item, index) in 20" :key="index" :item="index" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  name: 'Sidebar',
  components: { SidebarItem },
  computed: {
    showLogo() {
      return true
    },
    variables() {
      return variables
    }
  }
}
</script>

<style lang="scss" scoped></style>
