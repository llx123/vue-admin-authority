<template>
  <div class="user">    
    <filters />
    <list />
  </div>
</template>

<script>
import { List, Filters } from './component'
export default {
  data() {
    return {

    }
  },
  components: {
    List, Filters
  },
  mounted() {
    
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
