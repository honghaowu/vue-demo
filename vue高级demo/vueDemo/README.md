# vue-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

vuex使用
1 安装 npm install vuex --save 
 建立vuex文件夹，新建文件store.js ,引入vue和vuex,如下
 import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex);

    const state={
        count: 1
    };
    const mutations={
        add(state){
            state.count++;
        },
        reduce(state){
            state.count--;
        }
    };
    export default new Vuex.Store({
        state,
        mutations
    });

    2 在使用的模板中引入，如下，$store.commit触发mutations
    <p>{{$store.state.count}}</p>
    <input type="button" value="+" @click='$store.commit("add")'>
    <input type="button" value="-" @click='$store.commit("reduce")'>

    import store from './../vuex/store'
    export default {
    name: 'index',
    data () {
        return {
        msg: 'index'
        }
    },
    store
    }

    state
    之前在组件中使用的是$store.state.count，现在想直接用{{count}}，可以用三种方法转换
    1）在组件中使用计算属性，
    computed:{
        count(){
            return this.$store.state.count;
        }
    }
    2) 在组件中使用辅助函数mapState先引入,格式如下
    import {mapState} from 'vuex'
    computed:mapState({
        count:state=>state.count
    })
    3) 推荐的使用数组映射，即简化了上面方法
    import {mapState} from 'vuex'
    computed:mapState(['count'])
    或者写成
    computed: {
        ...mapState(["count"]);
    }
    