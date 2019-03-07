import Vue from 'vue'
import Router from 'vue-router'

//懒加载路由
import Home from '../pages/Home/index.vue'
import List from '../pages/List/index.vue'
import Personal from '../pages/Personal/index.vue'
import SearchGoods from '../pages/SearchGoods/index.vue'
import DaRen from '../pages/SearchGoods/DaRen/index.vue'
import HOME from '../pages/SearchGoods/HOME/index.vue'
import ShaiDan from '../pages/SearchGoods/ShaiDan/index.vue'
import ShangXin from '../pages/SearchGoods/ShangXin/index.vue'
import TuiJian from '../pages/SearchGoods/TuiJian/index.vue'
import ShopCard from '../pages/ShopCart/index.vue'
import Login from '../pages/Login/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/list',
      component: List,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/personal',
      component: Personal,
    },
    {
      path: '/searchgoods',
      component: SearchGoods,
      meta: {
        showFooter: true
      },
      children:[
        {
          path: '/searchgoods/tuijian',
          component: TuiJian,
          meta: {
            showFooter: true
          },
        },
        {
          path: '/searchgoods/daren',
          component: DaRen,
          meta: {
            showFooter: true
          },

        },
        {
          path: '/searchgoods/shangxin',
          component: ShangXin,
          meta: {
            showFooter: true
          },
        },
        {
          path: '/searchgoods/shaidan',
          component: ShaiDan,
          meta: {
            showFooter: true
          },
        },
        {
          path: '/searchgoods/home',
          component: HOME,
          meta: {
            showFooter: true
          },
        },
        {
          path: '/',
          redirect: '/searchgoods/tuijian'
        }
      ]
    },
    {
      path: '/shopcard',
      component: ShopCard,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
