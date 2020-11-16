<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="form"
      :rules="loginRules"
      class="login-form"
      label-position="left"
    >
      <div class="login-title">用户登录</div>
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="用户名">
          <i slot="prefix" class="el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" type="password" placeholder="密码">
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-button
        class="block"
        type="primary"
        :loading="loading"
        @click="handleLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码不能少于六位数字', trigger: 'blur' }
        ]
      },
      loading: false, // 按钮加载提示
      redirect: undefined, // 登录成功后的跳转地址
      otherQuery: {} // 其他请求参数
    }
  },
  watch: {
    // 重定向时携带之前页面的参数，以免参数丢失
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  methods: {
    // 登录
    handleLogin() {
      // 验证表单格式
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('user/login', this.form)
            .then(() => {
              this.loading = false
              this.$message({
                message: `登录成功`,
                type: 'success',
                duration: 1500
              })
              this.$router.push(this.$route.query.redirect || '/')
            })
            .catch(error => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    // 获取其他请求参数
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss" scoped>
$bg: #354053;
.login-container {
  width: 100%;
  height: 100%;
  padding: 200px 20px 0;
  background-color: $bg;
}
.login-form {
  max-width: 400px;
  padding: 30px 20px 10px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.3);
  .login-title {
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 26px;
    color: $bg;
  }
  .el-input i[class^='el-icon'] {
    font-size: 20px;
  }
}
</style>
