import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
// import Home from '../components/Home.vue'
// import List from '../components/List.vue'
// import Add from '../components/Add.vue'
// import Collect from '../components/Collect.vue'
// import Detail from '../components/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: resolve=>require(['../components/Home.vue'],resolve),
      meta: {
        keepAlive: true,
        title: '首页'
      }
    },
    {
      path: '/list',
      component: resolve=>require(['../components/List.vue'],resolve),
      meta: {title:'列表页'}
    },
    {
      path: '/collect',
      component: resolve=>require(['../components/Collect.vue'],resolve),
      meta: {title:'收藏'}
    },
    {
      path: '/add',
      component: resolve=>require(['../components/Add.vue'],resolve),
      meta: {title:'添加'}
    },
    {
      path: '/detail/:id',
      name: "detail",
      component: resolve=>require(['../components/Detail.vue'],resolve),
      meta: {title:'详情页'}
    },
    {
      path: '*',
      redirect:'/home'
    },
  ]
})
