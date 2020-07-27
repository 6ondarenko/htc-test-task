<template>
  <div>
      {{category.name}}
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['category_id'],
  computed: {
    category () {
      return this.$store.getters.getCategoryById(this.category_id)
    }
  }
}
</script>

<style scoped>
</style>
