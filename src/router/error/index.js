import NoAccess from 'views/error_page/401.vue'
import ServerError from 'views/error_page/500.vue'
import NoPage from 'views/error_page/404.vue'

export default [
  {
    path: '/401',
    meta: {
      title: '401-权限不足'
    },
    hidden: true,
    name: 'error_401',
    component: NoAccess
  },
  {
    path: '/500',
    meta: {
      title: '500-服务端错误'
    },
    hidden: true,
    name: 'error_500',
    component: ServerError
  },
  {
    path: '/*',
    name: 'error_404',
    hidden: true,
    meta: {
      title: '404-页面不存在'
    },
    component: NoPage
  }
]
