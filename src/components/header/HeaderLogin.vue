<template>
  <div class="header-login">
      <button v-if="!currentUser" @click="showLoginModal" class="header-login__btn button button--accent">Войти</button>
      <div class="header-login__personal" v-else>
          <div class="header-login__username">{{ currentUser | userShortName }}</div>
          <Button
              class="button--logout button--accent-flat"
              @click="logout"
              text
              :loading="loading"
          >
              Выйти
          </Button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderLogin',
  data () {
    return {
      loading: false
    }
  },
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
      this.loading = true
      this.$store.dispatch('usersLoginOutExecute')
        .then(() => {
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
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

</style>
