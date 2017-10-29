import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../vuex'

import errorRouter from './error'
import testRouter from './test'

Vue.use(VueRouter)

const homeRouter = {
  path: '/',
  redirect: 'welcome',
  mate: {
    title: '主页',
    requireAuth: true
  },
  hidden: true,
  component: resolve => { require(['views/Home.vue'], resolve) },
  children: [
    {
      path: 'welcome', title: '欢迎', name: '欢迎', component: resolve => { require(['views/Welcome.vue'], resolve) }
    }
  ]
}

const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login-登录',
    requireAuth: false
  },
  hidden: true,
  component: resolve => { require(['views/Login.vue'], resolve) }
}

const routes = [
  homeRouter,
  loginRouter,
  ...testRouter,
  ...errorRouter
]

// 页面刷新时重新赋值token
if (window.localStorage.getItem('user')) {
  let user = window.localStorage.getItem('user')
  user = JSON.parse(user)
  store.dispatch('addUser', user)
}

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('to:', to, 'from:', from, 'next:', next)
  if (to.matched.some(r => r.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (store.getters.token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
