var vm = new Vue({
  // TODO: 对象属性：绑定View，采用用#+ViewId
  el: '#example',
  // TODO: 数据属性：
  data: {
    message: 'Hello'
  },
  // TODO: 方法属性：
  methods: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  },
  // TODO: 计算属性：
  /*
  我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。
  然而，不同的是计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。
  这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
  我们为什么需要缓存？假设我们有一个性能开销比较大的计算属性 A，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 A。
  如果没有缓存，我们将不可避免的多次执行 A 的 getter！如果你不希望有缓存，请用方法来替代。
  */
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  },
  // TODO: 侦听属性：当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
  watch: {
    message: function (val) {
      this.message = val + ' ' + this.message
    },
  },
  // TODO: 还有8个生命周期
})
