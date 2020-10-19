import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// 引入modules目录下所有的js文件
// 参考：https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)
console.log('modules files: ', modulesFiles.keys())
// const modules = modulesFiles.keys().reduce(()=>{

// })

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
})
