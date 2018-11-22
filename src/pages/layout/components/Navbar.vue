<template>
  <div class="navbar">
    <div class="right-menu">
      <el-dropdown class="right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <i class="el-icon-service"></i>
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided>
            <span style="display:block;" @click.stop="logout">logOut</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
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
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  & .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
  }
}
</style>
