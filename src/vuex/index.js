import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

console.log('Vuex初始化完成')

export default new Vuex.Store({
  modules: {
    mutations
  },
  actions
})
