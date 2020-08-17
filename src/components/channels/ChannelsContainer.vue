<template>
  <div class="channels-container">
    <Header />
    <NavigationBar class="header__nav" />
    <div class="channels">
      <CustomVerticalScroll class="channels__wrap">
        <ul class="channels__list">
          <slot />
        </ul>
      </CustomVerticalScroll>
    </div>
  </div>
</template>
<script>
import CustomVerticalScroll from '../scroll/CustomVerticalScroll'

export default {
  name: 'ChannelsContainer',
  components: {
    CustomVerticalScroll
  }
}
</script>
<style lang="sass">
.channels-container
  box-sizing: border-box !important
  width: 100%
  padding: 0 10px
.channels
  position: relative
  margin: 0 auto
  padding-top: 27px
  width: 1180px
  height: 696px
  &__wrap
    position: relative
    padding-right: 16px !important
    width: 100%
    overflow: hidden
  &__list
    width: 1180px
    margin: -16px 0 0
  &__item
    margin: 16px 0 0
@media (max-width: 480px)
  .channels-container
    padding: 64px 10px 0
  .channels
    width: 100%
    height: 100%
    &__wrap
      box-sizing: border-box
      padding-right: 0 !important
    &__list
      width: 100%
</style>
