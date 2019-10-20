<template lang="pug">
#app
  .nav
    router-link(to="/") Home
    router-link(to="/about") About
    router-link(to="/stars") Stars
  router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
html, body
  margin 0
  padding 0

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

.nav
  margin auto
  max-width 800px
  display grid
  grid-template-columns repeat(3, 1fr)
</style>
