<template>
  <div class="el-dashboard">
    <el-row :gutter="20">
      <el-col :md="12" :lg="6">
        <NumberCard 
          icon-type="el-icon-view"
          card-text="Online Review"
          :start="0"
          :end="1000"
          :duration="2000"
          icon-color='rgb(100, 234, 145)'
          />
      </el-col>
      <el-col :md="12" :lg="6">
        <NumberCard 
          icon-type="el-icon-service"
          card-text="New Customers"
          :start="0"
          :end="1000"
          :duration="2000"
          icon-color='rgb(100, 234, 145)'
          />
      </el-col>
      <el-col :md="12" :lg="6">
        <NumberCard 
          icon-type="el-icon-bell"
          card-text="Active Projects"
          :start="0"
          :end="1000"
          :duration="2000"
          icon-color='rgb(100, 234, 145)'
          />
      </el-col>
      <el-col :md="12" :lg="6">
        <NumberCard 
          icon-type="el-icon-goods"
          card-text="Referrals"
          :start="0"
          :end="1000"
          :duration="2000"
          icon-color='rgb(100, 234, 145)'
          />
      </el-col>
      <el-col :md="24" :lg="18">
        <v-chart :options="option"/>
      </el-col>
    </el-row>
  </div>  
</template>

<script>
  import { mapGetters } from 'vuex'
  import CountTo from 'vue-count-to'
  import NumberCard from '@/components/NumberCard'

  import 'echarts/lib/chart/line'; // 折线图

  export default {
    name: 'Dashboard',
    data() {
      return {
        option: {
          title : {
            text: 'Yearly Sales',
            subtext: '纯属虚构'
          },
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            right: 'right',
            data: ['最高气温','最低气温'],
            selectedMode: false,
          },
          toolbox: {
              show : false,
              feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
              }
          },
          calculable : true,
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['周一','周二','周三','周四','周五','周六','周日'],
            }
          ],
          yAxis : [
            {
              type : 'value',
              axisLabel : {
                formatter: '{value} °C'
              },              
              splitLine: {
                lineStyle: {
                  type: 'dashed'
                }
              },
              axisLine: {                    
                show: false,
              }
            }
          ],
          series : [
              {
                  name:'最高气温',
                  type:'line',
                  smooth: true,
                  data:[11, 11, 15, 13, 12, 13, 10],
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name:'最低气温',
                  type:'line',
                  data:[1, -2, 2, 5, 3, 2, 0],
                  markPoint : {
                      data : [
                          {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name : '平均值'}
                      ]
                  }
              }
          ]
        }                          
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

<style lang="postcss" scoped>
</style>
