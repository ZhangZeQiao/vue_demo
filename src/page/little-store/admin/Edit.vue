<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
      <h1>This is admin/edit/{{$route.params.id}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "store-admin-edit",
  data() {
    return {
      msg: "Welcome to the store-admin-edit Page"
    };
  }
};
</script>
