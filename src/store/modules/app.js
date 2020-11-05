const state = {
  // 侧边栏
  sidebar: {
    opened: sessionStorage.getItem('sidebar_opened')
      ? !!+sessionStorage.getItem('sidebar_opened')
      : true,
    withoutAnimation: false
  },
  device: 'desktop',
  routerViewShow: true,
  routerTransition: false
}

const mutations = {
  TOGGLE_SIDEBAR(state, status) {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      sessionStorage.setItem('sidebar_opened', 1)
    } else {
      sessionStorage.setItem('sidebar_opened', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    sessionStorage.setItem('sidebar_opened', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  }
}

const actions = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSidebar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  // 刷新页面（用于刷新页面的数据，直接刷新页面使用跳转重定向页面的方式）
  refresh({ dispatch, state }, { _this, transition = true }) {
    dispatch('tagsView/delCachedView', _this.$route, { root: true }).then(
      () => {
        state.routerViewShow = false
        _this.$nextTick(() => {
          state.routerTransition = transition
          state.routerViewShow = true
          _this.$nextTick(() => {
            state.routerTransition = true
          })
        })
      }
    )
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
