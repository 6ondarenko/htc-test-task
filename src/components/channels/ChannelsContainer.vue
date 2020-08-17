<template>
  <div class="channels-container">
    <Header />
    <NavigationBar class="header__nav" />
    <div class="channels">
      <CustomVerticalScroll class="channels__wrap">
        <ul class="channels__list">
          <slot/>
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
<style scoped>
</style>
