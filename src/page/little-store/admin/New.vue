<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>

    <!-- TODO:
    我们在组件的 data 中定义了 model 和 manufacturers 以及在 methods 中定义了 addProduct 方法，
    并将它们以属性绑定 :model="model"、:manufacturers="manufacturers" 和事件绑定 @save-product="saveProduct" 的方式传递给表单组件。
    -->
    <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers"></product-form>
  </div>
</template>

<script>
import ProductForm from "@/components/products/ProductForm";
export default {
  name: "store-admin-new",
  data() {
    return {
      msg: "Welcome to the store-admin-new Page",
      model: {},
      manufacturers: [
        {
          _id: "sam",
          name: "Samsung"
        },
        {
          _id: "apple",
          name: "Apple"
        }
      ]
    };
  },
  methods: {
    addProduct(model) {
      console.log("model", model);
    }
  },
  /* TODO:
  当一个组件要在模板语法中使用另外一个组件时，需要申明此组件，即在组件的 components 属性中申明要使用的组件，
  比如我们上面使用名为 'product-form' 的名称来申明使用 ProductForm 组件，
  这样在 template 中我们就可以以 <product-form /> 形式使用导入的表单组件。
  */
  components: {
    "product-form": ProductForm
  }
};
</script>
