<template>
  <div class="film-page" v-if="film">
    <Header />
    <div class="film-info">
      <router-link
        tag="div"
        :to="{ name: 'Films' }"
        class="go-back film-info__go-back"
      >
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
      </router-link>
      <div class="film-info__wrap">
        <div
          class="film-info__img"
          :style="`background-image: url(${film.img})`"
        ></div>
        <div class="film-info__info">
          <div class="film-info__top">
            <div class="film-info__row">
              <div class="film-info__left">
                Название:
              </div>
              <div class="film-info__right">
                <strong>{{ film.name }}</strong>
              </div>
            </div>
            <div class="film-info__row">
              <div class="film-info__left">
                Страна:
              </div>
              <div class="film-info__right">{{ film.country }}</div>
            </div>
            <div class="film-info__row">
              <div class="film-info__left">
                Жанр:
              </div>
              <div class="film-info__right">{{ linkedCategoriesString }}</div>
            </div>
          </div>
          <div class="film-info__bottom">{{ film.description }}</div>
        </div>
      </div>
    </div>
    <Comments
      :comments="filmCommentsDesc"
      :film="film"
    />
  </div>
</template>
<script>
import Comments from '../components/comments/Comments'

export default {
  name: 'Film',
  components: {
    Comments
  },
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
    },
    filmCommentsDesc () {
      const compare = (a, b) => {
        if (a.timestamp > b.timestamp) {
          return -1
        }
        if (a.timestamp < b.timestamp) {
          return 1
        }
        return 0
      }
      const comments = this.film.comments
      return comments.sort(compare)
    },
    currentUserId () {
      return this.$store.getters.getUsersCurrentUserId
    }
  }
}
</script>
<style lang="sass">
.film-page
  position: relative
  box-sizing: content-box
  padding: 0 10px
  margin: 0 auto
  width: 1180px

.film-info
  position: relative
  display: block
  padding-top: 44px
  &__go-back
    cursor: pointer
    position: absolute
    top: 54px
    left: 0
  &__go-back:active
    svg
      path
        stroke: lighten($color-accent, 20%)
  &__wrap
    display: flex
    align-items: flex-start
  &__img
    margin-left: 115px
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
    margin-top: 0
    margin-left: 115px
  &__top
    margin: 0
  &__row
    display: flex
    margin: 0 0 16px
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
    margin-top: 24px
    width: 580px
    font-weight: normal
    font-size: 16px
    line-height: 140%
@media (max-width: 480px)
  .film-page
    box-sizing: border-box
    width: 100%
    padding-top: 64px
  .film-info
    &__go-back
      position: absolute
      top: 54px
      left: 0
    &__wrap
      box-sizing: border-box
      display: block
      width: 100%
    &__img
      margin-left: auto
      right: 0
    &__info
      margin: 0
      padding-top: 24px
      width: 100%
    &__top
      margin: 0
    &__bottom
      width: 100%
@media (hover: hover)
  .film-info__go-back:hover
    svg
      path
        stroke: lighten($color-accent, 20%)
</style>
