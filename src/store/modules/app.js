const state = {
  // 侧边栏的展开状态
  sidebar: {
    opened: sessionStorage.getItem('sidebar_opened')
      ? !!+sessionStorage.getItem('sidebar_opened')
      : true,
    whithoutAnimation: false
  }
}

const mutations = {
  TOGGLE_SIDEBAR(state, opened) {
    if (opened) {
      state.sidebar.opened = !!+opened
    } else {
      state.sidebar.opened = !state.sidebar.opened
    }
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
