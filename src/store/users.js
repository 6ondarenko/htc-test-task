export default {
  state () {
    return {
      users: [
        {
          id: 1,
          login: 'admin',
          password: 'admin',
          name: 'Константин К.'
        }
      ],
      usersCurrentUser: null
    }
  },
  getters: {
    getUserByLoginAndPassword: (state) => (login, password) => {
      return state.users.find(u => u.login === login && u.password === password)
    },
    getUsersCurrentUser: state => state.usersCurrentUser
  },
  mutations: {
    usersSetCurrentUser (state, user) {
      state.usersCurrentUser = user
    },
    usersUpdateUserInfo (state, userData) {
      const user = {
        ...state.users.find(u => u.id === userData.id),
        ...userData
      }
      state.users = [
        ...state.users.filter(u => u.id !== user.id),
        user
      ]
    }
  },
  actions: {
    usersLoginExecute ({ commit, getters }, data) {
      return new Promise((resolve, reject) => {
        const user = getters.getUserByLoginAndPassword(data.login, data.password)
        setTimeout(() => {
          if (!user) {
            reject(new Error('Пользователь с таким сочетанием логина и пароля не найден!'))
          } else {
            commit('usersSetCurrentUser', user)
            resolve(user)
          }
        }, 1000)
      })
    },
    usersLoginOutExecute ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('usersSetCurrentUser', null)
            resolve(true)
        }, 1000)
      })
    }
  }
}
