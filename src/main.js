import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Element from 'element-ui'
import axios from 'axios'

import ECharts from 'vue-echarts/components/ECharts.vue'

// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/component/title' // 引入标题组件
import 'echarts/lib/component/legend' // 引入图例组件
import 'echarts/lib/component/tooltip' // 引入提示框组件
import 'echarts/lib/component/toolbox' // 引入工具箱组件
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/polar'

// 如果需要配合 ECharts 扩展使用，只需要直接引入扩展包即可
// 以 ECharts-GL 为例：
// 需要安装依赖：npm install --save echarts-gl，并添加如下引用
// import 'echarts-gl'

// 注册组件后即可使用
Vue.component('v-chart', ECharts)


import 'element-ui/lib/theme-chalk/index.css'
import '../mock/index.js'
import './permission.js'

Vue.use(Element)
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
