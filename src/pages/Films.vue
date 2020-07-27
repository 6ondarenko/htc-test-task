<template>
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
</template>

<script>
export default {
  name: 'Home',
  computed: {
    getFilmsAll () {
      return this.$store.getters.getFilmsAll
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
