import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/* TODO:
在路径最前面加上了 "@"，那是因为我们在 webpack 配置中将会 "@" 映射成 resolve('src')，也就是我们项目目录下 src 文件夹的路径，
最后我们的 '@/components/HelloWorld' 的实际上的效果相当于取到了项目目录 src 文件夹里面的 components/HelloWorld 组件。
*/

import Home from '../page/home' // TODO: 如果文件以index命名，可以不用显示引用【'../page/home/index'】
import Hi from '../page/hi'
import Demo from '../page/demo'

import storeHome from '../page/little-store/storeHome'
import storeDetail from '../page/little-store/storeDetail'
import storeCart from '../page/little-store/storeCart'
// Admin Components
import storeAdminIndex from '@/page/little-store/admin/Index';
import storeAdminNew from '@/page/little-store/admin/New';
import storeAdminProducts from '@/page/little-store/admin/Products';
import storeAdminEdit from '@/page/little-store/admin/Edit';

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
    { path: '/little-store-home', name: 'little-store-home', component: storeHome, },
    { path: '/little-store-detail', name: 'little-store-detail', component: storeDetail, },
    { path: '/little-store-cart', name: 'little-store-cart', component: storeCart, },
    {
      path: '/little-store-admin', name: 'little-store-admin', component: storeAdminIndex,
      // TODO: 路由嵌套
      /* 嵌套路由的用法就是给需要归为一类的页面设置一个入口页面，
      然后把这一类页面都放到这个路由页面路由定义的 children 字段数组中。 */
      children: [
        { path: 'new', name: 'new', component: storeAdminNew, },
        { path: 'products', name: 'products', component: storeAdminProducts, },
        /* TODO:
        比如我们在浏览器中输入 xxxadmin/edit/52tuture
        $route 这个变量是 Vue 在运行时为我们自动插入到所有组件属性中的，所有我们不用手动去管理它。
        <h1>This is admin/edit/{{$route.params.id}}</h1>
        */
        { path: 'edit/:id', name: 'edit', component: storeAdminEdit, },
      ],
    },
  ]
})
