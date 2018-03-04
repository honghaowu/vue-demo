<template>
  <div>
      <my-header  :back='true'>添加</my-header>
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
              <label for="bookPrice">封面</label>
              <input type="text" v-model.number="book.bookCover" id="bookPrice">
          </li>
          <li>
              <button @click="add">确认添加</button>
          </li>
      </ul>
  </div>
</template>
<script>
import myHeader from '../base/Header.vue';
import { addBook } from '../api/index.js'
    export default {
        data(){
            return {
                book:{}
            }
        },
         components: {
            myHeader
        },
        methods:{
            add(){
                addBook(this.book).then(()=>{
                    this.$router.push('/list');
                });
            }
        }
    }
</script>
<style lang='scss' scoped>
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
</style>

