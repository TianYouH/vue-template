/* eslint-disable*/
// import Vue from 'vue'
import router from './router'
import store from './vuex'
import App from './App'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import HuangSvg from './components/Huang-svg'
import './styles/element-variables.scss'
import './assets/customerIcon/iconfont'

global.DEV = true
Vue.config.productionTip = true

Vue.use(ELEMENT)
Vue.use(HuangSvg)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
