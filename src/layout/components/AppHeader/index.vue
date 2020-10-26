<template>
  <div class="header">
    <!-- 导航栏 -->
    <div class="navbar">
      <div class="nav-l">
        <hamburger
          :active="sidebar.opened"
          class="hamburger-box"
          @toggleClick="toggleSidebar"
        />
        <breadcrumb class="breadcrumb-wrap" />
      </div>
      <div class="nav-r">
        <div class="search"></div>
        <div class="screen-full"></div>
        <div class="avatar"></div>
      </div>
    </div>
    <!-- 标签栏 -->
    <tags-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import TagsView from './TagsView'

export default {
  name: 'AppHeader',
  components: { Hamburger, TagsView, Breadcrumb },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    toggleSidebar() {
      this.$store.commit('app/TOGGLE_SIDEBAR')
      console.log('togglesidebar')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.header {
}
.navbar {
  height: $navHeight;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  .nav-l {
    float: left;
    height: 100%;
  }
  .nav-right {
    float: right;
    height: 100%;
  }
}
.hamburger-box {
  display: flex;
  float: left;
  align-items: center;
  height: 100%;
  padding: 0 15px;
}
.breadcrumb-wrap {
  display: flex;
  float: left;
  align-items: center;
  height: 100%;
  margin-left: 10px;
}
</style>
