<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>

    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <li>
              <router-link to="/little-store-admin">View Products</router-link>
            </li>
            <li>
              <router-link to="/little-store-admin/new">New Products</router-link>
            </li>
          </ul>
        </div>
        <!-- 
          TODO: router-view 用于渲染子路由组件，
          比如我们此时访问 xxxadmin/new 页面，那么 router-view 部分会被替换成 New.vue 组件的内容，
          因为我们在之前的嵌套路由定义中 path 为 new 的渲染组件为 New.vue。
         -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "store-admin-index",
  data() {
    return {
      msg: "Welcome to the store-admin-index Page"
    };
  }
};
</script>
