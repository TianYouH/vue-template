export default {
  name: (state) => {
    return state.name
  },
  token: (state) => {
    return state.user.access_token
  }
}
