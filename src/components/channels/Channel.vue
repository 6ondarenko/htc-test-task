<template>
    <li class="channels__item channel">
        <div
            class="channel__img"
            :style="'background-image: url(' + channel.img + ')'"
        ></div>
        <div class="channel__content">
            <div class="channel__title">{{channel.name}}</div>
            <ul class="channel__tv-program tv-program">
                <li
                        class="tv-program__item"
                        v-for="program in programs"
                        :key="program.program_id"
                >
                    <span class="tv-program__time">{{program.time}}</span><span class="tv-program__title">{{program.name}}</span>
                </li>
            </ul>
        </div>
    </li>
</template>

<script>
export default {
  name: 'Channel',
  props: {
    channel: {
      type: Object
    }
  },
  computed: {
    programs () {
      const programs = this.channel.programs.length ? this.channel.programs : []
      const compare = (a, b) => {
        if (a.time < b.time) {
          return -1
        }
        if (a.time > b.time) {
          return 1
        }
        return 0
      }
      return programs.sort(compare)
    }
  }
}
</script>

<style lang="sass">
    .channel
        display: flex
        min-height: 162px
        background-color: #F2F2F2
        border-radius: 8px

        &__img
            background-position: center
            background-repeat: no-repeat
            width: 400px

        &__content
            padding-top: 21px

        &__title
            font-weight: 500
            font-size: 20px
            line-height: 24px
            margin-bottom: 17px

        .tv-program
            position: relative
            display: block
            font-weight: normal
            font-size: 16px
            line-height: 19px

            &__item
                margin-bottom: 12px

            &__item:first-child
                color: $color-accent

            &__time
                margin-right: 16px
    @media (max-width: 480px)
        .channel
            display: block
            &__img
                height: 162px
                width: 100%
            &__content
                padding: 21px 10px 10px
</style>
