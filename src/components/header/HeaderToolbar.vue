<template>
  <div class="header-toolbar">
    <HeaderLogo class="header-toolbar__logo" />
    <HeaderSearchForm class="header-toolbar__search-form" />
    <HeaderLogin class="header-toolbar__login" />
  </div>
</template>
<script>
import HeaderLogo from './HeaderLogo'
import HeaderSearchForm from './HeaderSearchForm'
import HeaderLogin from './HeaderLogin'

export default {
  name: 'HeaderToolbar',
  components: {
    HeaderLogo,
    HeaderSearchForm,
    HeaderLogin
  }
}
</script>
<style lang="sass">
.header-toolbar
  display: flex
  align-items: flex-start
  justify-content: space-between
</style>
