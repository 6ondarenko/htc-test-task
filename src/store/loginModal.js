export default {
  state: {
    loginModalActive: true
  },
  getters: {
    loginModalActive: state => state.loginModalActive
  },
  mutations: {
    loginModalShow (state) {
      state.loginModalActive = true
    },
    loginModalHide (state) {
      state.loginModalActive = false
    }
  },
  actions: {}
}
