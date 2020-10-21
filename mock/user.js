module.exports = [
  // 用户登录
  {
    url: '/user/login',
    type: 'post',
    response: (req, res) => {
      const { username } = req
      const token = 'user_token_123456'
      res.json({
        code: 0,
        msg: '',
        data: {
          username,
          token
        }
      })
    }
  }
]
