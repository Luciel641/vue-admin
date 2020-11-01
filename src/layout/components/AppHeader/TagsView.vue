<template>
  <div class="tags-view">
    <scrollbar-x>
      <div class="tags">
        <!-- <el-tag
          v-for="tag in visitedViews"
          :key="tag.path"
          size="medium"
          :effect="isActive(tag) ? 'dark' : 'light'"
          :closable="!tag.meta.affix"
          @close="closeSelectedTags(tag)"
        >
          <router-link
            ref="tag"
            :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
            >{{ tag.title }}</router-link
          >
        </el-tag> -->
        <router-link
          v-for="tag in visitedViews"
          :key="tag.path"
          ref="tag"
          :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
          class="link"
        >
          <el-tag
            size="medium"
            :effect="isActive(tag) ? 'dark' : 'light'"
            :closable="!tag.meta.affix"
            @close.prevent="closeSelectedTags(tag)"
          >
            {{ tag.title }}
          </el-tag>
        </router-link>
      </div>
    </scrollbar-x>
  </div>
</template>

<script>
import path from 'path'
import { mapGetters } from 'vuex'
import ScrollbarX from './ScrollbarX'

export default {
  name: 'TagsView',
  components: { ScrollbarX },
  data() {
    return {
      affixTags: []
    }
  },
  computed: {
    ...mapGetters(['visitedViews', 'routes'])
  },
  watch: {
    // 监听当前路由的变动
    $route() {
      this.addTags()
      this.moveToCurrentTag()
    }
  },
  mounted() {
    // 初始化标签栏
    this.initTags()
    // 添加当前页面到标签栏
    this.addTags()
  },
  methods: {
    print(val) {
      console.log(val)
    },
    // 判断标签是否激活
    isActive(route) {
      return route.path === this.$route.path
    },
    // 过滤固定标签的路由
    filterAffixTags(routes, basePath = '/') {
      let tags = []
      routes.forEach(route => {
        const tagPath = path.resolve(basePath, route.path)
        if (route.meta && route.meta.affix) {
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          })
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, tagPath)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },
    // 初始化标签栏
    initTags() {
      // 先把需要固定在标签栏的筛选出来
      const affixTags = (this.affixTags = this.filterAffixTags(this.routes))
      for (const tag of affixTags) {
        if (tag.name) {
          this.$store.dispatch('tagsView/addVisitedView', tag)
        }
      }
    },
    // 添加当前页面到标签栏
    addTags() {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('tagsView/addView', this.$route)
      }
      return false
    },
    // 滚动到当前标签
    moveToCurrentTag() {
      const tags = this.$refs.tag
      for (const tag of tags) {
        if (tag.to.path === this.$route.path) {
          if (tag.to.fullPath !== this.$route.fullPath) {
            this.$store.dispatch('tagsView/updateVisitedView', this.$route)
          }
          break
        }
      }
    },
    // 关闭选中标签
    closeSelectedTags(view) {
      this.$store
        .dispatch('tagsView/delView', view)
        .then(({ visitedViews }) => {
          // 如果关闭的标签是当前页面的，则跳转到标签栏的最后一个标签
          if (this.isActive(view)) {
            this.toLastView(visitedViews, view)
          }
        })
    },
    // 跳转到标签栏最后一个标签
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView.fullPath)
      } else {
        // 当删除的已经是最后的一个标签时，跳转到首页
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.tags-view {
  height: $tagViewHeight;
  line-height: $tagViewHeight;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  .el-tag {
    + .el-tag {
      margin-left: 5px;
    }
  }
  .tags {
    display: inline-block;
    padding: 0 10px;
    .link {
      display: inline-block;
      + .link {
        margin-left: 5px;
      }
    }
  }
}
</style>
