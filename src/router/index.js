import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../page/home' // TODO: 如果文件以index命名，可以不用显示引用【'../page/home/index'】
import Hi from '../page/hi'
import Demo from '../page/demo'

// TODO: Vue Router 是 Vue.js 官方的路由管理器。
// 如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能；然后在 main.js 中关联。
Vue.use(Router)

export default new Router({

  // mode: 'history',  // 这行的作用是去掉地址栏中的#
  /* TODO:
  上面的 mode: 'history' 是去掉地址栏中的#。
  但是在项目的正式部署环境下刷新浏览器会报404的错误，解决此问题需要在 nginx 中添加如下的配置（React项目也需要做同样的配置）：
  location / {
    try_files $uri $uri/ /index.html;
  }
  */

  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    } */
    // TODO:  path: '/' == 根路径/首页
    { path: '/', name: 'Home', component: Home, },
    { path: '/hi', name: 'Hi', component: Hi, },
    { path: '/demo', name: 'Demo', component: Demo, },
  ]
})
