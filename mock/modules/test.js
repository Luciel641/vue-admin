module.exports = [
  // 测试接口
  {
    url: '/test',
    type: 'post',
    response: config => {
      const body = config.body
      return {
        code: 0,
        data: {
          body
        }
      }
    }
  }
]
