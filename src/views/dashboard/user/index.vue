<template>
  <div>
    <div class="page-header">
      <div class="title">普通用户首页</div>
      <div class="content">普通用户首页不展示图表面板</div>
    </div>
    <div class="page-card">
      <div>
        <span class="hello">Hello!</span>
        <el-avatar :src="avatar" :size="100" class="mg-l-50"></el-avatar>
        <span class="username">{{ username }}</span>
      </div>
      <div class="welcome-text">Welcome to vue-admin</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DashboardUser',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['username', 'avatar'])
  }
}
</script>

<style lang="scss" scoped>
.hello {
  font-size: 90px;
  color: skyblue;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}
.username {
  margin-left: 20px;
  font-size: 60px;
  color: #666;
}
.welcome-text {
  font-size: 100px;
  color: skyblue;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}
</style>
