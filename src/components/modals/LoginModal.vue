<template>
    <transition name="fade">
        <div class="login-modal" v-if="active">
            <div class="overlay"></div>
            <div class="login-modal__body">
                <div
                        class="login-modal__close-btn"
                        @click.self="closeModal"
                ></div>
                <div class="login-modal__top">
                    <div class="login-modal__title">Вход</div>
                    <div class="login-modal__field">
                        <TextField
                            single-line
                            v-model="login"
                            placeholder="Логин"
                        />
                    </div>
                    <div class="login-modal__field">
                        <TextField
                                single-line
                                password
                                v-model="password"
                                placeholder="Пароль"
                        />
                    </div>
                    <div class="login-modal__field">
                        <input type="checkbox" class="checkbox" name="remember" id="remember" v-model="remember" />
                        <label class="checkbox-label" for="remember">
                            <div class="checkbox-label__icon">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.18182 6.02273L0.795455 3.63636L0 4.43182L3.18182 7.61364L10 0.795454L9.20455 0L3.18182 6.02273Z" fill="#E5261E" />
                                </svg>
                            </div>
                            <span class="checkbox-label__txt">Запомнить</span>
                        </label>
                    </div>
                </div>
                <div class="login-modal__bottom">
                    <Button
                        @click="loginExecute"
                        class="button--accent"
                        :loading="loading"
                    >
                        Войти
                    </Button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'LoginModal',
  data () {
    return {
      login: '',
      password: '',
      remember: false,
      loading: false
    }
  },
  computed: {
    active () {
      return this.$store.getters.loginModalActive
    }
  },
  methods: {
    closeModal () {
      this.$store.commit('loginModalHide')
    },
    resetFields () {
      this.login = this.password = ''
    },
    loginExecute () {
      this.loading = true
      console.log({ login: this.login, password: this.password, remember: this.remember })
      this.$store.dispatch('usersLoginExecute', { login: this.login, password: this.password, remember: this.remember })
        .then(() => {
          this.resetFields()
          this.closeModal()
          this.loading = false
        })
        .catch((e) => {
          window.alert(e.message)
          this.resetFields()
          this.loading = false
        })
    }
  }
}
</script>

<style lang="sass">
    .overlay
        position: fixed
        top: 0
        right: 0
        bottom: 0
        left: 0
        background-color: $color-dark-grey
        opacity: .6
    .login-modal
        position: fixed
        top: 0
        right: 0
        bottom: 0
        left: 0
        display: flex
        align-items: center
        justify-content: center
        &__close-btn
            cursor: pointer
            position: absolute
            top: 10px
            right: 10px
            width: 32px
            height: 32px
            display: flex
            align-items: center
            &:before
                content: ''
                position: absolute
                transform-origin: center
                height: 32px
                width: 1px
                left: 15px
                background-color: $color-dark-grey
                transform: rotate(45deg)
            &:after
                content: ''
                position: absolute
                transform-origin: center
                height: 32px
                width: 1px
                left: 15px
                background-color: $color-dark-grey
                transform: rotate(135deg)
        &__title
            text-align: center
            font-weight: 500
            font-size: 28px
            line-height: 33px
        &__body
            position: relative
            z-index: 100
            padding: 36px
            background-color: #fff
            height: 394px
            width: 304px
            border-radius: 8px
            display: flex
            flex-direction: column
            align-items: stretch
            justify-content: space-between
        &__bottom
            display: flex
            align-items: center
            justify-content: center
        &__field
            margin-top: 24px
    .checkbox
        display: none
        & + .checkbox-label
            .checkbox-label__icon
                display: flex
                align-items: center
                justify-content: center
                float: left
                margin-right: 8px
                box-sizing: border-box
                border: 1px solid $color-dark-grey
                border-radius: 4px
                height: 16px
                width: 16px
                svg
                    display: none
        &:checked + .checkbox-label
            display: flex
            align-items: center
            .checkbox-label__icon
                svg
                    display: block
    .checkbox-label
        cursor: pointer
        display: flex
        align-items: center
        &__txt
            font-size: 16px

</style>
