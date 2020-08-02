<template>
    <div class="header-login">
        <button v-if="!currentUser" @click="showLoginModal" class="header-login__btn button button--accent">Войти
        </button>
        <div class="header-login__user-info user-info" v-else>
            <div
                class="header-login__username user-info__field"
                :class="{'user-info__field--edit': edit}"
            >
                <span
                    class="user-info__field-txt"
                    @click="editName"
                >{{userName}}</span>
                <div
                    class="user-info__field-input"
                >
                    <TextField
                        v-model="userName"
                        single-line
                        @update="changeName"
                    />
                </div>
            </div>
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
      loading: false,
      edit: false,
      uid: null
    }
  },
  computed: {
    currentUser () {
      return this.$store.getters.getUsersCurrentUser
    },
    userName: {
      get () {
        return this.currentUser.name
      },
      set (name) {
        const userData = { name }
        this.$store.dispatch('usersUpdateUserInfo', userData)
      }
    }
  },
  methods: {
    editName (e) {
      const textWidth = e.target.offsetWidth + 'px'
      const parent = e.target.parentNode
      const input = parent.querySelector('input')
      this.edit = true
      setTimeout(() => {
        input.focus()
        input.style.width = textWidth
      }, 0)
    },
    changeName () {
      this.edit = false
    },
    showLoginModal () {
      this.$store.commit('loginModalShow')
    },
    logout () {
      this.loading = true
      this.$store.dispatch('usersFirebaseLoginOut')
        .then(() => {
          this.$store.commit('usersSetCurrentUserId', null)
          this.loading = false
        })
        .catch((error) => {
          alert(error.message)
          this.loading = false
        })
    }
  }
}
</script>

<style lang="sass">
    .header-login
        &__user-info
            display: flex
            align-items: center

        &__username
            font-weight: 500
            font-size: 16px
    .user-info
        &__field--edit
            .user-info__field-txt
                display: none
            .user-info__field-input
                display: block
        &__field-txt
            display: inline
        &__field-input
            display: none

    @media (max-width: 480px)
        .header-login
            float: right

</style>
