<template>
    <div>
        <Header/>
        <NavigationBar class="header__nav"/>
        <div class="channels">
            <perfect-scrollbar
                    class="channels__wrap"
                    :ops="ops"
            >
                <ul class="channels__list">
                    <Channel
                            v-for="channel in channels"
                            :key="channel.channel_id"
                            :channel="channel"
                    />
                    <li
                            class="channels__item channel"
                            v-for="(e,i) in Array(10)"
                            :key="i"
                    >
                        <div class="channel__img"
                             :style="`background-image: url(${require('../../static/img/1ch.png')})`"/>
                        <div class="channel__content">
                            <div class="channel__title">Первый канал ({{i}})</div>
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
            </perfect-scrollbar>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TVPrograms',
  data () {
    return {
      ops: {
        vuescroll: {
          mode: 'native',
          sizeStrategy: 'percent',
          detectResize: true,
          wheelScrollDuration: 200,
          wheelDirectionReverse: false
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          speed: 300,
          easing: 'easeInOutQuad',
          verticalNativeBarPos: 'right'
        },
        rail: {
          background: '#f2f2f2',
          size: '4px',
          specifyBorderRadius: '2px',
          opacity: 1,
          gutterOfEnds: '0',
          gutterOfSide: '0',
          keepShow: false,
          border: '2px solid #f2f2f2'
        },
        bar: {
          background: '#bdbdbd',
          size: '4px',
          showDelay: 0,
          onlyShowBarOnScroll: false,
          keepShow: true,
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: '2px',
          minSize: 0,
          disable: false
        },
        scrollButton: {
          enable: false,
          background: '#f2f2f2',
          opacity: 1,
          step: 180,
          mousedownStep: 30
        }
      }
    }
  },
  computed: {
    channels () {
      return this.$store.getters.getChannelsAll
    }
  }
}
</script>

<style lang="sass">
    .__panel
        scrollbar-width: none
        -ms-overflow-style: none
        &::-webkit-scrollbar
            display: none
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
            scrollbar-width: none
            -ms-overflow-style: none
        &__wrap::-webkit-scrollbar
            display: none
        &__list
            width: 1180px
            margin: -16px 0 0
        &__item
            margin: 16px 0 0
</style>
