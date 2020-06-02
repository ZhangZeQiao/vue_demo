<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>

    <div>
      <!-- <router-link :to="{path:'/little-store-admin'}">little-store-admin</router-link> -->
      <!-- 简化 -->
      <router-link target="_blank" to="/little-store-admin">little-store-admin</router-link>
      <!-- 
        TODO:
        1、如果在A页面中采用target="_blank"跳转B页面，则A中对vuex的修改在B中不生效
        2、如果在A页面中直接当前页面打开B页面，则A中对vuex的修改在B中生效，但是一刷新页面，数据就会消失。
          vuex中state的值是存储在运行内存中，所以刷新页面会导致state中的值重置。
          store里的数据是保存在运行内存中的，当页面刷新时，页面会重新加载vue实例，store里面的数据就会被重新赋值。
          vuex只是对变量提升，如果不想数据刷新消失，就把数据存储到Local Storage或者Session Storage或者本地存储库中。
          TODO: 解决方案：
          // 默认
          const state = {
            name: localStorage.getItem("name"), //基本消息--姓名
          }
          // 事件
          const mutations = {
            name(state, str) {//姓名
              localStorage.setItem("name", str);
              state.name = str;
            },
          }
      -->
      <!-- <router-link target="_blank" to="/little-store-cart">little-store-cart</router-link> -->
      <router-link to="/little-store-cart">little-store-cart</router-link>
    </div>

    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from "@/components/products/ProductList.vue";
export default {
  name: "store-home",
  data() {
    return {
      msg: "Welcome to little-store"
    };
  },
  components: {
    "product-list": ProductList
  }
};
</script>

<style>
/* .store-home {
  color: blue;
  font-size: 20px;
} */
</style>
