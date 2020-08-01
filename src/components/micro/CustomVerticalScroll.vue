<template>
    <vuescroll
            class="channels__wrap"
            :ops="ops"
    >
        <slot />
    </vuescroll>
</template>

<script>
export default {
  name: 'CustomVerticalScroll',
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
