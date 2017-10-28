import axios from 'axios'
import store from '../vuex'
import router from '../router'

let DEV

// axios配置
axios.defaults.timeout = 10000
// axios.defaults.baseURL = 'http://localhost:7090'
axios.defaults.baseURL = ''

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (DEV) console.log('发起请求')
    if (DEV) console.log(config.url)
    if (config.data) if (DEV) console.log(config.data)
    // if (store.getters.token !== undefined) {
    //   config.headers['x-auth-token'] = store.getters.token
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (DEV) console.log('响应成功')
    switch (response.data.code) {
      case 401:// 未经授权
        store.dispatch('removeUser')
        router.replace({
          path: 'login',
          query: {redirect: router.currentRoute.fullPath}
        })
        break
      case 403:
        return Promise.reject(new Error(`无权限操作${response.msg}`))
      case 404:
        return Promise.reject(new Error(`请求资源不存在${response.msg}`))
      case 500:
        console.log(response.response.data)
        return Promise.reject(new Error(`服务器遇到错误，无法完成请求。${response.msg}`))
      default:
        if (DEV) console.log(response.data)
        return response
    }
    return response
  },
  error => {
    if (DEV) console.log('响应失败')
    if (error.response) {
      switch (error.response.status) {
        case 401:// 未经授权
          store.dispatch('removeUser')
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          })
          break
        case 403:
          return Promise.reject(new Error(`无权限操作${error.response.status}`))
        case 404:
          return Promise.reject(new Error(`请求资源不存在${error.response.status}`))
        case 500:
          console.log(error.response)
          return Promise.reject(new Error(`服务器遇到错误，无法完成请求。${error.response.status}`))
        default:
          if (DEV) console.log(error)
          return Promise.reject(new Error(`未知错误,请联系客服${error.response.status}`))
      }
    } else {
      if (DEV) console.log(error)
      return Promise.reject(error)
    }
  }
)

export default axios
