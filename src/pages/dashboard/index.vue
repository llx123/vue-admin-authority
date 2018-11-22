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
      console.log(this.$store)
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>