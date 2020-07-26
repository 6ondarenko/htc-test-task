import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/store/users'
import films from '@/store/films'
import categories from '@/store/categories'
import loginModal from '@/store/loginModal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    categories,
    films,
    loginModal
  }
})
