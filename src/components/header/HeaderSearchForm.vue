<template>
    <div class="header-searchform">
        <div class="header-searchform__input">
            <TextField single-line placeholder="Поиск..." v-model="search"/>
        </div>
        <Button
            class="button--accent-flat"
            text
        >Найти</Button>
    </div>
</template>

<script>
export default {
  name: 'HeaderSearchform',
  computed: {
    search: {
      get () {
        return this.$store.getters.getSearch
      },
      set (search) {
        this.$store.commit('searchSet', search)
      }
    }
  }
}
</script>

<style lang="sass">
    .header-searchform
        display: flex
        align-items: center
        justify-content: flex-start
    .header-searchform
        &__input
            width: 320px
</style>
