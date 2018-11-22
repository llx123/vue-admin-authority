<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <a style="display: block; line-height: 50px; cursor: pointer; "
      @click="changecollapse">{{ isCollapse?'展开':'收起' }}</a>
    <el-menu 
      class="el-menu-vertical-demo"
      default-active="1"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from '@/components/SidebarItem'

export default {
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapGetters([
      'routes'
    ])
  },
  components: { SidebarItem },
  mounted() {
    console.log(this.routes)
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changecollapse() {
      this.isCollapse = !this.isCollapse
    }
  },
  watch: {
    isCollapse: {
      handler: function (val, oldVal) { 
        this.$emit('showBar',val); // watch 伸缩展开，通知父组件执行相关操作
      },
      immediate: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.el-menu--collapse {
  height: 100%;
}
</style>
