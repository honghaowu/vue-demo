<template>
  <div>
    <my-header>购物车</my-header>
    <ul class="content">
      <li v-for="l in cartList" v-if='l.bookCount!==0'>
        <div class="img-wrap">
        <img :src="l.bookCover" alt="">
        </div>
        <div>
            <h3>{{l.bookName}}</h3>
            <button @click="decrement(l)">-</button>
            {{l.bookCount}}
            <button @click="increment(l)">+</button>
            <p>小计 {{l.bookPrice*l.bookCount}}</p>
            <button @click="clear(l)" class="clear" v-if="l.bookCount!==0">删除</button>
        </div>
        
      </li>
      <li>共{{count}}本</li>
    </ul>
  </div>
</template>
<script>
import myHeader from '../base/Header.vue';
import * as Types from '../store/mutations-type';
  // 辅助函数 语法糖
  import {mapState,mapGetters} from 'vuex';
  export default {
        data(){
            return {
                show: false
            }
        },
        created(){
        },
        methods: {},
        computed: {
          ...mapGetters(['count']),
          ...mapState(['cartList']),
          /*cartList(){
              return this.$store.state.cartList
          }*/
        },
        methods:{
            decrement(book){
                this.$store.commit(Types.REMOVE_CART,book);   
            },
            increment(book){
                this.$store.commit(Types.ADD_CART,book);
            },
            clear(book){
                this.$store.commit(Types.CLEAR_CART,book);
                console.log(book.bookCount);
            }
            
        },
        components: {myHeader}
    }
</script>
<style scoped lang="scss">
    ul{
        padding: 10px;
        li{
            display: flex;
            .img-wrap{
                text-align: center;
                padding: 10px;
            }
            h3{
                width: 90%;
                
            }
            img{
                width: 96px;
                display: inline-block;
            }
            button{
                width: 30px;
                height: 30px;
                &.clear{
                    width: 100px;
                }
            }
        }
    }
</style>
