const getters = {
  opened: state => state.app.sideBar.opened,
  themeType: state => state.app.sideBar.themeType,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,
}
export default getters