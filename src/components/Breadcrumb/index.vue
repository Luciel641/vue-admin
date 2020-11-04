<template>
  <el-breadcrumb>
    <el-breadcrumb-item v-for="item in breadList" :key="item.path">
      <span v-if="item.redirect === 'noRedirect'">{{ item.meta.title }}</span>
      <router-link v-else :to="item.redirecr || item.path">
        {{ item.meta.title }}
      </router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadList: []
    }
  },
  watch: {
    // 监听路由变动，更新导航
    $route: {
      handler(route) {
        this.getBreadCrumb()
      },
      immediate: true
    }
  },
  methods: {
    getBreadCrumb() {
      // 从路由记录中过滤出有标题的路由
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      )
      // 默认由首页开始
      if (!this.isDashboard(matched[0])) {
        matched = [{ path: '/dashboard', meta: { title: '首页' } }, ...matched]
      }
      // 过滤掉不需要在面包屑导航上显示的路由
      this.breadList = matched.filter(item => item.meta.breadcrumb !== false)
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped></style>
