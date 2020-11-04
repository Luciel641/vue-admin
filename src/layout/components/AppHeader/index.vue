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
        <!-- 刷新 -->
        <div class="refresh-btn" @click="refresh">
          <i class="el-icon-refresh-right"></i>
        </div>
        <!-- 面包屑导航 -->
        <breadcrumb class="breadcrumb-wrap hidden-sm-and-down" />
      </div>
      <div class="nav-r">
        <ul class="nav-ul">
          <!-- 搜索 -->
          <!-- <div class="search"></div> -->
          <!-- 消息中心 -->
          <!-- <div class="notice"></div> -->
          <!-- 全屏 -->
          <li class="full-screen">
            <screen-full></screen-full>
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
import ScreenFull from '@/components/ScreenFull'
import UserDropdown from '@/components/UserDropdown'
import TagsView from './TagsView'

export default {
  name: 'AppHeader',
  components: { Hamburger, Breadcrumb, ScreenFull, UserDropdown, TagsView },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('app/toggleSidebar')
    },
    refresh() {
      const { fullPath } = this.$route
      this.$router.replace({
        path: '/redirect' + fullPath
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.header {
  background-color: #fff;
}
.navbar {
  height: $navHeight;
  line-height: $navHeight;
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
      ::v-deep .full-screen-btn {
        padding: 0 8px;
      }
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
  padding: 0 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.025);
  }
}
.refresh-btn {
  float: left;
  padding: 0 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.025);
  }
}
.breadcrumb-wrap {
  display: flex;
  float: left;
  align-items: center;
  height: 100%;
  margin-left: 10px;
}
</style>
