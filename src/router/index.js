import Vue from 'vue'
import Router from 'vue-router'

import User from 'pages/User'
import Register from 'pages/User/Register'
import UserProfile from 'pages/User/UserProfile'
import Forget from 'pages/User/Forget'
import Login from 'pages/User/Login'

import Cart from 'pages/Cart'
import Home from 'pages/Home'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      component: User,
      children: [
        {
          path: 'login',
          name:'login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Register,
        },
        {
          path: 'userProfile',
          name: 'userProfile',
          component: UserProfile,
        },
        {
          path: 'forget',
          name: 'forget',
          component: Forget,
        },
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
  ]
})
