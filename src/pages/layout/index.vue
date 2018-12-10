<template>
  <div :class="{openBar: !isOpen, closeBar: isOpen, elLayout: true}">
    <side-bar class="sidebar-container" @showBar="showBar"/>
    <div class="main-content">
      <navbar :name="name"/>
      <content-main />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { Navbar, ContentMain, SideBar } from './components'
export default {
  data() {
    return {
      isOpen: true
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  components: {
    Navbar,
    ContentMain,
    SideBar,
  },
  methods: {
    showBar(b) {
      this.isOpen = b
    }
  }
}
</script>

<style lang="postcss" scoped>
.elLayout {
  & .el-scrollbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & .main-content {
    height: 100vh;
    flex: 1 1;
    width: calc(100% - 200px);
    overflow: hidden;
    box-sizing: border-box;
    padding-top: 72px;
    & .navbar {
      position: fixed;
      top: 0;
      right: 0;
      width: calc(100% - 256px);
      z-index: 9;
      transition: width .2s;
    }
    
  }
}
.openBar {
  & .el-scrollbar {
    width: 200px;
  }  
}
.closeBar {
  & .el-scrollbar {
    width: 64px;
  }  
}
</style>
