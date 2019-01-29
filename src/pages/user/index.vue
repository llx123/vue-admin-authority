<template>
  <div class="user">    
    <filters @changeUser="changeUser"/>
    <list />
    <create-user :dialogVisible="dialogVisible" @changeUser="changeUser"/>
  </div>
</template>

<script>
import { List, Filters, CreateUser } from './component'
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  components: {
    List, Filters, CreateUser
  },
  mounted() {
    
  },
  methods: {
    changeUser(v) {
      this.dialogVisible = v
    }
  }
}
</script>

<style lang="postcss" scoped>
  .user {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    text-align: left;
  }
</style>
