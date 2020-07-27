import firebase from 'firebase'

export default {
  state: {
    films: []
  },
  getters: {
    getFilmsAll: state => state.films,
    getFilmById: state => id => state.films.find(i => i.film_id = id),
  },
  mutations: {
    filmsAdd: (state, film) => {
      state.films.push(film)
    }
  },
  actions: {
    filmsFetch ({ commit }) {
      const db = firebase.firestore()
      db.collection('films').get().then(snapshot => {
        snapshot.forEach(doc => {
          let comments = []
          db
            .collection('films')
            .doc(doc.id)
            .collection('comments')
            .get()
            .then(ss => {
              ss.forEach(commentDoc => {
                comments.push(commentDoc.data())
              })
            })
          commit('filmsAdd', { ...doc.data(), film_id: doc.id, comments })
        })
      })
    },
  }
}
