<template>
  <div class="scrollbar-wrapper el-layout-sider"
    :style="!opened ? {flex: '0 0 200px', maxwidth: '200px', minwidth: '200px', width: '200px'} :
     {flex: '0 0 60px', maxwidth: '60px', minwidth: '60px', width: '60px'}">    
    <div class="brand-title"
      @click="changeCollapse">{{ !opened?'Vue-Admin':'Admin' }}</div>
    <div class="menu-container">
      <el-scrollbar>
        <el-menu 
          :collapse="opened"
          :default-active="$route.path"
          @open="handleOpen"
          @close="handleClose"
          :background-color="themeType?'#545c64':'#fff'"
          text-color="#909399"
          :active-text-color="themeType?'#fff':'#545c64'"
          class="el-menu-vertical-demo"
          >
            <sidebar-item v-for="route in routes" :key="route.path" :item="route" :path="route.path"/>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="switch-theme">      
      <el-switch
        v-model="theme"
        @change="changeTheme"
        active-text="Switch Theme">
      </el-switch>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from '@/components/SidebarItem'

export default {
  data() {
    return {
      theme: true
    }
  },
  computed: {
    ...mapGetters([
      'routes','opened', 'themeType'
    ])
  },
  components: { SidebarItem },
  mounted() {
    
  },
  methods: {
    handleOpen() {
      // console.log(key, keyPath);
    },
    handleClose() {
      // console.log(key, keyPath);
    },
    changeCollapse() {
      this.$store.dispatch('toggleSideBar')
    },
    changeTheme() {
      this.$store.dispatch('toggleTheme')
    }
  },
  watch: {
    opened: {
      handler: function (val) {
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
