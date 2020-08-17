<template>
  <div class="films-tile" v-if="category && films">
    <Header />
    <NavigationBar class="header__nav" />
    <div class="films-tile__title">{{ category.name }}</div>
    <ul class="films-tile__wrap">
      <FilmTile
        tag="li"
        v-for="film in films"
        :key="film.film_id"
        :film="film"
        :to="{ name: 'Film', params: { film_id: film.film_id } }"
        class="films-tile__item"
      />
      <FilmTile
        tag="li"
        v-for="film in films"
        :key="film.film_id + '_copy'"
        :film="film"
        :to="{ name: 'Film', params: { film_id: film.film_id } }"
        class="films-tile__item"
      />
    </ul>
  </div>
</template>
<script>
import FilmTile from '../components/films/FilmTile'

export default {
  name: 'Category',
  components: {
    FilmTile
  },
  props: ['category_id'],
  computed: {
    getSearch () {
      return this.$store.getters.getSearch
    },
    category () {
      return this.$store.getters.getCategoryById(this.category_id)
    },
    films () {
      const films = this.$store.getters.getFilmsByCategoryId(this.category_id)
      if (this.getSearch !== '') {
        const reg = new RegExp(this.getSearch.toString(), 'i')
        return films.filter(film => reg.test(film.name))
      }
      return films
    }
  }
}
</script>
<style lang="sass">
.films-tile
  box-sizing: content-box
  padding: 0 10px
  margin: 0 auto
  width: 1180px
  &__title
    margin-top: 32px
    height: 28px
    font-size: 24px
    line-height: 28px
    font-weight: 500
  &__wrap
    margin: -20px -10px
    padding-top: 18px
    display: flex
    flex-wrap: wrap
  &__item
    margin: 20px 10px
    width: 280px
    .film-tile__img
      height: 370px
@media (max-width: 480px)
  .films-tile
    box-sizing: border-box
    padding: 64px 10px 0
    width: 100%
    &__wrap
      margin: 0
      display: block
    &__item
      box-sizing: border-box
      margin: 0 0 20px
      width: 100%
      .film-tile__img
        height: 560px
</style>
