<template>
  <div class="categories-tile">
    <div class="categories-tile__title">
      <slot />
    </div>
    <div class="categories-tile__wrap">
      <ul class="categories-tile__list">
        <CategoryTile
          tag="li"
          class="categories-tile__item category-tile"
          v-for="(category, k) in items"
          :key="k"
          :to="{
            name: 'Category',
            params: { category_id: category.category_id }
          }"
          :category="category"
        />
      </ul>
    </div>
  </div>
</template>
<script>
import CategoryTile from './CategoryTile'
export default {
  name: 'Categories',
  components: {
    CategoryTile
  },
  props: {
    items: {
      type: Array
    }
  }
}
</script>
<style lang="sass">
.categories-tile
  overflow: hidden
  &__title
    height: 28px
    font-size: 24px
    line-height: 28px
    font-weight: 500
  &__wrap
    margin-top: 16px
    overflow: hidden
    -ms-overflow-style: none
    scrollbar-width: none
  &__list
    display: flex
    flex-wrap: wrap
    margin: 0 -10px
    overflow: hidden
  &__item
    margin: 0 10px
    width: 280px
    height: 208px
@media (max-width: 480px)
  .categories-tile
    overflow: hidden
    &__title
      height: 28px
      font-size: 24px
      line-height: 28px
      font-weight: 500
    &__wrap
      margin-top: 16px
      overflow: hidden
      -ms-overflow-style: none
      scrollbar-width: none
    &__list
      display: flex
      flex-wrap: wrap
      margin: 0 -5px
      overflow: hidden
    &__item
      box-sizing: border-box
      margin: 0 5px 10px
      width: calc(50% - 10px)
      height: 208px
</style>
