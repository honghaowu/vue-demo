import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import page from '@/components/page'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import Bar from '@/components/left'
import Baz from '@/components/right'
import news from '@/components/params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:  '/index'
    },{
      path: '/index',
      name: 'index',
      components: {
        default: index,
        a: Bar,
        b: Baz
      }
    },{
      path: '/page',
      name: 'page',
      component: page,
      children:[{
        path: '/page',
        redirect: '/page/page1'
      },{
        path: 'page1',
        name: 'page1',
        component: page1
      },{
        path: 'page2',
        name: 'page2',
        component: page2
      }]
    },{
      path: '/new/:id/:title',
      name: news,
      component:news
    }

  ]
})
