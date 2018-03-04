// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
// import 'swiper/dist/css/swiper.css'
require('swiper/dist/css/swiper.min.css');

Vue.config.productionTip = false
// 导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
//全局使用
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload,{
  preLoad: 1.2,
  error: "",
  loading: 'http://img.zcool.cn/community/01ec5a5996ac89a8012156033739b5.gif'
  
});
//进入路由之前，都会执行的方法
router.beforeEach(function(to,from,next){
  document.title=to.meta.title;
  next();
});
import store from './store/index.js';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
