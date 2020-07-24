import firebase from 'firebase'

export default {
  state () {
    return {
      users: [],
      usersCurrentUser: null
    }
  },
  getters: {
    getUserByLoginAndPassword: (state) => (login, password) => {
      return state.users.find(u => u.login === login && u.password === password)
    },
    getUsersCurrentUser: state => state.users.find(u => u.id === state.usersCurrentUser)
  },
  mutations: {
    usersSetCurrentUser (state, user) {
      state.usersCurrentUser = user
    },
    usersAdd (state, user) {
      state.users.push(user)
    },
    usersUpdateUserInfo (state, userData) {
      const user = {
        ...state.users.find(u => u.id === state.usersCurrentUser),
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
    async usersFirebaseLogin (context, data) {
      // All future sign-in request now include tenant ID.
      if (!data.remember) firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      return await firebase.auth().signInWithEmailAndPassword(data.login, data.password)
    },
    async usersFirebaseLoginOut () {
      return await firebase.auth().signOut()
    },
    usersAuthCheck ({ commit }) {
      const user = firebase.auth().currentUser
      if (user) {
        commit('usersSetCurrentUser', user.uid)
      } else {
        commit('usersSetCurrentUser', null)
      }
    },
    usersFetch ({ commit }) {
      const query = firebase.database().ref('users').orderByKey()
      query.once('value')
        .then(function (snapshot) {
          snapshot.forEach(function (childSnapshot) {
            // key will be "ada" the first time and "alan" the second time
            // var key = childSnapshot.key;
            // childData will be the actual contents of the child
            const childData = childSnapshot.val()
            commit('usersAdd', { ...childData, id: childSnapshot.key })
          })
        })
    },
    usersUpdateUserInfo ({ commit, getters }, userData) {
      const user = {
        ...getters.getUsersCurrentUser,
        ...userData
      }
      firebase
        .database()
        .ref('users/' + user.id)
        .set(user)
        .then(() => {
          commit('usersUpdateUserInfo', userData)
        })
    }
  }
}
