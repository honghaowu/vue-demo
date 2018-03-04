<template>
  <div class="detail">
      <my-header  :back='true'>详情页</my-header>
      <ul>
          <li>
              <label for="bookName">书名</label>
              <input type="text" v-model="book.bookName" id="bookName">
          </li>
          <li>
              <label for="bookInfo">详细信息</label>
              <input type="text" v-model="book.bookInfo" id="bookInfo">
          </li>
          <li>
              <label for="bookPrice">价格</label>
              <input type="text" v-model.number="book.bookPrice" id="bookPrice">
          </li>
          <li>
              <button @click="update">确认修改</button>
          </li>
      </ul>
  </div>
</template>
<script>
import myHeader from '../base/Header.vue';
import { getOne,updateBook } from '../api/index.js';
    export default {
        data(){
            return {
                book:{}
            }
        },
        computed:{
            bid(){
                return this.$route.params.id;
            }
        },
        components:{
            myHeader
        },
        watch:{
            $route(){
                console.log(this.bid);
                this.getBook();
               
            }
        },
        created(){
            this.getBook();
        },
        mounted(){
            
        },
        methods:{
            getBook(){
                getOne(this.bid).then((res)=>{
                    this.book=res;
                    console.log(this.book);
                });
                
            },
            update(){
                updateBook(this.bid,this.book).then(()=>{
                    //修改完成，跳转到list
                    this.$router.push('/list');
                });
            }
        }
    }
</script>
<style lang='scss' scoped>
    .detail{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background:#fff;
        z-index: 2;
        ul{
            margin:50px 20px 0 20px;
            li{
                label{
                    display: block;
                    font-size: 20px;
                    padding: 4px 0;
                }
                input{
                    margin: 10px 0;
                    height: 25px;
                    width: 100%;
                }
                button{ 
                    display: block;
                    width: 80px;
                    height: 35px;
                    background: #2aabd2;
                    color: #fff;
                    border: none;
                    border-radius: 4px; outline: none;
                }
            }
        }
    }
</style>

