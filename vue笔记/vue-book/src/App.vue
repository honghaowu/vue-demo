<template>
  <div id="app">
    <transition name="fade">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
    </transition>
    <transition name="fade">
        <router-view v-if="!$route.meta.keepAlive"></router-view>  
    </transition>
    <tab></tab>
  </div>
</template>

<script>
import tab from './base/Tab.vue';
export default {
  name: 'App',
  components:{
    tab
  }
}
</script>

<style>
 *{
   margin: 0;
   padding: 0;
   }
 ul,li{
   list-style: none;
   }
 a{
   text-decoration: none;
   }
  input,buttom{
    -webkit-apperance:none;
  }
  .content{
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
    overflow: auto;
  }
  .fade-enter,.fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active,.fade-leave-active{
    transition: opacity .3s linear;
  }
</style>
