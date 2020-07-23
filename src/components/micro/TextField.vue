<template>
    <input
        :type="typeComputed"
        :class="{input: true, 'input--single-line': singleLine}"
        v-model="inputVal"
    />
</template>

<script>
export default {
  name: 'TextField',
  props: {
    value: {
      type: String,
      default: ''
    },
    singleLine: {
      type: Boolean,
      default: false
    },
    password: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeComputed () {
      if (this.password) { return 'password' } else { return 'text' }
    },
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
}
</script>

<style lang="sass">
    .input
        font-family: Rubik, default sans-serif
        box-sizing: border-box
        font-weight: normal
        font-size: 16px
        padding: 6px 0
        &--single-line
            width: 100%
            outline: none
            border: none
            border-bottom: 1px solid $color-dark-grey
</style>
