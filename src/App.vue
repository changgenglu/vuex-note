<template>
  <click-button></click-button>
</template>

<script>
import ClickButton from './components/ClickButton.vue'
export default {
  components: { ClickButton },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
</style>
