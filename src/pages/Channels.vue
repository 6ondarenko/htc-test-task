<template>
  <ChannelsContainer v-if="channels.length">
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
  </ChannelsContainer>
</template>
<script>
import Channel from '../components/channels/Channel'
import ChannelsContainer from '../components/channels/ChannelsContainer'
export default {
  name: 'TVPrograms',
  components: {
    Channel,
    ChannelsContainer
  },
  computed: {
    channels () {
      return this.$store.getters.getChannelsAll
    }
  },
  beforeCreate () {
    this.$store.dispatch('channelsFetch')
  }
}
</script>
