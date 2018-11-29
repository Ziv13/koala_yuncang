import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Cart from '../components/Cart'
import Share from '../components/Share'
import User from '../components/User'

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
      component: User
    },
  ]
})
