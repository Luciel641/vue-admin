<template>
  <div>
    <div class="page-header">
      <div class="title">权限测试页</div>
      <div class="content">
        在这里可以临时测试切换管理员（admin）和普通用户身份（user），切换后可以到首页看效果，管理员可以显示图表面板。
        <br />
        刷新网页后会重新登录，回到原来的权限。
        <br />
        也可以退出重新登录不同账号查看。
      </div>
    </div>
    <div class="page-card">
      <div>
        <span>当前身份：</span>
        <span v-if="isAdmin">管理员</span>
        <span v-else>普通用户</span>
      </div>
      <div class="mg-t-20">
        <span>切换权限：</span>
        <el-button-group>
          <el-button
            :type="isAdmin ? 'primary' : ''"
            @click="switchTo('admin')"
          >
            管理员
          </el-button>
          <el-button
            :type="!isAdmin ? 'primary' : ''"
            @click="switchTo('user')"
          >
            普通用户
          </el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import router, { resetRouter } from '@/router'

export default {
  name: 'PermissionTest',
  computed: {
    ...mapGetters(['roles']),
    isAdmin() {
      return this.roles[0] == 'admin'
    }
  },
  methods: {
    async switchTo(roles) {
      console.log('switch')
      this.$store.commit('user/SET_ROLES', [roles])

      resetRouter()
      // generate accessible routes map based on roles
      const accessRoutes = await this.$store.dispatch(
        'permission/generateRoutes',
        [roles]
      )
      // console.log('accessRoutes')
      // dynamically add accessible routes
      router.addRoutes(accessRoutes)
      this.$store.dispatch('tagsView/delAllViews') // 清除标签栏
    }
  }
}
</script>

<style lang="scss" scoped></style>
