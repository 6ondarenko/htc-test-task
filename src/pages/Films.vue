<template>
    <div class="page-videos">
        <Header/>
        <NavigationBar class="header__nav"/>
        <Slider
                class="page-videos__slider"
                :items="getFilmsAll"
        >🔥 Новинки</Slider>
        <Categories
                class="page-videos__categories-tile"
                :items="getCategoriesAll"
        >Жанры</Categories>
    </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    getSearch () {
      return this.$store.getters.getSearch
    },
    getFilmsAll () {
      const films = this.$store.getters.getFilmsAll
      if (this.getSearch !== '') {
        const reg = new RegExp(this.getSearch, 'i');
        return films.filter(film => reg.test(film.name))
      }
      return films
    },
    getCategoriesAll () {
      return this.$store.getters.getCategoriesAll
    }
  }
}
</script>

<style lang="sass">
    .page-videos
        box-sizing: content-box
        padding: 0 10px
        margin: 0 auto
        width: 1180px
        &__slider
            margin-top: 32px
        &__categories-tile
            margin-top: 32px

    @media (max-width: 480px)
        .page-videos
            box-sizing: border-box
            margin: 0 0
            padding: 64px 10px 0
            overflow: hidden
            width: 100vw

</style>
