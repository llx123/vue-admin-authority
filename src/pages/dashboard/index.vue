<template>
  <div>
    <el-row>
      <el-col :span="6">
        <div class="card-panel">
          <div class="card-panel-icon">            
            <i class="el-icon-view"></i>
          </div>
          <div class="card-panel-desc">
            <div class="card-panel-text">Online Review</div>
            <count-to :star-val="0" :end-val="10086" :duration="2000"></count-to>
          </div>          
        </div>
      </el-col>
    </el-row>
  </div>  
</template>

<script>
  import { mapGetters } from 'vuex'
  import CountTo from 'vue-count-to'

  export default {
    name: 'Dashboard',
    data() {
      return {

      }
    },
    components: {
      CountTo
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