<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>

    <div class="body">{{product.name}}</div>
  </div>
</template>

<script>
export default {
  name: "store-admin-products",
  data() {
    return {
      msg: "Welcome to the store-admin-products Page"
    };
  },
  computed: {
    product() {
      return this.$store.state.products[0];
    }
  }
};
</script>
