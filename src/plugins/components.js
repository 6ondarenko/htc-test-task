import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import NavigationBar from '@/components/header/NavigationBar'
import HeaderToolbar from '@/components/header/HeaderToolbar'
import HeaderLogo from '@/components/header/HeaderLogo'
import HeaderSearchForm from '@/components/header/HeaderSearchForm'
import HeaderLogin from '@/components/header/HeaderLogin'
import LoginModal from '@/components/modals/LoginModal'
import Button from '@/components/micro/Button'
import TextField from '@/components/micro/TextField'
import Slider from '@/components/slider/Slider'
import Categories from '@/components/categories/Categories'
import CategoryTile from '@/components/categories/CategoryTile'
import FilmTile from '@/components/films/FilmTile'
import Channel from '@/components/channels/Channel'
import vuescroll from 'vuescroll'

export default {
  install (Vue) {
    Vue.use(vuescroll, {
      name: 'perfect-scrollbar'
    })
    // Header
    Vue.component('Header', Header)
    Vue.component('HeaderToolbar', HeaderToolbar)
    Vue.component('HeaderLogo', HeaderLogo)
    Vue.component('HeaderLogin', HeaderLogin)
    Vue.component('HeaderSearchForm', HeaderSearchForm)
    Vue.component('NavigationBar', NavigationBar)
    // Footer
    Vue.component('Footer', Footer)
    // Micro
    Vue.component('Button', Button)
    Vue.component('TextField', TextField)
    // Modals
    Vue.component('LoginModal', LoginModal)
    // Slider
    Vue.component('Slider', Slider)
    // Categories
    Vue.component('Categories', Categories)
    Vue.component('CategoryTile', CategoryTile)
    // Films
    Vue.component('FilmTile', FilmTile)
    // Channels
    Vue.component('Channel', Channel)
  }
}
