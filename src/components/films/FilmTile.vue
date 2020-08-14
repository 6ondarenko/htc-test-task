<template>
  <router-link class="film-tile" :tag="tag" :to="to">
    <div
      class="film-tile__img"
      :style="'background-image: url(' + film.img + ')'"
    >
      <div class="film-tile__overlay"></div>
      <FilmDescriptionScroll class="film-tile__desc"
        >{{ film.description }}
      </FilmDescriptionScroll>
    </div>
    <div class="film-tile__text">{{ film.name }}</div>
  </router-link>
</template>
<script>
export default {
  name: "FilmTile",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    film: {
      type: Object
    },
    to: {
      type: Object
    }
  }
};
</script>
<style lang="sass">
.film-tile
  &__text
    font-size: 20px
    line-height: 24px
    font-weight: normal
    height: 48px
    margin-top: 16px
    white-space: normal
  &__img
    cursor: pointer
    overflow: hidden
    -ms-overflow-style: scrollbar
    position: relative
    background-position: center
    background-size: cover
    background-repeat: no-repeat
    border-radius: 8px
    width: 100%
  &__img:hover,
  &__img:active
    .film-tile__overlay, .film-tile__desc
      transform: translateY(0)
  &__overlay
    transition: .2s ease transform
    transform: translateY(100%)
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: $color-dark-grey
    opacity: 0.8
  &__desc
    transition: .2s ease transform
    transform: translateY(100%)
    white-space: normal
    box-sizing: border-box
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    padding: 16px !important
    font-size: 16px
    line-height: 140%
    font-weight: normal
    overflow: auto
    color: #F2F2F2
    user-select: none
</style>
