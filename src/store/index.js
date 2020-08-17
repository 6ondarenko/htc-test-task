import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/store/users'
import films from '@/store/films'
import search from '@/store/search'
import categories from '@/store/categories'
import channels from '@/store/channels'
import loginModal from '@/store/loginModal'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globalScrollbar: true,
    globalScrollbarY: 0
  },
  getters: {
    globalScrollbar: state => state.globalScrollbar,
    globalScrollbarY: state => state.globalScrollbarY
  },
  mutations: {
    globalScrollbarSet: (state, flag) => {
      state.globalScrollbar = flag
    },
    globalScrollbarYSet: (state, payload) => {
      state.globalScrollbarY = payload
    }
  },
  modules: {
    users,
    categories,
    films,
    search,
    loginModal,
    channels
  }
})
