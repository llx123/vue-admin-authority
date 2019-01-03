const app = {
  state: {
    sideBar: {
      opened: false,
      themeType: true
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sideBar.opened = !state.sideBar.opened
    },
    TOGGLE_THEME: state => {
      state.sideBar.themeType = !state.sideBar.themeType
    }
  },
  actions: {
    toggleSideBar({commit}) {
      commit('TOGGLE_SIDEBAR')
    },
    toggleTheme({commit}) {
      commit('TOGGLE_THEME')
    }
  }
}

export default app