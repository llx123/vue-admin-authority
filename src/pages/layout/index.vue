<template>
  <div>
    <side-bar />
    <div class="main-container">
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

    }
  },
  components: {
    Navbar,
    ContentMain,
    SideBar,
  }
}
</script>

<style lang="postcss" scoped>

</style>
