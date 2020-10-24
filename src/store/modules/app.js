const state = {
  // 侧边栏的展开状态
  sidebarOpened: sessionStorage.getItem('sidebarOpened')
    ? !!+sessionStorage.getItem('sidebarOpened')
    : true
}

const mutations = {
  TOGGLE_SIDEBAR(state, opened) {
    if (opened) {
      state.sidebarOpened = !!+opened
    } else {
      state.sidebarOpened = !state.sidebarOpened
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
