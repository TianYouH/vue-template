import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login-登录'
  },
  component: resolve => { require(['view/Login.vue'], resolve) }
}

export default new Router({
  routes: [
    loginRouter
  ]
})
