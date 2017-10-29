export default [
  {
    path: '/',
    hidden: false,
    name: '测试',
    component: resolve => { require(['views/Home.vue'], resolve) },
    iconCls: 'el-icon-bell',
    children: [
      { path: 'test1', title: '测试一', name: 'test1-index', component: resolve => { require(['views/test/Test1.vue'], resolve) } },
      { path: 'test2', title: '测试二', name: 'test2-index', component: resolve => { require(['views/test/Test2.vue'], resolve) } }
    ]
  }
]
