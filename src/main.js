import 'core-js/stable'
import 'intersection-observer'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import components from '@/plugins/components'
import filters from '@/plugins/filters'
import store from '@/store/index'
import firebase from 'firebase/app'
import VueObserveVisibility from 'vue-observe-visibility'
import 'firebase/auth'
import 'firebase/firestore'

Vue.use(Vuex)
Vue.use(VueObserveVisibility)
Vue.use(components)
Vue.use(filters)

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

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  beforeCreate () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        store.commit('usersSetCurrentUserId', user.uid)
      } else {
        store.commit('usersSetCurrentUserId', null)
      }
    })
    store.dispatch('usersFetch')
    store.dispatch('filmsFetch')
    store.dispatch('categoriesFetch')
  }
}).$mount('#app')
