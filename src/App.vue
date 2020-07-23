 <template>
  <div>
    <Header/>
    <router-view/>
    <LoginModal />
  </div>
</template>

<style lang="sass">
    @import '~reset-css/reset.css'
    @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap')
    body
        font-family: Rubik, default sans-serif
    $color-accent: #E5261E
</style>
