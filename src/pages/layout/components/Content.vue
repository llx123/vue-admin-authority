<template>
  <section class="app-main">
    <el-scrollbar class="main-scroll">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key"/>
        </keep-alive>
      </transition>
      <Bottom />
    </el-scrollbar>
  </section>
</template>

<script>
import Footer from './Footer'

export default {
  name: 'Content',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  },
  components: {
    Bottom: Footer
  }
}
</script>

<style lang="postcss" scoped>
.app-main {
  min-height: calc(100vh - 84px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>

