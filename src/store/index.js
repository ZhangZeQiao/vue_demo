import Vue from 'vue';
import Vuex from 'vuex';

// 调用 Vue.use 方法，告诉 Vue 我们将使用 Vuex，这和之前使用 Vue.use(router) 的原理一样
Vue.use(Vuex);

/* 
当我们将 store 当做参数传给 Vue 进行初始化之后(src/main.js 文件中)，Vue 就会将 Store 里面的 state 注入到所有的 Vue 组件中，
这样所有的 Vue 组件共享同一个全局的 state ，它其实就是一个 JS 对象，应用中所有状态的变化都是对 state 进行操作，然后响应式的触发组件的重新渲染，
所以这里的 state 也有 “数据的唯一真相来源” 的称谓。

这种将状态保存到一个全局的 JavaScript 对象 – state 中，然后所有的增、删、改、查操作都是对这个 JavaScript 对象进行，
使得我们可以避免组件嵌套层级过深时，组件之间传递属性的复杂性，让属性的定义，获取，修改非常直观，方便开发大型应用和团队协作。
*/

export default new Vuex.Store({
    // TODO: 这里 strict 参数表示，我们必须使用 Vuex 的 Mutation 函数来改变 state，否则就会报错，确保修改状态的唯一性
    strict: true,
    // TODO: 而 state 参数用来存放我们全局的状态，我们应用需要的数据可以定义为这里的属性
    // state 是我们整个应用的状态，整个应用的状态都是从它获取，整个应用状态的改变都是修改它，所以这个 state 也有 “数据的唯一真相来源” 的称谓。
    state: {
        cart: [],
        showLoader: false,
        product: {},
        products: [
            {
                name: '1',
                _id: '1',
                name: 'iPhone',
                description: 'iPhone是美国苹果公司研发的智能手机系列，搭载苹果公司研发的iOS操作系统',
                image: 'https://i.gadgets360cdn.com/large/iPhone11_leak_1567592422045.jpg',
                price: 2000,
                manufacturer: 'Apple Inc'
            },
            {
                _id: '2',
                name: '荣耀20',
                description: '李现同款 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 蓝水翡翠 全面屏手机',
                image: 'https://article-fd.zol-img.com.cn/t_s640x2000/g4/M08/0E/0E/ChMlzF2myueILMN_AAGSPzoz23wAAYJ3QADttsAAZJX090.jpg',
                price: 2499,
                manufacturer: '华为'
            },
            {
                _id: '3',
                name: 'MIX2S',
                description: '骁龙845 全面屏NFC 游戏智能拍照手机 白色 全网通 6+128',
                image: 'http://himg2.huanqiu.com/attachment2010/2018/0129/08/39/20180129083933823.jpg',
                price: 1688,
                manufacturer: '小米'
            },
            {
                _id: '4',
                name: 'IQOO Pro',
                description: '12GB+128GB 竞速黑 高通骁龙855Plus手机 4800万AI三摄 44W超快闪充 5G全网通手机',
                image: 'https://www.tabletowo.pl/wp-content/uploads/2019/08/vivo-iqoo-pro-5g-blue-1.jpg',
                price: 4098,
                manufacturer: 'Vivo'
            },
            {
                _id: '5',
                name: 'Reno2',
                description: '【12期免息1年碎屏险】4800万变焦四摄8+128G防抖6.5英寸全面屏新 深海夜光(8GB+128GB) 官方标配',
                image: 'https://news.maxabout.com/wp-content/uploads/2019/08/OPPO-Reno-2-1.jpg',
                price: 2999,
                manufacturer: 'OPPO'
            }
        ],
        manufacturers: [],
    },
    // Mutation 是定义在 Vuex Store 的 mutation 属性中的一系列形如 (state, payload) => newState 的函数，用于响应从 Vue 视图层发出来的事件或动作
    /* 
    这个函数接收两个参数 state 和 payload，
    state 就是我们 Vuex Store 中保存的 state，payload 是被响应的那个事件或动作携带的参数，
    然后我们通过 payload 的参数来操作现有的 state，返回新的 state，
    通过这样的方式，我们就可以响应修改 Vuex Store 中保存的全局状态。
    */
    mutations: {
        ADD_TO_CART(state, payload) {
            const { product } = payload;
            state.cart.push(product);
        },
        REMOVE_FROM_CART(state, payload) {
            const { productId } = payload
            state.cart = state.cart.filter(product => product._id !== productId)
        }
    }
});
