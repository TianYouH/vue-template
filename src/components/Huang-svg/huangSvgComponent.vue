<template>
    <svg class="huang-svg" aria-hidden="true" :style="[sizeStyle,colorStyle]">
        <use :xlink:href="iconName"></use>
    </svg>
</template>
<script>
export default {
  name: 'huang-svg',
  data () {
    return {
      sizeStyle: {
        width: this.size,
        height: this.size
      },
      colorStyle: {
        color: this.color
      }
    }
  },
  props: {
    iconClass: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 10
    },
    color: {
      type: String
    }
  },
  computed: {
    iconName () {
      return `#${this.iconClass}`
    }
  }
}
</script>
<style scoped>
.huang-svg {
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
