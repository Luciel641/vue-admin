import { login, getInfo } from '@/api/user'
import router, { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    username: '',
    avatar: '',
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  // 重置state数据
  RESET_STATE: state => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
    localStorage.setItem('token', token)
  },
  SET_NAME: (state, name) => {
    state.username = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // 登录
  login({ commit }, formData) {
    return new Promise((resolve, reject) => {
      login(formData)
        .then(res => {
          const { data } = res
          // console.log('登录结果：', data)
          commit('SET_TOKEN', data.token)
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then(res => {
          const { data } = res
          if (!data) {
            return reject('验证失败，请重新登录')
          }
          const { name, avatar, roles } = data
          commit('SET_NAME', name)
          commit('SET_AVATAR', avatar)
          commit('SET_ROLES', roles)
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 退出登录
  logout({ commit }, redirect) {
    console.log('登出')
    localStorage.removeItem('token')
    commit('RESET_STATE')
    resetRouter()
    router.push({
      path: '/login',
      query: {
        redirect: redirect || '/'
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
