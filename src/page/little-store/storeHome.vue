<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>

    <div>
      <!-- <router-link :to="{path:'/little-store-admin'}">little-store-admin</router-link> -->
      <!-- 简化 -->
      <router-link target="_blank" to="/little-store-admin">little-store-admin</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "store-home",
  data() {
    return {
      msg: "Welcome to little-store"
    };
  }
};
</script>

<style>
/* .store-home {
  color: blue;
  font-size: 20px;
} */
</style>
