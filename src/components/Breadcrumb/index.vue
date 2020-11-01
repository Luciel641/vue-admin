<template>
  <el-breadcrumb>
    <el-breadcrumb-item
      v-for="item in breadList"
      :key="item.path"
      :to="item.redirect ? '' : item.path"
      >{{ item.meta.title }}</el-breadcrumb-item
    >
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
    $route: {
      handler(route) {
        this.getBreadCrumb()
      },
      immediate: true
    }
  },
  methods: {
    getBreadCrumb() {
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      )
      if (!this.isDashboard(matched[0])) {
        matched = [{ path: '/dashboard', meta: { title: '首页' } }, ...matched]
      }
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
