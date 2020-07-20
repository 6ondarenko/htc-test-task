import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import components from '@/plugins/components'
import filters from '@/plugins/filters'
import store from '@/store/index'

Vue.use(Vuex)
Vue.use(components)
Vue.use(filters)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
