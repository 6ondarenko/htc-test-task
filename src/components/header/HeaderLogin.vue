<template>
  <div class="header-login">
      <button v-if="!currentUser" @click="showLoginModal" class="header-login__btn button button--accent">Войти</button>
      <div class="header-login__personal" v-else>
          <div class="header-login__username">{{ currentUser | userShortName }}</div>
          <button @click="logout" class="header-login__btn button button--text button--logout">Выйти</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderLogin',
  computed: {
    currentUser () {
      return this.$store.getters.getUsersCurrentUser
    }
  },
  methods: {
    showLoginModal () {
      this.$store.commit('loginModalShow')
    },
    logout () {
      this.$store.dispatch('usersLoginOutExecute')
    }
  }
}
</script>

<style lang="sass">
    .header-login
        &__personal
            display: flex
            align-items: center
        &__username
            font-weight: 500
            font-size: 16px
    .button
        &--accent
            background-color: #E5261E
            color: #fff
        &--logout
            color: #E5261E

</style>
