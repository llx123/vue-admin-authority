<template>
  <div id="app">
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

<style lang="postcss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  & .elLayout {
    & .el-scrollbar {
      & .scrollbar-wrapper {
        overflow-x: hidden !important;
        & .el-scrollbar__view {
          height: 100%;
        }
      }
    }
  }
  & .openBar {
    & .main-content{
      margin-left: 192px;
    }
  }
  & .closeBar {
    & .main-content{
      margin-left: 56px;
    }
  }
}
</style>
