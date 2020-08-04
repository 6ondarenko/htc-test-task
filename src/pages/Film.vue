<template>
    <div class="film-page" v-if="film">
        <Header/>
        <div class="film-info">
            <router-link tag="div" :to="{name: 'Films'}" class="go-back film-info__go-back">
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22L2 12L12 2" stroke="#E5261E" stroke-width="3" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            </router-link>
            <div class="film-info__wrap">
                <div class="film-info__img" :style="`background-image: url(${film.img})`"></div>
                <div class="film-info__info">
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
        <div class="comments">
            <div class="comments__wrap">
                <div class="comments__title">
                    Комментарии
                </div>
                <div class="comments-form comments__form" v-if="currentUserId">
                    <div class="comments-form__wrap">
                            <textarea class="comments-form__textarea" placeholder="Введите комментарий..."
                                      v-model="commentText"></textarea>
                        <Button @click="saveComment" class="button--accent comments-form__button">Опубликовать
                        </Button>
                    </div>
                </div>
                <div class="comments-list" v-observe-visibility="{
                    callback: visibilityChanged,
                    intersection: {
                        root: null,
                        rootMargin: '',
                        threshold: 0.5
                    }
                }">
                    <!--<transition-group name="fade" tag="ul" class="comments-list__wrap">--><ul class="comments-list__wrap">
                        <li
                                :style="'animation-delay: 0.' + i + 's'"
                                class="comment comments-list__item"
                                v-for="(comment, i) in filmCommentsDesc"
                                :key="comment.comment_id"
                                :id="comment.comment_id"
                        >
                            <div
                                    class="comment__delete"
                                    v-if="comment.user_id === currentUserId"
                                    @click="deleteComment(comment.comment_id)"
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M0.929124 15.0711C0.538599 14.6806 0.538599 14.0474 0.929124 13.6569L13.657 0.929001C14.0476 0.538478 14.6807 0.538477 15.0713 0.929001C15.4618 1.31953 15.4618 1.95269 15.0713 2.34321L2.34334 15.0711C1.95281 15.4617 1.31965 15.4617 0.929124 15.0711Z"
                                          fill="#E5261E"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M15.0713 15.0711C14.6807 15.4617 14.0476 15.4617 13.657 15.0711L0.929124 2.34321C0.5386 1.95269 0.538599 1.31953 0.929124 0.929001C1.31965 0.538477 1.95281 0.538478 2.34334 0.929001L15.0713 13.6569C15.4618 14.0474 15.4618 14.6806 15.0713 15.0711Z"
                                          fill="#E5261E"/>
                                </svg>
                            </div>
                            <div class="comment__author">{{getUserNameById(comment.user_id)}}</div>
                            <div class="comment__txt">{{comment.text}}</div>
                        </li>
                    <!--</transition-group>--></ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'Film',
  props: ['film_id'],
  data () {
    return {
      commentText: ''
    }
  },
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
  },
  methods: {
    visibilityChanged (isVisible) {
      if (isVisible) {
        const el = document.querySelector('.comments-list')
        el.classList.add('comments-list--animate')
      }
    },
    getUserNameById (id) {
      const user = this.$store.getters.getUserById(id)
      return user ? user.name : 'Гость'
    },
    saveComment () {
      if (!this.commentText) return
      let comment = {
        user_id: this.currentUserId,
        text: this.commentText,
        timestamp: Date.now()
      }
      const db = firebase.firestore()
      db.collection('films').doc(this.film.film_id).collection('comments').add(comment)
        .then((docRef) => {
          comment.comment_id = docRef.id
          const updatedFilm = {
            ...this.film,
            comments: [...this.film.comments, comment]
          }
          this.$store.commit('filmsUpdateFilm', updatedFilm)
          this.commentText = ''
        })
        .catch((e) => {
          alert(e.message)
        })
    },
    deleteComment (id) {
      const db = firebase.firestore()
      const updatedFilm = {
        ...this.film,
        comments: this.film.comments.filter(c => c.comment_id !== id)
      }
      const commentElement = document.getElementById(id)
      commentElement.classList.add('comment--deleted')
      db.collection('films').doc(this.film.film_id).collection('comments').doc(id).delete()
        .then(() => {
          this.$store.commit('filmsUpdateFilm', updatedFilm)
        })
        .catch((e) => {
          commentElement.classList.remove('comment--deleted')
          alert(e.message)
        })
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

    .comments
        &__wrap
            margin-top: 43px

        &__title
            margin-bottom: 24px
            font-style: normal
            font-weight: 500
            font-size: 20px
            line-height: 24px
            text-align: center

        &__form
            margin-bottom: 16px

    .comments-form
        &__title
            height: 24px
            font-weight: 500
            font-size: 20px
            line-height: 24px
            text-align: center

        &__wrap
            position: relative
            margin: 0 auto 0
            width: 780px

        &__textarea::placeholder
            color: $color-accent

        &__textarea
            display: block
            width: 100%
            min-height: 110px
            box-sizing: border-box
            padding: 16px
            resize: none
            border: none
            background-color: #FBDEDD
            border-radius: 8px
            color: $color-accent
            outline: none
            font-family: Rubik
            font-weight: normal
            font-size: 16px
            line-height: 19px

        &__button
            position: absolute !important
            width: 174px
            top: 0
            right: -190px

    .comments-list
        opacity: 0
        transition: .2s ease opacity
        &__item
            position: relative
            margin-bottom: 16px

        &__wrap
            margin: 0 auto 0
            width: 780px
            position: relative
        &--animate
            opacity: 1
            .comment
                animation: comment .2s ease 0s 1

    .comment
        box-sizing: border-box
        padding: 16px
        background-color: #F2F2F2
        border-radius: 8px
        transform: translateX(0)
        opacity: 1
        transition: .2s ease all

        &--deleted
            transform: translateX(-10%)
            opacity: 0

        &__delete
            position: absolute
            top: 0
            right: -32px
            width: 16px
            height: 16px
            cursor: pointer
        &__delete:active
            svg
                path
                    fill: lighten($color-accent, 20%)

        &__author
            font-style: normal
            font-weight: 500
            font-size: 16px
            line-height: 19px

        &__txt
            margin-top: 8px
            font-style: normal
            font-weight: normal
            font-size: 16px
            line-height: 19px

    @keyframes comment
        0%
            opacity: 0
            transform: translateX(100%)
        100%
            opacity: 1
            transform: translateX(0)

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
        .comments-form
            &__wrap
                margin: 0
                width: 100%
            &__button
                position: relative !important
                width: 174px
                margin-top: 16px
                left: 0

        .comments-list
            &__wrap
                margin: 0
                width: 100%

        .comment
            box-sizing: border-box
            padding: 16px
            background-color: #F2F2F2
            border-radius: 8px
            transform: translateY(0)
            opacity: 1
            transition: .2s ease all

            &--deleted
                transform: translateX(-10%)
                opacity: 0

            &__delete
                position: absolute
                top: 10px
                right: 10px
                width: 16px
                height: 16px
                cursor: pointer

            &__author
                font-style: normal
                font-weight: 500
                font-size: 16px
                line-height: 19px

            &__txt
                margin-top: 8px
                font-style: normal
                font-weight: normal
                font-size: 16px
                line-height: 19px

    @media (hover: hover)
        .film-info__go-back:hover
            svg
                path
                    stroke: lighten($color-accent, 20%)
        .comment__delete:hover
            svg
                path
                    fill: lighten($color-accent, 20%)
</style>
