import firebase from 'firebase'

export default {
  state: {
    categories: []
  },
  getters: {
    getCategoriesAll: state => state.categories,
    getCategoryById: state => id => state.categories.find(i => i.category_id = id),
  },
  mutations: {
    categoriesAdd: (state, film) => {
      state.categories.push(film)
    }
  },
  actions: {
    categoriesFetch ({ commit }) {
      const db = firebase.firestore()
      db.collection('categories').get().then(snapshot => {
        snapshot.forEach(doc => {
          commit('categoriesAdd', { ...doc.data(), category_id: doc.id })
        })
      })
    },
  }
}
