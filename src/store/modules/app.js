const state = {
  // 侧边栏的展开状态
  sidebar: {
    opened: sessionStorage.getItem('sidebar_opened')
      ? !!+sessionStorage.getItem('sidebar_opened')
      : true,
    withoutAnimation: false
  },
  device: 'desktop'
}

const mutations = {
  TOGGLE_SIDEBAR(state, status) {
    console.log('toggle sidebar !!!')
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
    console.log('toggle sidebar !!')
    commit('TOGGLE_SIDEBAR')
  },
  closeSidebar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
