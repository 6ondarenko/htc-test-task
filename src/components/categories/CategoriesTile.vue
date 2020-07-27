<template>
  <div class="categories-tile">
      <div class="categories-tile__title">
          <slot />
      </div>
      <div class="categories-tile__wrap">
          <ul class="categories-tile__list">
              <li
                  class="categories-tile__item"
                  v-for="(category, k) in items"
                  :key="k"
                  >
                  <div
                      class="categories-tile__item-bg"
                      :style="`background-color: ${category.color_1}; background: linear-gradient(136.27deg, ${category.color_1} 8.44%, ${category.color_2} 91.36%);`"
                  ></div>
                  <div class="categories-tile__item-icon">{{category.icon}}</div>
                  <div class="categories-tile__item-title">{{category.name}}</div>

              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesTile',
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
            position: relative
            cursor: pointer
            margin: 0 10px
            width: 280px
            height: 208px
            border-radius: 6px
            overflow: hidden
        &__item:hover
            .categories-tile__item-bg
                opacity: 1
        &__item-bg
            position: absolute
            top: 0
            right: 0
            bottom: 0
            left: 0
            opacity: 0.8
            box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.15)
        &__item-icon
            position: absolute
            top: 80px
            right: 0
            left: 0
            font-size: 48px
            line-height: 57px
            font-style: normal
            font-weight: normal
            text-align: center
            text-shadow: none
            box-shadow: none
            outline: none
        &__item-title
            position: absolute
            bottom: 24px
            right: 0
            left: 0
            font-size: 20px
            line-height: 24px
            font-weight: normal
            text-align: center
            color: #FFFFFF
</style>
