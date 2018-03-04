<template>
  <div>
      <my-header>列表页</my-header>
      <div class="content" ref="scroll" @scroll="loadMore">
          <ul>
              <router-link v-for="(book,index) in books" tag="li" :key='index' :to="{name:'detail',params: {id:book.bookId}}">
                  <div class="img-wrap">
                    <img v-lazy="book.bookCover" alt="">
                  </div>
                  <div>
                      <h4>{{book.bookName}}</h4>
                      <p>{{book.bookInfo}}</p>
                      <strong>{{book.bookPrice}}元</strong>
                      <div class="btn-list">
                          <button class="green" @click.stop="add(book)">添加</button>
                          <button class="" @click.stop="remove(book.bookId)">删除</button>
                      </div>
                      
                  </div>
              </router-link>
          </ul>
          <!-- <div class="more" @click="addMore">加载更多</div> -->
      </div>
  </div>
</template>
<script>
import myHeader from '../base/Header.vue';
import * as Types from '../store/mutations-type';
import { getBook,removeBook,pagination } from '../api/index.js';
    export default {
        data(){
            return {
                books:[],
                offset:0,
                hasMore:true,
                isLoading:false
            }
        },
        components:{
            myHeader
        },
        created(){
            // this.getBooks();
            this.getPage();
        },
        mounted(){
            let scroll = this.$refs.scroll; //获取到要拖拽的元素
            let top = scroll.offsetTop;
            let distance = 0;
            let isMove = false;
            scroll.addEventListener('touchstart',(e)=> {
                // 滚动条在最顶端时 并且当前盒子在顶端时候 才继续走
                if(scroll.scrollTop !=0 || scroll.offsetTop != top) return
                let start = e.touches[0].pageY; //手指点击的开始
                let move = (e)=>{
                    isMove = true;
                    let current = e.touches[0].pageY;
                    distance = current - start; //求的拉动的距离 负的就不要了
                    if(distance>0){ // 如果大于50了 认为就是50像素
                    if(distance<=50){
                        scroll.style.top = distance + top +'px';
                    }else{
                        distance = 50;
                        scroll.style.top = top+50+'px';
                    }
                    }else{
                    // 如果不在考虑范围内 移除掉move和end事件
                    scroll.removeEventListener('touchmove',move);
                    scroll.removeEventListener('touchend',end);
                    }
                };
                let end = (e)=>{
                    if(!isMove)return;
                    isMove = false;
                    clearInterval(this.timer1);
                    this.timer1 = setInterval(()=>{ // 一共distance 每次-1
                    if(distance<=0){
                        clearInterval(this.timer1);
                        distance = 0;
                        scroll.style.top = top+'px';
                        scroll.removeEventListener('touchmove',move);
                        scroll.removeEventListener('touchend',end);
                        this.books = []; // 先清空数据
                        this.offset = 0;
                        this.hasMore = true;
                        this.getPage();
                        return
                    }
                    distance -=1;
                    scroll.style.top =top + distance+'px';
                    },1);
                };
                scroll.addEventListener('touchmove',move);
                scroll.addEventListener('touchend',end);
            },false);
        },
        methods:{
            getPage(){
                if(this.hasMore&&!this.isLoading){
                    this.isLoading=true;
                    pagination(this.offset).then((res)=>{
                    this.books=this.books.concat(res.books);
                    this.hasMore=res.hasMore;
                    this.isLoading=false;
                    this.offset=this.books.length;
                    });
                }         
            },
            addMore(){
                this.getPage();
            },
            add(book){
                this.$store.commit(Types.ADD_CART,book);
            },
            loadMore(){
                clearTimeout(this.timer);
                this.timer=setTimeout(()=>{
                    let {scrollTop,clientHeight,scrollHeight}=this.$refs.scroll;
                    if(scrollTop+clientHeight+20>=scrollHeight){
                        this.getPage();
                    }
                },20);
                

            },
            getBooks(){
                getBook().then((res)=>{
                    this.books=res;
                });
            },
            remove(id){
                // 删除可以在获取下，但是这样会增加请求
                removeBook(id).then((res)=>{
                    // console.log(res);
                });
                this.books=this.books.filter(item=>{
                    return item.bookId!==id;
                });
            }
        }
    }
</script>
<style lang='scss' scoped>
    .content{
        ul{
            padding: 10px;
            li{
                display: flex;
                padding: 10px;
                border-bottom: 1px solid #f1f1f1;
                &:last-of-type{
                    border-bottom: none;
                }
                .img-wrap{
                    width: 160px;
                    text-align: center;
                }
                img{
                    width: 73px;
                    height: 95px;
                    display: inline-block;
                }
                h4{
                    height: 20px;
                    line-height: 20px;
                    font-size: 17px;
                    overflow: hidden;
                    color: #6c6c6c;
                    font-weight: normal;
                }
                p{
                    margin: 2px 0;
                    height: 36px;
                    line-height: 18px;
                    overflow: hidden;
                    font-size: 13px;
                    color: #838383;
                }
                strong{
                    color: #f66d00;
                    font-size: 14px;
                }
                button{
                    display: block;
                    // background: #999;
                    color: #fff;
                    border-radius: 3px;
                    border: none;
                    padding: 4px 10px;
                    outline: none;
                    &.green{
                        margin-right: 10px;
                        background: -webkit-gradient(linear,left center,right center,from(#39c862),to(#26b56b));
                    }
                }
                .btn-list{
                    display: flex;
                    justify-content:flex-end;
                }
            }
        }
        .more{
            font-size: 18px;
            line-height: 25px;
            text-align: center;
        }
    }
</style>

