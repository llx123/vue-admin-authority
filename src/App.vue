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
body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  margin-top: -8px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  & .elLayout {
    display: flex;
    flex-direction: row;
    & .menu-container {
      & .el-scrollbar {
        overflow-x: hidden;
        flex: 1 1;
        & .el-scrollbar__wrap {
          overflow-x: hidden !important;
          & .el-scrollbar__view {
            height: calc(100vh - 120px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }
        & .el-scrollbar__bar.is-horizontal {
          & .el-scrollbar__thumb {
            display: none;
          }
        }
      }
    }
    & .main-content {
      & .app-main {        
        background-color: #f0f2f5;
        & .main-scroll.el-scrollbar {
          height: 100%;
          & > .el-scrollbar__wrap {
            /* overflow-x: hidden; */
            & > .el-scrollbar__view {
              height: calc(100vh - 72px);
              padding: 20px 20px 0;
              display: flex;
              flex-direction: column;
              & .el-dashboard {
                flex: 1;
                & > div {
                  & > div.el-col {
                    margin-bottom: 20px;
                  }
                }
              }
            }
          }
        }
        & .card-scroll.el-scrollbar {
          height: 100%;
          & >.el-scrollbar__wrap {
            overflow-x: hidden;
            & > .el-scrollbar__view {
              height: 100%;
              padding: 0;
            }
          }
        }
      }
    }
  }
  & .openBar {
    & ul {
      text-align: left;
    }
  }
}
</style>
