module.exports = [
  // 上传图片
  {
    url: '/upload/image',
    type: 'post',
    response: config => {
      const body = config.body
      return {
        code: 0,
        data: {
          url: '/avatar/avatar_user.jpg'
        }
      }
    }
  }
]
