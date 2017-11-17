import Home from 'views/Home.vue'
import Test1 from 'views/test/Test1.vue'
import Test2 from 'views/test/Test2.vue'

export default [
  {
    path: '/',
    hidden: false,
    name: '测试',
    component: Home,
    iconCls: 'el-icon-bell',
    children: [
      { path: 'test1', title: '测试一', name: 'test1-index', component: Test1 },
      { path: 'test2', title: '测试二', name: 'test2-index', component: Test2 }
    ]
  }
]
