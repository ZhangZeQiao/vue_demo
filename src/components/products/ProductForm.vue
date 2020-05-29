<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Name</label>
        <input type="text" placeholder="Name" v-model="model.name" name="name" class="form-control" />
      </div>
      <div class="form-group">
        <label>Price</label>
        <input
          type="number"
          placeholder="Price"
          v-model="model.price"
          name="price"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label>Manufacturer</label>
        <!-- TODO: 在 select 标签中使用 v-model 双向绑定了 model.manufacturer，表示我们在视图里面进行选择时，会修改对应的 model.manufacturer 属性。 -->
        <select type="text" class="form-control" v-model="model.manufacturer" name="manufacturer">
          <template v-for="manufacturer in manufacturers">
            <option
              :value="manufacturer._id"
              :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)"
            >{{manufacturer.name}}</option>
          </template>
        </select>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Image</label>
        <input
          type="text"
          class="form-control"
          placeholder="Image"
          v-model="model.image"
          name="image"
        />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          class="form-control"
          placeholder="Description"
          rows="5"
          v-model="model.description"
          name="description"
        ></textarea>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  // TODO: 接收来自父组件的几个参数
  props: ["model", "manufacturers", "isEditing"],
  methods: {
    saveProduct() {
      /* 
      // TODO: 在 saveProduct 内部，我们调用了父组件的 save-product 方法，并把修改后的 this.model 变量内容传给父组件。
      这里我们还可以看到，methods 不仅可以使得数据可以双向流动，而且还可以在子组件反向操作父组件的内容，使得数据还可以上下流动。
      1、父组件可以使用 props 把数据传给子组件。
      2、子组件可以使用 $emit 触发父组件的自定义事件。
      vm.$emit( event, arg ) //触发当前实例上的事件
      vm.$on( event, fn );//监听event事件后运行 fn； 
      */
      this.$emit("save-product", this.model);
    }
  }
};
</script>
