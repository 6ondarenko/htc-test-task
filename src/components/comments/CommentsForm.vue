<template>
  <form
    class="comments-form"
    v-if="currentUserId"
    @submit.prevent
  >
    <div class="comments-form__wrap">
      <textarea
        class="comments-form__textarea"
        placeholder="Введите комментарий..."
        v-model="commentText"
        @keydown.ctrl.enter="saveComment"
      ></textarea>
      <Button
        @click="saveComment"
        class="button--accent comments-form__button"
        type="submit"
      >Опубликовать
      </Button>
    </div>
  </form>
</template>
<script>
import firebase from 'firebase/app'

export default {
  name: 'CommentsForm',
  data () {
    return {
      commentText: ''
    }
  },
  props: {
    film: {
      type: Object
    }
  },
  computed: {
    currentUserId () {
      return this.$store.getters.getUsersCurrentUserId
    }
  },
  methods: {
    saveComment () {
      if (!this.commentText) return
      let comment = {
        user_id: this.currentUserId,
        text: this.commentText,
        timestamp: Date.now()
      }
      const db = firebase.firestore()
      db.collection('films')
        .doc(this.film.film_id)
        .collection('comments')
        .add(comment)
        .then(docRef => {
          comment.comment_id = docRef.id
          const updatedFilm = {
            ...this.film,
            comments: [...this.film.comments, comment]
          }
          this.$store.commit('filmsUpdateFilm', updatedFilm)
          this.commentText = ''
        })
        .catch(e => {
          alert(e.message)
        })
    }
  }
}
</script>
<style lang="sass">
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
    font-family: Rubik, default sans-serif
    font-weight: normal
    font-size: 16px
    line-height: 19px
  &__button
    position: absolute !important
    width: 174px
    top: 0
    right: -190px
@media (max-width: 480px)
  .comments-form
    &__wrap
      margin: 0
      width: 100%

    &__button
      position: relative !important
      width: 174px
      margin-top: 16px
      left: 0
</style>
