<template>
  <div :class="{ 'has-logo': showLogo }">
    <div v-if="showLogo" class="slidebar-logo-box">
      <router-link to="/">
        <img class="logo" src="@/assets/logo.png" alt="" />
        <span v-if="sidebar.opened" class="title">Vue Admin</span>
      </router-link>
    </div>
    <el-scrollbar>
      <el-menu
        mode="vertical"
        :collapse="!sidebar.opened"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :default-active="activeMenu"
        :collapse-transition="false"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  name: 'Sidebar',
  components: { SidebarItem },
  computed: {
    ...mapGetters(['routes', 'sidebar']),
    showLogo() {
      return true
    },
    variables() {
      return variables
    },
    activeMenu() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped></style>
