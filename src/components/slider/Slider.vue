<template>
    <div class="films-slider">
        <div class="films-slider__title">
            <slot></slot>
        </div>
        <div class="films-slider__wrap">
            <ul class="films-slider__list">
                <FilmTile
                        class="films-slider__item slide"
                        tag="li"
                        v-for="film in items"
                        :key="film.film_id"
                        :film="film"
                        :to="{name: 'Film', params: { film_id: film.film_id }}"
                />
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style lang="sass">
    .films-slider
        &__title
            height: 28px
            font-size: 24px
            line-height: 28px
            font-weight: 500

        &__wrap
            margin-top: 16px
            height: 434px
            overflow: hidden
            overflow-x: auto
            -ms-overflow-style: none
            scrollbar-width: none

        &__wrap::-webkit-scrollbar
            display: none

        &__list
            margin: 0 -10px
            white-space: nowrap

        .slide
            margin: 0 10px
            display: inline-block
            vertical-align: top
            font-size: 0
</style>
