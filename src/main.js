import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import _ from 'lodash' // js实用工具库

Vue.prototype._ = _

import './router/permission' // 路由权限控制
import '@/utils/request'

import 'normalize.css/normalize.css' //  样式重置
import './plugins/element.js'
import '@/styles/index.scss' // 全局样式

// 生产环境使用mock.js模拟数据
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
