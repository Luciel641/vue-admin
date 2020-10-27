<template>
  <el-dropdown>
    <div class="el-dropdown-link">
      <!-- <el-avatar size="medium" :src="avatar"></el-avatar> -->
      <img :src="avatar" alt="user" />
      <span class="username">
        {{ username }}
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <router-link to="/">首页</router-link>
      </el-dropdown-item>
      <el-dropdown-item>
        <router-link to="/personal">个人中心</router-link>
      </el-dropdown-item>
      <el-dropdown-item divided @click.native="logout">退出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserDropdown',
  computed: {
    ...mapGetters(['username', 'avatar'])
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout', this.$route.fullPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    vertical-align: middle;
  }
  cursor: pointer;
  .username {
    margin-left: 10px;
  }
}
</style>
