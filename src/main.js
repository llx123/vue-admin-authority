import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Element from 'element-ui'
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css'
import '../mock/index.js'

Vue.use(Element)
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
