import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/store/users'
import loginModal from '@/store/loginModal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    loginModal
  }
})
