import firebase from 'firebase'

export default {
  state: {
    channels: []
  },
  getters: {
    getChannelsAll: state => state.channels,
    getChannelById: state => id => state.channels.find(i => i.film_id.toString() === id.toString()),
  },
  mutations: {
    channelsSet: (state, channels) => {
      state.channels = channels
    },
    channelsUpdateChannel (state, film) {
      let channels = state.channels.filter(f => f.film_id !== film.film_id)
      state.channels = [...channels, film]
    }
  },
  actions: {
    channelsFetch ({ commit }) {
      const db = firebase.firestore()
      let channels = []
      db.collection('channels').get().then(snapshot => {
        snapshot.forEach(doc => {
          let programs = []
          db
            .collection('channels')
            .doc(doc.id)
            .collection('programs')
            .get()
            .then(ss => {
              ss.forEach(programDoc => {
                programs.push({ ...programDoc.data(), program_id: programDoc.id })
              })
            })
          const film = { ...doc.data(), channel_id: doc.id, programs }
          channels.push(film)
        })
      })
      commit('channelsSet',  channels)
    }
  }
}
