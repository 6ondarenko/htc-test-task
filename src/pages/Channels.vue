<template>
  <div class="channels-container">
    <Header />
    <NavigationBar class="header__nav" />
    <div class="channels">
      <CustomVerticalScroll class="channels__wrap">
        <ul class="channels__list">
          <Channel
            v-for="channel in channels"
            :key="channel.channel_id"
            :channel="channel"
          />
          <li class="channels__item channel" v-for="i in Array(10)" :key="i">
            <div
              class="channel__img"
              :style="
                `background-image: url(${require('../../static/img/1ch.png')})`
              "
            ></div>
            <div class="channel__content">
              <div class="channel__title">Первый канал ({{ i }})</div>
              <ul class="channel__tv-program tv-program">
                <li class="tv-program__item tv-program__item--active">
                  <span class="tv-program__time">13:00</span
                  ><span class="tv-program__title">Новости (с субтитрами)</span>
                </li>
                <li class="tv-program__item">
                  <span class="tv-program__time">14:00</span
                  ><span class="tv-program__title">Давай поженимся</span>
                </li>
                <li class="tv-program__item">
                  <span class="tv-program__time">15:00</span
                  ><span class="tv-program__title">Другие новости</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </CustomVerticalScroll>
    </div>
  </div>
</template>
<script>
export default {
  name: "TVPrograms",
  computed: {
    channels() {
      return this.$store.getters.getChannelsAll;
    }
  }
};
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
