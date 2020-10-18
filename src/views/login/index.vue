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
      <el-button class="block" type="primary" @click="handleLogin"
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
    const validaUsername = (rules, value, callback) => {
      if (value != 'admin') {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validaPassword = (rules, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于六位数字'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [
          { require: true, trigger: 'blur', validator: validaUsername }
        ],
        password: [
          { require: true, trigger: 'blur', validator: validaPassword }
        ]
      },
      redirect: undefined
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        console.log('valid: ', valid)
        if (valid) {
          this.$message({
            message: `登录成功！欢迎您，${this.form.username}`,
            type: 'success'
          })
          this.$router.push({ path: this.redirect || '/' })
        } else {
          this.$message.error('表单验证失败')
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
