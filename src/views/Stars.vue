<template lang="pug">
div
  h1 Stars
  svg(viewBox="-110 -110 220 220" width="220" height="220" :style="svgStyle")
    path(:d="points")
  // div
    h4 path:
    div {{ `&lt;path d="${points}" /&gt;` }}
  div
    label innerRadiusMultiplier:
    input(type="range" min="0.1" max="1" step="0.01" v-model="innerRadiusMultiplier")
  div
    label nr of points:
    input(type="range" min="3" max="20" step="1" v-model="nrOfPoints")
  div
    label Star color:
    input(v-model="starColor")
  div
    label Background color:
    input(v-model="backgroundColor")
</template>

<script>
export default {
  data() {
    return {
      innerRadiusMultiplier: 0.6,
      nrOfPoints: 5,
      divider: 2,
      starColor: 'yellow',
      backgroundColor: 'black',
    }
  },
  computed: {
    points() {
      let n = 0
      const coords = []
      while (n < this.vertexCount) {
        const multiplier =
          n % this.divider === 0 ? 1 : this.innerRadiusMultiplier
        coords.push(multiplier * this.getX(n))
        coords.push(multiplier * this.getY(n))
        n++
      }
      return `M${coords}Z`
    },
    vertexCount() {
      return this.nrOfPoints * 2
    },
    svgStyle() {
      return {
        background: this.backgroundColor,
        fill: this.starColor,
        stroke: this.starColor,
      }
    },
  },
  methods: {
    getX(n) {
      return -100 * Math.sin((2 * Math.PI * n) / this.vertexCount)
    },
    getY(n) {
      return -100 * Math.cos((2 * Math.PI * n) / this.vertexCount)
    },
  },
}
</script>

<style scoped lang="stylus">
div
  overflow hidden

svg
  display block
  margin auto
  width 600px
  height 600px
  margin-bottom 10px

label
  margin-right 10px
</style>
