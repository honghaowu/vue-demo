<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in sliders" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination: '.swiper-pagination',
          observeParents:true,
          loop: true
        }
      }
    },
    props:["sliders"],
    mounted() {
      
    }
  }
</script>
<style scoped>
  img{
    width: 100%;
  }
</style>
