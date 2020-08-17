export default {
  install (Vue) {
    // Header
    Vue.component('Header', () => import('../components/header/Header'))
    Vue.component('NavigationBar', () => import('../components/header/NavigationBar'))
    // Micro
    Vue.component('Button', () => import('../components/micro/Button'))
    Vue.component('TextField', () => import('../components/micro/TextField'))
  }
}
