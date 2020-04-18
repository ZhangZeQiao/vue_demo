<template>
  <div class="hi">{{message}}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "hi, 我的第一个vue程序"
    };
  }
};
</script>

<style>
.hi {
  color: blue;
  font-size: 20px;
}
</style>

