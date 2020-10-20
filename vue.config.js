const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true, // 是否开启eslint保存检测
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
    overlay: {
      warning: false,
      error: true
    },
    before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
