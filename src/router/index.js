import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Cart from '../components/Cart'
import Share from '../components/Share'
import User from '../components/User'
import Setting from '../components/userPage/Setting'
import Order from '../components/userPage/Order'
import BrandDetail from '../components/homepage/brandDetail'
import ItemDetail from '../components/homepage/ItemDetail'
import Bell from '../components/homepage/Bell'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'H',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/share',
      name: 'Share',
      component: Share
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/user',
      name: 'User',
      component: User,
    },
    {
      path: '/branddetail/:goodsId',
      name: 'BrandDetail',
      component: BrandDetail,
      props: true
    },
    {
      path: '/itemdetail',
      name: 'ItemDetail',
      component: ItemDetail
    },
    {
      path: '/bell',
      name: 'Bell',
      component: Bell
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
    
  ]
})
