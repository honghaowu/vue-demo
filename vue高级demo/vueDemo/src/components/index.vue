<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <hr>
    <p>{{$store.state.count}}-{{count}}</p>
    <input type="button" value="+" @click='$store.commit("add",10)'>
    <input type="button" value="-" @click='reduce'>
    <br>
    <br>
    <input type="button" value="+" @click='addAction'>
    <input type="button" value="-" @click='reduceAction'>
  </div>
</template>

<script>
import store from './../vuex/store'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      msg: 'index'
    }
  },
  //第一种写法
  // computed:{
  //   count(){
  //     return this.$store.state.count;
  //   }
  // },
  // 第二种方法
  // computed:mapState({
  //   count:state=>state.count
  // }),
  //第三种
  //computed:mapState(["count"]),或者如下
  computed:{
    ...mapState(["count"]),
    //...mapGetters(['count'])
  },
  methods:{
    ...mapMutations(['add','reduce']),//用辅助函数映射vuex中store.js中的方法
    ...mapActions(['addAction','reduceAction'])
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
