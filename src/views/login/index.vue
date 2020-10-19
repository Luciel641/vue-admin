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
console.log('port:', process.env)
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
      redirect: undefined, // 登录成功后的跳转地址
      loading: false // 按钮加载提示
    }
  },
  methods: {
    handleLogin() {
      // 验证表单格式
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          // this.$message({
          //   message: `登录成功！欢迎您，${this.form.username}`,
          //   type: 'success'
          // })
          // this.$router.push({ path: this.redirect || '/' })
        } else {
          return false
        }
      })
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
