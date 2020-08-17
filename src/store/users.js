import firebase from 'firebase'

export default {
  state () {
    return {
      users: [],
      usersCurrentUserId: null
    }
  },
  getters: {
    getUsersCurrentUserId: state => state.usersCurrentUserId,
    getUsersCurrentUser: state =>
      state.users.find(u => u.user_id === state.usersCurrentUserId),
    getUserById: state => id =>
      state.users.find(u => u.user_id.toString() === id.toString())
  },
  mutations: {
    usersSetCurrentUserId (state, id) {
      state.usersCurrentUserId = id
    },
    usersAdd (state, user) {
      state.users.push(user)
    },
    usersUpdateUserInfo (state, userData) {
      const user = {
        ...state.users.find(u => u.user_id === state.usersCurrentUserId),
        ...userData
      }
      state.users = [
        ...state.users.filter(u => u.user_id !== user.user_id),
        user
      ]
    }
  },
  actions: {
    async usersFirebaseLogin (context, data) {
      // All future sign-in request now include tenant ID.
      if (!data.remember)
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      return await firebase
        .auth()
        .signInWithEmailAndPassword(data.login, data.password)
    },
    async usersFirebaseLoginOut () {
      return await firebase.auth().signOut()
    },
    usersFetch ({ commit }) {
      const db = firebase.firestore()
      db.collection('users')
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            commit('usersAdd', { ...doc.data(), user_id: doc.id })
          })
        })
    },
    usersUpdateUserInfo ({ commit, getters }, userData) {
      const user = {
        ...getters.getUsersCurrentUser,
        ...userData
      }
      const db = firebase.firestore()
      db.collection('users')
        .doc(user.user_id)
        .update(user)
        .then(() => {
          commit('usersUpdateUserInfo', userData)
        })
    },
    usersCheckAuth ({ commit }) {
      const currentUser = firebase.auth().currentUser
      if (currentUser) {
        commit('usersSetCurrentUserId', currentUser.uid)
      } else {
        commit('usersSetCurrentUserId', null)
      }
    }
  }
}
