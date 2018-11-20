<template>
  <div>
    Dashboard - {{name}}
  </div>  
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Dashboard',
    data() {
      return {

      }
    },
    mounted() {
      
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>