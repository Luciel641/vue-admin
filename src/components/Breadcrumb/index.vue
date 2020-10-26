<template>
  <el-breadcrumb>
    <el-breadcrumb-item>首页</el-breadcrumb-item>
    <el-breadcrumb-item>面包屑</el-breadcrumb-item>
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
      console.log('route: ', this.$route)
    }
  }
}
</script>

<style lang="scss" scoped></style>
