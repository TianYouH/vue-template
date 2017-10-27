import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login-登录'
  },
  component: resolve => { require(['views/Login.vue'], resolve) }
}

const page404 = {
  path: '/*',
  name: 'error_404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => { require(['views/error_page/404.vue'], resolve) }
}

const page401 = {
  path: '/401',
  meta: {
    title: '401-权限不足'
  },
  name: 'error_401',
  component: resolve => { require(['views/error_page/401.vue'], resolve) }
}

const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error_500',
  component: resolve => { require(['views/error_page/500.vue'], resolve) }
}

export default new Router({
  routes: [
    loginRouter,
    page401,
    page500,
    page404
  ]
})
