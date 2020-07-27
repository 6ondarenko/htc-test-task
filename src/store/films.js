import firebase from 'firebase'

export default {
  state: {
    films: []
  },
  getters: {
    getFilmsAll: state => state.films,
    getFilmById: state => id => state.films.find(i => i.film_id.toString() === id.toString()),
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
          const film = { ...doc.data(), film_id: doc.id, comments }
          commit('filmsAdd',  film)
        })
      })
    },
  }
}
