import Vue from 'vue'
import Router from 'vue-router'
import HomeRouter from './homeRouter.js'
import BrandRouter from './brandRouter.js'
import MineRouter from './mineRouter.js'
import ShopRouter from './shoppingRouter.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    HomeRouter,
    BrandRouter,
    MineRouter,
    ShopRouter ,
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
