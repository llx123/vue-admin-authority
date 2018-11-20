<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    EL-MENU
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
