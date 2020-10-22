const users = {
  admin: {
    password: '123456',
    token: 'admin-token'
  },
  user: {
    password: '123456',
    token: 'user-token'
  }
}
const userinfo = {
  'admin-token': {
    roles: ['admin'],
    intro: '当前身份为超级管理员',
    avatar: '@/assets/avatar/avatar_admin.jpg',
    name: 'Super Admin'
  },
  'user-token': {
    roles: ['user'],
    intro: '当前身份为普通用户',
    avatar: '@/assets/avatar/avatar_admin.jpg',
    name: 'Normal User'
  }
}

module.exports = [
  // 用户登录
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username, password } = config.body
      let token = ''
      if (users[username] && password == users[username].password) {
        token = users[username].token || ''
      }

      if (!token) {
        return {
          code: 1,
          msg: '登录失败，账号或密码不正确'
        }
      }
      return {
        code: 0,
        data: {
          token
        }
      }
    }
  },
  // 获取用户信息
  {
    url: '/user/info',
    type: 'post',
    response: config => {
      const { token } = config.body
      const info = userinfo[token] || ''
      if (!info) {
        return {
          code: 1,
          msg: '登录失败，无法获取用户信息'
        }
      }
      return {
        code: 0,
        data: info
      }
    }
  }
]
