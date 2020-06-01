// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router, // 绑定路由规则
  store: store,// 将 store 添加到 Vue 初始化的参数列表里，实现 Vuex 和 Vue 的整合。
  components: { App },
  template: '<App/>'
})
