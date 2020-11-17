module.exports = [
  // 上传图片
  {
    url: '/upload/image',
    type: 'post',
    response: config => {
      const body = config.body
      const data = body || {
        url: '/avatar/avatar_user.jpg'
      }
      return {
        code: 0,
        data: data
      }
    }
  }
]
