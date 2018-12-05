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
      default: 'chart'
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
    }
  },
  mounted() {
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
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        color: ['rgb(216, 151, 235)','rgb(246, 152, 153)','#62e58e'],
        title: {
          text: "Yearly Sales",
          textStyle: {
            fontSize: 14,
            color: '#666',
            fontWeight: 'normal'
          }
        },
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#ebebeb',
              width: 2,
            },
          },
          axisLabel: {
            textStyle: {
              color : '#8c8c8c',
              opacity: 1
            }              
          }
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          axisLabel: {
            textStyle: {
              color : '#8c8c8c',
              opacity: 1
            }              
          }
        },
        grid: {
          left: 20,
          right: 20,
          bottom: 10,
          // top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // type: 'cross',
            lineStyle: {
              color: '#8c8c8c',
              opacity: 0.5
            }
          },
          padding: [5, 10]
        },
        legend: {
          right: 10,
          top: 15,
          data: [
              {name: "Food", icon: 'circle'},
              {name: "Clothes", icon: 'circle'},
              {name: "Electronics", icon: 'circle'}
            ],
          selectedMode: false,
          width: 260,
        },
        series: [{
          name: 'Food',
          lineStyle: {
            width: 3
          },
          smooth: true,
          type: 'line',
          data: expectedData,
          animation: false,
          symbol: 'circle',
          symbolSize: 8,
        },
        {
          name: 'Clothes',
          smooth: true,
          type: 'line',
          lineStyle: {
            width: 3
          },
          data: actualData,
          animation: false,
          symbol: 'circle',
          symbolSize: 8
        },
        {
          name: 'Electronics',
          smooth: true,
          type: 'line',
          lineStyle: {
            width: 3
          },
          data: [50,50,50,50,50,50,50],
          animation: false,
          symbol: 'circle',
          symbolSize: 8
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
