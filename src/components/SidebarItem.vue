<template>
  <div v-if="item.show || item.children">
    <!-- 带子菜单 -->
    <template v-if="item.children">      
      <!-- 不展示子菜单 -->
      <template v-for="(p,i) in item.children">
        <el-menu-item :key="i"
          :index="path===''?p.path:path"
          v-if="p.show && item.meta && item.meta.single"
          @click="doRouter(path===''?p.path:path)">
          <i :class="p.meta?p.meta.icon:''"></i>
          <span slot="title" class="menu-link">
            {{p.meta?p.meta.title:''}}
          </span>
        </el-menu-item>
      </template>
      <!-- 需要展示子菜单 -->
      <el-submenu :index="path" v-if="item.meta && !item.meta.single">
        <template slot="title">
          <i :class="item.meta?item.meta.icon:''"></i>
          <span>{{item.meta ? item.meta.title : ''}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(p,i) in item.children" :key="i" :index="p.path"
            @click="doRouter(p.path?item.path+'/'+p.path:'')">{{p.meta ? p.meta.title : ''}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </template>
    <!-- 不带子菜单 -->
    <template v-else>
      <el-menu-item :index="path" v-if="item.show"
      @click="doRouter(path)">
        <i class="el-icon-menu"></i>
        <span slot="title" class="menu-link">
          {{item.meta?item.meta.title:''}}
        </span>        
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "sidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    path: {
      type: String,
      default: ""
    }
  },
  mounted() {
    
  },
  methods: {
    doRouter(path) {
      this.$router.push(path)
    }
  }
};
</script>

<style lang="postcss" scoped>
.menu-link {
  display: inline-block;
  width: 100%;
  & a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: #909399;
  }
  & a.router-link-active {    
    color: #fff;
  }
}
</style>
