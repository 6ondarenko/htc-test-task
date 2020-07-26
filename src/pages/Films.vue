<template>
  <div
    class="page-videos"
    v-if="getFilmsAll.length"
  >
    <div class="films-slider page-videos__slider">
      <div class="films-slider__title">🔥 Новинки</div>
      <div class="films-slider__wrap">
        <ul class="films-slider__list">
          <li class="films-slider__item slide" v-for="(film, k) in getFilmsAll" :key="k">
            <div class="slide__img" :style="'background-image: url(' + film.img + ')'">
              <div class="slide__overlay"></div>
              <div class="slide__desc">{{film.description}}</div>
            </div>
            <div class="slide__text">{{film.name}}</div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    getFilmsAll () {
      return this.$store.getters.getFilmsAll
    }
  },
  beforeCreate () {
    this.$store.dispatch('filmsFetch')
      .then(() => {
        console.log(this.getFilmsAll)
      })
  }
}
</script>

<style lang="sass">
  .page-videos
    margin: 0 auto
    width: 1180px
    &__slider
      margin-top: 32px
    .films-slider
      &__title
        height: 28px
        font-size: 24px
        line-height: 28px
        font-weight: 500
      &__wrap
        margin-top: 16px
        height: 444px
        overflow: hidden
        overflow-x: auto
      &__list
        margin: 0 -10px
        white-space: nowrap
  .slide
    margin: 0 10px
    display: inline-block
    vertical-align: top
    width: 280px
    font-size: 0
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
      position: relative
      background-position: center
      background-size: cover
      background-repeat: no-repeat
      border-radius: 8px
      height: 370px
      width: 280px
    &__img:hover
      .slide__overlay, .slide__desc
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
      position: absolute
      top: 0
      right: 0
      bottom: 0
      left: 0
      padding: 16px
      font-size: 16px
      line-height: 140%
      font-weight: normal
      overflow: auto
      color: #F2F2F2
</style>
