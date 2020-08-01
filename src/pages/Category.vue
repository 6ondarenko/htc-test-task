<template>
    <div>
        <Header/>
        <NavigationBar class="header__nav"/>
        <div class="films-tile" v-if="category && films">
            <div class="films-tile__title">{{category.name}}</div>
            <ul class="films-tile__wrap">
                <FilmTile
                        tag="li"
                        v-for="film in films"
                        :key="film.film_id"
                        :film="film"
                        :to="{name: 'Film', params: {film_id: film.film_id}}"
                        class="films-tile__item"
                />
                <FilmTile
                        tag="li"
                        v-for="film in films"
                        :key="film.film_id + '_copy'"
                        :film="film"
                        :to="{name: 'Film', params: {film_id: film.film_id}}"
                        class="films-tile__item"
                />
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Category',
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
        const reg = new RegExp(this.getSearch, 'i');
        return films.filter(film => reg.test(film.name))
      }
      return films
    }
  }
}
</script>

<style lang="sass">
    .films-tile
        margin: 32px auto 0
        width: 1180px
        &__title
            height: 28px
            font-size: 24px
            line-height: 28px
            font-weight: 500
        &__wrap
            margin: -4px -10px -20px
            display: flex
            flex-wrap: wrap
        &__item
            margin: 20px 10px
</style>
