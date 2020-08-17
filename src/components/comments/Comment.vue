<template>
  <li
    :style="'animation-delay: 0.' + commentIndex + 's'"
    class="comment comments-list__item"
    :id="comment.comment_id"
  >
    <div
      class="comment__delete"
      v-if="comment.user_id === currentUserId"
      @click="deleteComment(comment.comment_id)"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.929124 15.0711C0.538599 14.6806 0.538599 14.0474 0.929124 13.6569L13.657 0.929001C14.0476 0.538478 14.6807 0.538477 15.0713 0.929001C15.4618 1.31953 15.4618 1.95269 15.0713 2.34321L2.34334 15.0711C1.95281 15.4617 1.31965 15.4617 0.929124 15.0711Z"
          fill="#E5261E"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.0713 15.0711C14.6807 15.4617 14.0476 15.4617 13.657 15.0711L0.929124 2.34321C0.5386 1.95269 0.538599 1.31953 0.929124 0.929001C1.31965 0.538477 1.95281 0.538478 2.34334 0.929001L15.0713 13.6569C15.4618 14.0474 15.4618 14.6806 15.0713 15.0711Z"
          fill="#E5261E"
        ></path>
      </svg>
    </div>
    <div class="comment__author">
      {{ getUserNameById(comment.user_id) }}
    </div>
    <div class="comment__txt">{{ comment.text }}</div>
  </li>
</template>
<script>
import firebase from 'firebase/app'

export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object
    },
    film: {
      type: Object
    },
    commentIndex: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  computed: {
    currentUserId () {
      return this.$store.getters.getUsersCurrentUserId
    }
  },
  methods: {
    deleteComment (id) {
      const db = firebase.firestore()
      const updatedFilm = {
        ...this.film,
        comments: this.film.comments.filter(c => c.comment_id !== id)
      }
      const commentElement = document.getElementById(id)
      commentElement.classList.add('comment--deleted')
      db.collection('films')
        .doc(this.film.film_id)
        .collection('comments')
        .doc(id)
        .delete()
        .then(() => {
          this.$store.commit('filmsUpdateFilm', updatedFilm)
        })
        .catch(e => {
          commentElement.classList.remove('comment--deleted')
          alert(e.message)
        })
    },
    getUserNameById (id) {
      const user = this.$store.getters.getUserById(id)
      return user ? user.name : 'Гость'
    }
  }
}
</script>
<style lang="sass">
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
  .comment__delete:hover
    svg
      path
        fill: lighten($color-accent, 20%)
</style>
