<template>
  <div class="el-dashboard">
    <el-row :gutter="20">
      <!-- numbers -->
      <el-col v-for="item in dashboard.numbers" :key="item.number" :sm="12" :md="6">
        <NumberCard
          :icon-type="item.icon"
          :card-text="item.title"
          :start="0"
          :end="item.number"
          :duration="2000"
          :icon-color="item.color"
        />
      </el-col>
      <!-- end -->
      <el-col :sm="24" :md="18">
        <div style="background-color: #fff">
          <line-chart :chart-data="lineChartData"/>
        </div>
      </el-col>
      <el-col :sm="24" :md="6">
        <weather />
      </el-col>
      <el-col :sm="24" :md="12">
        <rencent-sales />
      </el-col>
      <el-col :sm="24" :md="12">
        <comments />
      </el-col>
      <el-col :span="24">
        <div style="background-color: #fff">
          <area-chart :chart-data="areaChartData"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getDashboardList } from '../../services/dashboard'
import { mapGetters } from "vuex"
import CountTo from "vue-count-to"
import NumberCard from "./components/NumberCard"
import LineChart from './components/LineChart'
import Weather from './components/Weather'
import RencentSales from './components/RencentSales'
import Comments from './components/Comments'
import AreaChart from './components/AreaChart'
export default {
  name: "Dashboard",
  data() {
    return {
      dashboard: {
        numbers: []
      },
      lineChartData: {
        foodArr: [],
        clothesArr: [],
        elecArr: [],
        yearArr: [],
      },
      areaChartData: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145],
      },
      option: {
        color: ['rgb(216, 151, 235)','rgb(246, 152, 153)'],
        animation: false,
        title: {
          text: "Yearly Sales",
          textStyle: {
            color: '#666',
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: 'red'
            }
          },
        },
        legend: {
          right: "right",
          data: [{name: "最高气温", icon: 'circle'}, {name: "最低气温", icon: 'circle'}],
          selectedMode: false,
          width: 200,
        },
        toolbox: {
          show: false,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
            },
          }
        ],
        yAxis: [
          {
            type: "value",
            interval: 10,
            axisLabel: {
              formatter: "{value} °C"
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                type: "dashed"
              }
            },
            axisLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "最高气温",
            type: "line",
            smooth: true,
            data: [11, 11, 15, 13, 12, 13, 10],
            symbol: 'circle',
            symbolSize: 10
          },
          {
            name: "最低气温",
            type: "line",
            smooth: true,
            data: [1, -2, 2, 5, 3, 2, 0],
            symbol: 'circle',
            symbolSize: 10
          }
        ]
      }
    };
  },
  components: {
    CountTo,
    NumberCard,
    LineChart,
    Weather,
    RencentSales,
    Comments,
    AreaChart
  },
  computed: {
    ...mapGetters(["name"])
  },
  mounted() {
    getDashboardList().then(res=>{
      console.log(res.data)
      this.dashboard = res.data

      let foodArr = [], clothesArr = [], elecArr = [], yearArr = []
      res.data.sales.map(item=>{
        foodArr.push(item.Food)
        clothesArr.push(item.Clothes)
        elecArr.push(item.Electronics)
        yearArr.push(item.name)
      })
      this.lineChartData = { ...this.lineChartData, foodArr, clothesArr, elecArr, yearArr }
    })
  },
  methods: {
    
  }
};
</script>

<style lang="postcss" scoped>
.el-dashboard {
  width: 100%
}
</style>
