<template>
  <div :class="{openBar: !isOpen, closeBar: isOpen, elLayout: true}">
    <side-bar @showBar="showBar"/>
    <div class="main-content">
      <navbar />
      <content-main />
    </div>
  </div>
</template>

<script>
import { Navbar, ContentMain, SideBar } from './components'
export default {
  data() {
    return {
      isOpen: true
    }
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
    bottom: 0;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    transition: width .28s;
  }
  & .main-content {
    transition: margin-left .28s;
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
