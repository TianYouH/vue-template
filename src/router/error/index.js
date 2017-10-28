export default [
  {
    path: '/401',
    meta: {
      title: '401-权限不足'
    },
    name: 'error_401',
    component: resolve => { require(['views/error_page/401.vue'], resolve) }
  },
  {
    path: '/500',
    meta: {
      title: '500-服务端错误'
    },
    name: 'error_500',
    component: resolve => { require(['views/error_page/500.vue'], resolve) }
  },
  {
    path: '/*',
    name: 'error_404',
    meta: {
      title: '404-页面不存在'
    },
    component: resolve => { require(['views/error_page/404.vue'], resolve) }
  }
]
