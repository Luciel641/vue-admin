const getters = {
  sidebarOpened: state => state.app.sidebarOpened,
  token: state => state.user.token,
  username: state => state.user.username,
  avatar: state => state.user.avatar,
  roles: state => state.user.roles
}

export default getters
