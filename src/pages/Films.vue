<template>
    <div>
        <Header/>
        <NavigationBar class="header__nav"/>
        <div class="page-videos">
            <Slider
                    class="page-videos__slider"
                    :items="getFilmsAll"
            >🔥 Новинки</Slider>
            <CategoriesTile
                    class="page-videos__categories-tile"
                    :items="getCategoriesAll"
            >Жанры</CategoriesTile>
        </div>
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
        margin: 0 auto
        width: 1180px
        &__slider
            margin-top: 32px
        &__categories-tile
            margin-top: 32px
</style>
