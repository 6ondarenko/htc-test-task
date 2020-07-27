import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import HeaderNavigationBar from '@/components/header/HeaderNavigationBar'
import HeaderToolbar from '@/components/header/HeaderToolbar'
import HeaderLogo from '@/components/header/HeaderLogo'
import HeaderSearchForm from '@/components/header/HeaderSearchForm'
import HeaderLogin from '@/components/header/HeaderLogin'
import LoginModal from '@/components/modals/LoginModal'
import Button from '@/components/micro/Button'
import TextField from '@/components/micro/TextField'
import Slider from '@/components/slider/Slider'
import CategoriesTile from '@/components/categories/CategoriesTile'

export default {
  install (Vue) {
    // Header
    Vue.component('Header', Header)
    Vue.component('HeaderToolbar', HeaderToolbar)
    Vue.component('HeaderLogo', HeaderLogo)
    Vue.component('HeaderLogin', HeaderLogin)
    Vue.component('HeaderSearchForm', HeaderSearchForm)
    Vue.component('HeaderNavigationBar', HeaderNavigationBar)
    // Footer
    Vue.component('Footer', Footer)
    // Micro
    Vue.component('Button', Button)
    Vue.component('TextField', TextField)
    // Modals
    Vue.component('LoginModal', LoginModal)
    // Slider
    Vue.component('Slider', Slider)
    // CategoriesTile
    Vue.component('CategoriesTile', CategoriesTile)
  }
}
