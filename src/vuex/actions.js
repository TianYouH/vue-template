import * as types from './types'

export default {
  addUser: ({ commit }, data) => {
    commit(types.ADDUSERNAME, data)
  },
  removeUser: ({ commit }) => {
    commit(types.REMUSERNAME)
  }
}
