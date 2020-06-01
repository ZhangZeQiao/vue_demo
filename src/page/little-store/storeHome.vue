<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>

    <div>
      <!-- <router-link :to="{path:'/little-store-admin'}">little-store-admin</router-link> -->
      <!-- 简化 -->
      <router-link target="_blank" to="/little-store-admin">little-store-admin</router-link>
      <router-link target="_blank" to="/little-store-cart">little-store-cart</router-link>
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
