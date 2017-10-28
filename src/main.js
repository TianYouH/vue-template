import Vue from 'vue'
import router from './router'
import store from './vuex'
import App from './App'

import HuangSvg from './components/Huang-svg'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/customerIcon/iconfont'

global.DEV = true
Vue.config.productionTip = true // 启用开发环境

Vue.use(ElementUI)
Vue.use(HuangSvg)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
