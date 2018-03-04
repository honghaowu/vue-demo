<template>
  <div>
      <my-header>首页</my-header>
      <div class="content">
        <my-loading class="load" v-if="loading">数据加载中...</my-loading>
        <template v-else>
            <my-swiper :sliders="sliders"></my-swiper>
            <div class="container">
            <h3>热门图书</h3>
            <ul>
                <li v-for='hot in hotBooks'>
                    <img :src="hot.bookCover" alt="">
                    <h6>{{hot.bookName}}</h6>
                </li>
            </ul>
        </div>
        </template>
      </div>
  </div>
</template>
<script>
import myHeader from '../base/Header.vue';
import mySwiper from '../base/Swiper.vue';
import myLoading from '../base/Loading.vue';
import {getSliders,getHotBook, getAll} from '../api/index.js';
    export default {
        name: 'home',
        data(){
            return {
                sliders:[],
                hotBooks:[],
                loading: true
            }
        },
        components: {
            myHeader,
            mySwiper,
            myLoading
        },
        created(){
            this.getData();
            // this.getSlider(),
            // this.getHot()
        },
        methods: {
            getData(){
                getAll().then(([sliders,hotBooks])=>{
                    this.sliders=sliders;
                    this.hotBooks=hotBooks;
                    this.loading=false;
                });
            }
            // getSlider(){
            //     getSliders().then((res)=>{
            //         // console.log(res);
            //         this.sliders=res;
            //     });
            // },
            // getHot(){
            //     getHotBook().then((res)=>{
            //         console.log(res);
            //         this.hotBooks=res;
            //     });
            // }
        }
    }
</script>
<style lang='scss' scoped>
    .container{
        width: 90%;
        margin: 0 auto;
        h3{
            padding: 5px 0;
            color: #333;
        }
        ul{
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 10px;
            li{
                width: 50%;
                text-align: center;
                margin-top: 20px;
                img{
                    width: 80%;
                    display: inline-block;
                    box-shadow: 0 0 12px #ccc;
                }
                h6{
                    width: 90%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 16px;
                    text-align: center;
                    font-weight: normal;
                    line-height: 30px;
                }
            }
        }
    }
</style>

