<template>
  <div class="comments">
    <div class="comments__wrap">
      <div class="comments__title">
        Комментарии
      </div>
      <CommentsForm
        class="comments__form"
        :film="film"
      />
      <CommentsList
        :comments="comments"
        :film="film"
      />
    </div>
  </div>
</template>
<script>
import CommentsList from './CommentsList'
import CommentsForm from './CommentsForm'

export default {
  name: 'Comments',
  components: {
    CommentsForm,
    CommentsList
  },
  props: {
    comments: {
      type: Array,
      default: () => []
    },
    film: {
      type: Object
    }
  }
}
</script>
<style lang="sass">
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
</style>
