<template>
  <div class="films-slider">
    <div class="films-slider__title">
      <slot></slot>
    </div>
    <div class="films-slider__controls">
      <div class="films-slider__back" @click="back">
        <svg
          width="14"
          height="24"
          viewBox="0 0 14 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22L2 12L12 2"
            stroke="#E5261E"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div class="films-slider__next" @click="next">
        <svg
          width="14"
          height="24"
          viewBox="0 0 14 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22L2 12L12 2"
            stroke="#E5261E"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
    <div class="films-slider__wrap">
      <ul class="films-slider__list">
        <FilmTile
          v-for="film in items"
          :key="film.film_id"
          class="films-slider__item slide"
          tag="li"
          :film="film"
          :to="{ name: 'Film', params: { film_id: film.film_id } }"
        />
        <FilmTile
          v-for="(film, i) in items"
          :key="film.film_id + i"
          class="films-slider__item slide"
          tag="li"
          :film="film"
          :to="{ name: 'Film', params: { film_id: film.film_id } }"
        />
      </ul>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import FilmTile from '../films/FilmTile'

export default {
  name: 'Slider',
  components: {
    FilmTile
  },
  props: {
    items: {
      type: Array
    }
  },
  data () {
    return {
      sliderLock: false
    }
  },
  methods: {
    back () {
      if (this.sliderLock) return
      this.sliderLock = true
      const sliderWrap = $(this.$el).find('.films-slider__wrap')
      sliderWrap
        .stop(false, false)
        .animate(
          { scrollLeft: sliderWrap.scrollLeft() - (sliderWrap.width() + 20) },
          300,
          () => {
            this.sliderLock = false
          }
        )
    },
    next () {
      if (this.sliderLock) return
      this.sliderLock = true
      const sliderWrap = $(this.$el).find('.films-slider__wrap')
      sliderWrap
        .stop(false, false)
        .animate(
          { scrollLeft: sliderWrap.scrollLeft() + sliderWrap.width() + 20 },
          300,
          () => {
            this.sliderLock = false
          }
        )
    }
  },
  mounted () {
    $(window).on('resize', () => {
      this.sliderLock = true
      $(this.$el)
        .find('.films-slider__wrap')
        .animate({ scrollLeft: 0 }, 300, () => {
          this.sliderLock = false
        })
    })
  },
  beforeDestroy () {
    $(window).off('resize')
  }
}
</script>
<style lang="sass">
.films-slider
  position: relative
  &__controls
    position: absolute
    right: 0
    top: 0
    display: flex
    justify-content: space-between
    width: 60px
  &__back
    cursor: pointer
  &__next
    cursor: pointer
    transform: scale(-1, 1)
  &__title
    height: 28px
    font-size: 24px
    line-height: 28px
    font-weight: 500
  &__wrap
    margin-top: 16px
    height: 434px
    overflow: hidden
    -ms-overflow-style: none
    scrollbar-width: none
  &__wrap::-webkit-scrollbar
    display: none

  &__list
    margin: 0 0 0 -20px
    white-space: nowrap
  .slide
    width: 280px
    margin: 0 0 0 20px
    display: inline-block
    vertical-align: top
    font-size: 0
    .film-tile__img
      height: 370px
@media (max-width: 480px)
  .films-slider__controls
    display: none
  .films-slider__wrap
    overflow-x: auto
</style>
