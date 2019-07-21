<template>
<i :style="styles" :class="iconClass">
  <svg class="svg-icon" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</i>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    type: String,
    size: [Number, String],
    color: String,
    className:String
  },
  computed: {
    iconName() {
      return `#icon-${this.type}`
    },
    iconClass() {
      if (this.className) {
        return 'icon ' + this.className
      } else {
        return 'icon'
      }
    },
    styles() {
      let style = {}
      if (this.size) {
        style['font-size'] = `${this.size}px`
      }
      if (this.color) {
        style.color = this.color
      }
      return style
    },
  },
}
</script>
<style scoped>
.icon{
  display: inline-block;
  line-height: 0;
}
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
  vertical-align: middle;
}
</style>
