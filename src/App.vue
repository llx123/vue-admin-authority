<template>
  <div id="app">
    <p>111</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
  data() {
    return {
      name: 'llx'
    }
  },

}
</script>

<style lang="postcss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  & p {
    color: red
  }
}
</style>
