<template>
    <vuescroll
            v-if="renderComponent"
            ref="vuescroll"
            :ops="globalScrollbarOps"
            :key="componentKey"
    >
        <slot/>
    </vuescroll>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CustomVerticalScroll',
  data () {
    return {
      renderComponent: true,
      componentKey: 0
    }
  },
  computed: {
    ...mapGetters(['globalScrollbarY', 'globalScrollbar']),
    globalScrollbarOps () {
      return {
        vuescroll: {
          mode: 'native',
          sizeStrategy: 'percent',
          detectResize: true,
          wheelScrollDuration: 200,
          wheelDirectionReverse: false,
          pushLoad: {
            enable: false
          }
        },
        scrollPanel: {
          initialScrollY: this.globalScrollbarY,
          initialScrollX: 0,
          scrollingX: this.globalScrollbar,
          scrollingY: this.globalScrollbar,
          speed: 0,
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
  methods: {
    forceRerender () {
      setTimeout(() => {
        this.componentKey++
        this.$refs.vuescroll.$nextTick().then(() => {
          document.querySelector('.__panel').scrollTop = this.globalScrollbarY
        })
      }, 200)
    }
  },
  watch: {
    globalScrollbar () {
      const y = this.$refs.vuescroll.getPosition().scrollTop
      this.$store.commit('globalScrollbarYSet', y)
      this.forceRerender()
    }
  }
}
</script>

<style>
    .__panel {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .__panel::-webkit-scrollbar {
        display: none
    }
</style>
