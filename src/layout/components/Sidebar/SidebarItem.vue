<template>
  <div>
    <el-menu-item>菜单{{ item }}</el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped></style>
