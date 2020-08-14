import firebase from "firebase";

export default {
  state: {
    films: []
  },
  getters: {
    getFilmsAll: state => state.films,
    getFilmById: state => id =>
      state.films.find(i => i.film_id.toString() === id.toString()),
    getFilmsByCategoryId: state => category_id => {
      return state.films.filter(
        film =>
          film.categories.filter(
            category => category.category_id === category_id
          ).length > 0
      );
    }
  },
  mutations: {
    filmsSet: (state, films) => {
      state.films = films;
    },
    filmsUpdateFilm(state, film) {
      let films = state.films.filter(f => f.film_id !== film.film_id);
      state.films = [...films, film];
    }
  },
  actions: {
    filmsFetch({ commit }) {
      let films = [];
      const db = firebase.firestore();
      db.collection("films")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let comments = [];
            let categories = [];
            db.collection("films")
              .doc(doc.id)
              .collection("comments")
              .get()
              .then(ss => {
                ss.forEach(commentDoc => {
                  comments.push({
                    ...commentDoc.data(),
                    comment_id: commentDoc.id
                  });
                });
              });
            db.collection("films")
              .doc(doc.id)
              .collection("categories")
              .get()
              .then(ss => {
                ss.forEach(categoryDoc => {
                  categories.push(categoryDoc.data());
                });
              });
            const film = {
              ...doc.data(),
              film_id: doc.id,
              comments,
              categories
            };
            films.push(film);
          });
        });
      commit("filmsSet", films);
    }
  }
};
