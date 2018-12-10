const app = {
  state: {
    sideBar: {
      opened: true
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sideBar.opened = !state.sideBar.opened
    }
  },
  actions: {
    toggleSideBar({commit}) {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default app