import * as types from "./types"
import getters from './getters'

const state = {
  user: {}        // 用户信息
}
const mutations = {
  [types.ADDUSERNAME]: (state, data) => {
    localStorage.user = JSON.stringify(data)
    state.user = data
  },
  [types.REMUSERNAME]: (state) => {
    localStorage.removeItem('user')
    state.user = {}
  }
}

export default {
  state,
  mutations,
  getters
}
