<template>
  <div class="header">
    <!-- 导航栏 -->
    <div class="navbar">
      <div class="nav-l">
        <!-- 侧边栏切换按钮 -->
        <hamburger
          :active="sidebar.opened"
          class="hamburger-box"
          @toggleClick="toggleSidebar"
        />
        <!-- 面包屑导航 -->
        <breadcrumb class="breadcrumb-wrap" />
      </div>
      <div class="nav-r">
        <ul class="nav-ul">
          <!-- 搜索 -->
          <!-- <div class="search"></div> -->
          <!-- 消息中心 -->
          <!-- <div class="notice"></div> -->
          <!-- 全屏 -->
          <li class="full-screen">
            <i class="el-icon-full-screen"></i>
          </li>
          <!-- 用户 -->
          <li>
            <user-dropdown class="header-user"></user-dropdown>
          </li>
        </ul>
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
import UserDropdown from '@/components/UserDropdown'
import TagsView from './TagsView'

export default {
  name: 'AppHeader',
  components: { Hamburger, Breadcrumb, UserDropdown, TagsView },
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
}
.nav-l {
  float: left;
  height: 100%;
}
.nav-r {
  float: right;
  height: 100%;
  .nav-ul {
    height: 100%;
    li {
      float: left;
      height: 100%;
      line-height: $navHeight;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.025);
      }
    }
    .full-screen {
      padding: 0 8px;
    }
    .header-user {
      height: 100%;
      ::v-deep .el-dropdown-link {
        padding: 0 8px;
      }
    }
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
