<template>
  <CustomScroll class="scroll" ref="globalScrollbar">
    <router-view />
    <LoginModal />
    <Footer />
  </CustomScroll>
</template>
<script>
import CustomScroll from './components/scroll/CustomScroll'
import LoginModal from './components/modals/LoginModal'
import Footer from './components/footer/Footer'
export default {
  name: 'App',
  components: {
    CustomScroll,
    LoginModal,
    Footer
  },
  watch: {
    $route () {
      document.querySelector('.__panel').scrollTop = 0
    }
  }
}
</script>
<style lang="sass">
@import '~reset-css/reset.css'
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap')
*
  -webkit-tap-highlight-color: transparent
body
  overflow: hidden
  font-family: Rubik, default sans-serif
  color: $color-dark-grey
.scroll
  position: fixed !important
  top: 0
  left: 0
  right: 0

.modal-show
  overflow: hidden

*::-webkit-scrollbar-track
  border-radius: 4px

*::-webkit-scrollbar
  width: 6px
  height: 6px

*::-webkit-scrollbar-thumb
  border-radius: 4px
  background: $color-accent

*:hover::-webkit-scrollbar-thumb
  background: $color-accent

*
  scrollbar-base-color: $color-accent
  scrollbar-face-color: $color-accent
  /*scrollbar-3dlight-color: #000*/
  /*scrollbar-highlight-color: #000*/
  scrollbar-track-color: #fff
  scrollbar-arrow-color: $color-accent
  scrollbar-shadow-color: $color-accent
/*scrollbar-dark-shadow-color: #000*/
</style>
