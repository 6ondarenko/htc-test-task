import Header from '@/components/header/Header'
import HeaderNavigationBar from '@/components/header/HeaderNavigationBar'
import HeaderToolbar from '@/components/header/HeaderToolbar'
import HeaderLogo from '@/components/header/HeaderLogo'
import HeaderSearchForm from '@/components/header/HeaderSearchForm'
import HeaderLogin from '@/components/header/HeaderLogin'
import LoginModal from '@/components/modals/LoginModal'

export default {
  install (Vue) {
    // Header
    Vue.component('Header', Header)
    Vue.component('HeaderToolbar', HeaderToolbar)
    Vue.component('HeaderLogo', HeaderLogo)
    Vue.component('HeaderLogin', HeaderLogin)
    Vue.component('HeaderSearchForm', HeaderSearchForm)
    Vue.component('HeaderNavigationBar', HeaderNavigationBar)
    // Modals
    Vue.component('LoginModal', LoginModal)
  }
}
