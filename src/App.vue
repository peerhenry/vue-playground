<template lang="pug">
#app
  .nav(:style="navStyle")
    router-link(v-for="route in routes" :key="route.name" :to="route.path") {{route.name}}
  router-view
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import { routes } from '@/router/index.ts'

export default {
  name: 'App',
  components: { HelloWorld },
  data() {
    return {
      routes,
    }
  },
  computed: {
    navStyle() {
      return {
        'grid-template-columns': `repeat(${routes.length}, 1fr)`,
      }
    },
  },
}
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
