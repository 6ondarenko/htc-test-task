<template>
    <div>
        <Header/>
        <div class="film-page" v-if="film">
            <div class="film-info">
                <router-link tag="div" :to="{name: 'Films'}" class="go-back film-info__go-back">
                    <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22L2 12L12 2" stroke="#E5261E" stroke-width="3" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </router-link>
                <div class="film-info__wrap">
                    <div class="film-info__img" :style="`background-image: url(${film.img})`"></div>
                    <div class="film-info__info film-info">
                        <div class="film-info__top">
                            <div class="film-info__row">
                                <div class="film-info__left">
                                    Название:
                                </div>
                                <div class="film-info__right"><strong>{{film.name}}</strong></div>
                            </div>
                            <div class="film-info__row">
                                <div class="film-info__left">
                                    Страна:
                                </div>
                                <div class="film-info__right">{{film.country}}</div>
                            </div>
                            <div class="film-info__row">
                                <div class="film-info__left">
                                    Жанр:
                                </div>
                                <div class="film-info__right">{{linkedCategoriesString}}</div>
                            </div>
                        </div>
                        <div class="film-info__bottom">{{film.description}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Film',
  props: ['film_id'],
  computed: {
    film () {
      return this.$store.getters.getFilmById(this.film_id)
    },
    linkedCategories () {
      const categories = []
      if (this.film) {
        this.film.categories.forEach(c => {
          const category = this.$store.getters.getCategoryById(c.category_id)
          if (category) categories.push(category)
        })
      }
      return categories
    },
    linkedCategoriesString () {
      return this.linkedCategories.map(category => category.name).join(', ')
    }
  }
}
</script>

<style lang="sass">
    .film-page
        position: relative
        margin: 44px auto 0
        width: 1180px
        .go-back
            cursor: pointer
            width: 14px
            height: 24px
        .film-info
            &__go-back
                position: absolute
                top: 10px
                left: 0
            &__wrap
                display: flex
            &__img
                margin-left: 115px
                cursor: pointer
                overflow: hidden
                -ms-overflow-style: scrollbar
                position: relative
                background-position: center
                background-size: cover
                background-repeat: no-repeat
                border-radius: 8px
                height: 370px
                width: 280px
            &__info
                margin-left: 115px
    .film-info
        display: block
        &__top
            margin: -8px 0
        &__row
            display: flex
            margin: 8px 0
            height: 24px
            text-align: left
        &__left
            display: flex
            align-items: flex-end
            width: 80px
            font-weight: normal
            font-size: 16px
            vertical-align: bottom
        &__right
            display: flex
            align-items: flex-end
            margin-left: 24px
            font-weight: normal
            font-size: 20px
            vertical-align: bottom
            strong
                font-weight: 500
        &__bottom
            margin-top: 23px
            width: 580px
            font-weight: normal
            font-size: 16px
            line-height: 140%
</style>
