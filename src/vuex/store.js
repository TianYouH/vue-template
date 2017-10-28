// 注~~~不要引用

import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'
import { state } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  actions: {
    saveAcc: ({ commit, data }) => {
      commit(types.SAVEACCOUNT, data)
    },
    removeAcc: ({ commit }) => {
      commit(types.REMOVACCOUNT)
    }
  },
  mutations: {
    [types.ADDUSERNAME]: (state, data) => {
      localStorage.user = JSON.stringify(data)
      state.user = data
    },
    [types.REMUSERNAME]: (state) => {
      localStorage.removeItem('user')
      state.user = null
    },
    [types.SAVEACCOUNT]: (state, data) => {
      localStorage.account = JSON.stringify(data)
      state.saveAccount = data
    },
    [types.REMOVACCOUNT]: (state) => {
      localStorage.removeItem('account')
      state.saveAccount = {}
    }
  },
  getters: {
    name (state) {
      return state.name
    },
    account (state) {
      return state.saveAccount
    }
  }
})
