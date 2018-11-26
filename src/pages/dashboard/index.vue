<template>
  <div>
    <el-row>
      <el-col :span="6">
        <NumberCard 
          icon-type="el-icon-view"
          card-text="Online Review"
          :start="0"
          :end="1000"
          :duration="2000"
          icon-color='rgb(100, 234, 145)'
          />
      </el-col>
    </el-row>    
  </div>  
</template>

<script>
  import { mapGetters } from 'vuex'
  import CountTo from 'vue-count-to'
  import NumberCard from '@/components/NumberCard'

  export default {
    name: 'Dashboard',
    data() {
      return {

      }
    },
    components: {
      CountTo, NumberCard
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