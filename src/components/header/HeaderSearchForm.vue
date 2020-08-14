<template>
  <div class="header-searchform">
    <div class="header-searchform__input">
      <TextField single-line placeholder="Поиск..." v-model="search" />
    </div>
    <Button class="header-searchform__btn button--accent-flat" text
      >Найти
    </Button>
    <div class="header-searchform__btn-mob">
      <svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderSearchform",
  computed: {
    search: {
      get() {
        return this.$store.getters.getSearch;
      },
      set(search) {
        this.$store.commit("searchSet", search);
      }
    }
  }
};
</script>
<style lang="sass">
.header-searchform
  position: relative
  display: flex
  align-items: center
  justify-content: flex-start
  &__input
    width: 320px
  &__btn
    display: block
  &__btn-mob
    position: absolute
    right: 10px
    width: 24px
    height: 24px
    display: none
    svg
      fill: $color-dark-grey
  &__btn-mob:active
    svg
      fill: $color-accent

@media (max-width: 480px)
  .header-searchform
    &__input
      box-sizing: border-box
      margin: 0 10px
      width: 100%
    &__btn
      display: none
    &__btn-mob
      display: block

@media (hover: hover)
  .header-search-form__btn-mob:hover
    svg
      fill: $color-accent
</style>
