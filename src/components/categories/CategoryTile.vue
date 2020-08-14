<template>
  <router-link class="category-tile" :tag="tag" :to="to">
    <div
      class="category-tile__bg"
      :style="
        `background-color: ${category.color_1}; background: linear-gradient(136.27deg, ${category.color_1} 8.44%, ${category.color_2} 91.36%);`
      "
    ></div>
    <div class="category-tile__icon">{{ category.icon }}</div>
    <div class="category-tile__title">{{ category.name }}</div>
  </router-link>
</template>
<script>
export default {
  name: "CategoriesTile",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    category: {
      type: Object
    },
    to: {
      type: Object
    }
  }
};
</script>
<style lang="sass">
.category-tile
  user-select: none
  position: relative
  border-radius: 6px
  overflow: hidden
  cursor: pointer
  &:active
    .category-tile__bg
      opacity: 1
  &__bg
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    opacity: 0.8
    box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.15)
  &__icon
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
  &__title
    position: absolute
    bottom: 24px
    right: 0
    left: 0
    font-size: 20px
    line-height: 24px
    font-weight: normal
    text-align: center
    color: #FFFFFF
@media (hover: hover)
  .category-tile:hover
    .category-tile__bg
      opacity: 1
</style>
