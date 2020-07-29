<template>
  <div class="categories-tile">
      <div class="categories-tile__title">
          <slot />
      </div>
      <div class="categories-tile__wrap">
          <ul class="categories-tile__list">
              <router-link
                  tag="li"
                  class="categories-tile__item category-tile"
                  v-for="(category, k) in items"
                  :key="k"
                  :to="{ name: 'Category', params: { category_id: category.category_id } }"
                  >
                  <div
                      class="category-tile__bg"
                      :style="`background-color: ${category.color_1}; background: linear-gradient(136.27deg, ${category.color_1} 8.44%, ${category.color_2} 91.36%);`"
                  ></div>
                  <div class="category-tile__icon">{{category.icon}}</div>
                  <div class="category-tile__title">{{category.name}}</div>
              </router-link>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
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
            margin: 0 -10px
            overflow: hidden
        &__item
            margin: 0 10px
</style>
