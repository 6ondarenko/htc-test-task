<template>
  <div>
      {{film.name}}
  </div>
</template>

<script>
export default {
  name: 'Film',
  props: ['film_id'],
  computed: {
    film () {
      return this.$store.getters.getFilmById(this.film_id)
    }
  }
}
</script>

<style scoped>
</style>
