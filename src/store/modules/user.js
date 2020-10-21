import { login, getInfo } from '@/api/user'

const state = {}

const mutations = {}

const actions = {
  // 登录
  login({ commit }, formData) {
    return new Promise((resolve, reject) => {
      login(formData)
        .then(res => {
          console.log('登录结果：', res)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 获取用户信息
  getInfo({ commit }) {},
  // 退出登录
  logout({ commit }) {}
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
