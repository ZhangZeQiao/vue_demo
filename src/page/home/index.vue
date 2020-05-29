<template>
  <div class="home">
    {{message}}
    <div>
      <router-link :to="{path:'/hi'}">Hi</router-link><!-- TODO: 当前页面打开 -->
      <router-link target="_blank" :to="{name:'Demo'}">Demo</router-link><!-- TODO: 新页面打开 -->
      <router-link target="_blank" :to="{name:'little-store-home'}">little-store-home</router-link><!-- TODO: 新页面打开 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "首页"
    };
  }
};
</script>

<style>
.home {
  color: blue;
  font-size: 20px;
}
</style>

