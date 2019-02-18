<template>
  <div class="navbar">
    <div class="left-menu">
      <a @click="changeCollapse">
        <i :class="[opened ? 'el-icon-caret-right': 'el-icon-caret-left']" />
      </a>
    </div>
    <div class="right-menu">
      {{name}}
      <el-dropdown class="right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <i class="el-icon-service"></i>
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span style="display:block;" @click.stop="logout">logOut</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      'opened'
    ])
  },
  props: ['name'],
  methods: {
    changeCollapse() {
      this.$store.dispatch('toggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        window.location.reload()
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.navbar {
  height: 65px;
  line-height: 60px;
  border-radius: 0px !important;
  & .left-menu {
    width: 60px;
    text-align: center;
    float: left;
    & a {
      cursor: pointer;
    }
  }
  & .right-menu {
    float: right;
    height: 100%;
    margin-right: 1%;
    &:focus{
     outline: none;
    }
  }
}
</style>
