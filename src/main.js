import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import components from '@/plugins/components'
import filters from '@/plugins/filters'
import store from '@/store/index'
import firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/database'
// import "firebase/firestore"

const firebaseConfig = {
  apiKey: 'AIzaSyAll4Ahy2QLFymwMuPKsCFkrWXcEjJA1jI',
  authDomain: 'test-task-fc8f7.firebaseapp.com',
  databaseURL: 'https://test-task-fc8f7.firebaseio.com',
  projectId: 'test-task-fc8f7',
  storageBucket: 'test-task-fc8f7.appspot.com'
  // messagingSenderId: 'sender-id',
  // appId: 'app-id',
  // measurementId: 'G-measurement-id'
}
firebase.initializeApp(firebaseConfig)

Vue.use(Vuex)
Vue.use(components)
Vue.use(filters)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  beforeCreate () {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        store.commit('usersSetCurrentUser', user.uid)
      } else {
        store.commit('usersSetCurrentUser', null)
      }
    })
    store.dispatch('usersFetch')
  }
}).$mount('#app')
