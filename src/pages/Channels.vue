<template>
    <div>
        <Header/>
        <NavigationBar class="header__nav"/>
        <div class="channels">
            <div class="channels__wrap">
                <ul class="channels__list">
                    <Channel
                            v-for="channel in channels"
                            :key="channel.channel_id"
                            :channel="channel"
                    />
                    <li
                            class="channels__item channel"
                            v-for="i in Array(3)"
                            :key="i"
                    >
                        <div class="channel__img"
                             :style="`background-image: url(${require('../../static/img/1ch.png')})`"/>
                        <div class="channel__content">
                            <div class="channel__title">Первый канал</div>
                            <ul class="channel__tv-program tv-program">
                                <li class="tv-program__item tv-program__item--active">
                                    <span class="tv-program__time">13:00</span><span class="tv-program__title">Новости (с субтитрами)</span>
                                </li>
                                <li class="tv-program__item">
                                    <span class="tv-program__time">14:00</span><span class="tv-program__title">Давай поженимся</span>
                                </li>
                                <li class="tv-program__item">
                                    <span class="tv-program__time">15:00</span><span class="tv-program__title">Другие новости</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TVPrograms',
  computed: {
    channels () {
      return this.$store.getters.getChannelsAll
    }
  }
}
</script>

<style lang="sass">
    .channels
        margin: 0 auto
        padding-top: 27px
        width: 1180px
        &__wrap
            box-sizing: border-box
            width: 100%
            max-height: 696px
            overflow: hidden
        &__list
            margin: -16px 0
        &__item
            margin: 16px 0
</style>
