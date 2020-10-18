<template>
  <el-container class="app-wrapper">
    <el-aside>
      <sidebar class="sidebar-container" />
    </el-aside>

    <el-container>
      <el-header>
        <app-header />
      </el-header>

      <el-main>
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { Sidebar, AppHeader, AppMain } from './components'

export default {
  name: 'Layout',
  components: { Sidebar, AppHeader, AppMain }
}
</script>

<style lang="scss" scoped></style>
