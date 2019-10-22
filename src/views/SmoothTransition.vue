<template lang="pug">
div
  h1 Transition
  transition(name="fade" mode="out-in")
    p(v-if="show" key="1") I am mode 1
    p(v-else key="2") I am mode 2
  p
    button(@click="show = !show") toggle
</template>

<script>
export default {
  name: 'SmoothTransition',
  data() {
    return {
      show: true,
    }
  },
}
</script>

<style lang="stylus">
.fade-enter-active, .fade-leave-active
  transition all 0.2s ease

.fade-enter, .fade-leave-to
  transform translateX(10px)
  opacity 0

div
  overflow hidden
</style>
