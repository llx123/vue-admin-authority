<template>
  <div :class="className" :style="{height:height,width:width, paddingTop: '10px'}"/>
</template>

<script>
import echarts from 'echarts'
import { debounce } from '@/utils'

export default {
  props: {
    className: {
      type: String,
      default: 'area-chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null,
      sidebarElm: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    },
  },
  mounted() {
    // console.log(this.$store)
    this.initChart()
    if (this.autoResize) {
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHandler)
    }

    // 监听侧边栏的变化
    this.sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    this.sidebarElm && this.sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHandler)
    }

    this.sidebarElm && this.sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)

    this.chart.dispose()
    this.chart = null
  },
  methods: {
    sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler()
      }
    },
    setOptions({ taskArr, cardArr, yearArr } = {}) {
      this.chart.setOption({
        color: ['#c1e0fc','#e3fccd'],
        title: {
          text: "TEAM TOTAL COMPLETED",
          left: 10,
          textStyle: {
            fontSize: 14,
            color: '#666',
            fontWeight: 'normal'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: yearArr
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // type: 'cross',
            lineStyle: {
              color: '#8c8c8c',
              opacity: 0.5
            },
          },
          padding: [15,50,15,20]
        },
        grid: {
          left: 20,
          right: 20,
          bottom: 10,
          // top: 30,
          containLabel: true
        },
        legend: {
          right: 10,
          top: 15,
          data: [
              {name: "Cards Complete", icon: 'circle'},
              {name: "Task complete", icon: 'circle'}
            ],
          selectedMode: false,
          width: 260,
        },
        series: [{
          data: cardArr,
          name: 'Cards Complete',
          zlevel: 2,
          type: 'line',
          smooth: true,
          areaStyle: {
            color: '#daecfd'
          }
        },{
          data: taskArr,
          name: 'Task complete',
          zlevel: 2,
          type: 'line',
          smooth: true,
          areaStyle: {
            color: '#dbf1c7'
          }
        }]
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el)
      this.setOptions(this.chartData)
    }
  }
}
</script>
