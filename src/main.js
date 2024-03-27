import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入axios模块
import axios from 'axios'

// 导入全局样式
import '@/styles/common.less'

// 导入组件懒加载模块
import VueLazyComponent from '@xunlei/vue-lazy-component'

Vue.use(VueLazyComponent)

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
