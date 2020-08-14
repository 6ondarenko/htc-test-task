export default {
  state: {
    search: ""
  },
  getters: {
    getSearch: state => state.search
  },
  mutations: {
    searchReset(state) {
      state.search = "";
    },
    searchSet(state, payload) {
      state.search = payload;
    }
  },
  actions: {}
};
