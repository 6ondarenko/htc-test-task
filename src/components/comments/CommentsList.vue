<template>
  <div
    class="comments-list"
    v-observe-visibility="{
      callback: visibilityChanged,
      intersection: {
        root: null,
        rootMargin: '',
        threshold: 0.5
      }
    }"
  >
    <ul class="comments-list__wrap">
      <Comment
        v-for="(comment, i) in comments"
        :comment="comment"
        :comment-index="i"
        :key="comment.comment_id"
        :film="film"
      />
    </ul>
  </div>
</template>
<script>
import Comment from './Comment'
export default {
  name: 'CommentsList',
  components: { Comment },
  props: {
    comments: {
      type: Array,
      default: () => []
    },
    film: {
      type: Object
    }
  },
  methods: {
    visibilityChanged (isVisible) {
      if (isVisible) {
        const el = document.querySelector('.comments-list')
        el.classList.add('comments-list--animate')
      }
    }
  }
}
</script>
<style lang="sass">
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
@media (max-width: 480px)
  .comments-list
    &__wrap
      margin: 0
      width: 100%
</style>
