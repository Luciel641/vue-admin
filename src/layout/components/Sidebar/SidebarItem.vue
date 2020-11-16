<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOnlyChild(item.children, item) &&
          (!childItem.children || noShowingChild) &&
          !item.alwaysShow
      "
    >
      <app-link :to="resolvePath(childItem.path)">
        <el-menu-item
          v-if="childItem.meta"
          :index="resolvePath(childItem.path)"
        >
          <i v-if="childItem.meta.icon" :class="childItem.meta.icon"></i>
          <span slot="title">{{ childItem.meta.title }}</span>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <i v-if="item.meta.icon" :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import appLink from './Link'

export default {
  name: 'SidebarItem',
  components: { appLink },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.childItem = null
    return {}
  },
  methods: {
    // 判断是否仅有一个子路由
    hasOnlyChild(children = [], parent) {
      // 筛选出需要展示的子路由
      let showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          return true
        }
      })
      // 仅有一个子路由，则该子路由作为菜单项
      if (showingChildren.length === 1) {
        this.childItem = showingChildren[0]
        return true
      }
      // 没有子路由，则当前路由作为菜单项
      if (showingChildren.length === 0) {
        this.childItem = { ...parent, path: '', noShowingChild: true }
        return true
      }
      return false
    },
    // 解析路径
    // 判断是否为外链，是的话返回外链，否则返回拼接后的路径
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style lang="scss" scoped></style>
