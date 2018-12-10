<template>
  <div class="scrollbar-wrapper el-layout-sider"
    :style="!isCollapse ? {flex: '0 0 200px', maxwidth: '200px', minwidth: '200px', width: '200px'} :
     {flex: '0 0 60px', maxwidth: '60px', minwidth: '60px', width: '60px'}">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <div class="brand-title"
      @click="changecollapse">{{ isCollapse?'展开':'收起' }}</div>
    <div class="menu-container">
      <el-scrollbar>
        <el-menu 
          class="el-menu-vertical-demo"
          :default-active="$route.path"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color="#545c64"
          text-color="#909399"
          active-text-color="#fff"
          >
            <sidebar-item v-for="route in routes" :key="route.path" :item="route" :path="route.path"/>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="switch-theme">
      111111
    </div>
  </div>
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
      this.isCollapse = !this.isCollapse;
      this.$store.dispatch('toggleSideBar')
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
.el-layout-sider {  
  transition: all linear .3s;
}
.brand-title {
  z-index: 1;
  height: 72px;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  box-shadow: 0 1px 9px -3px rgba(0,0,0,.2);
}
.menu-container {
}
.switch-theme {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  overflow: hidden;
}
</style>
