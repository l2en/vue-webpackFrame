// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './services/axios'
import store from './store'
import AtComponents from 'at-ui'
import 'at-ui-style'
Vue.use(AtComponents)

Vue.config.productionTip = false
Vue.prototype.$http = axios

router.beforeEach((to, from, next) => {
  const nextRoute = ['cart', 'userProfile'];
  const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem('userInfo')) : {};
  console.log('登录状态',userInfo)
  if (nextRoute.indexOf(to.name) >= 0) {
    //未登录
    if (!userInfo.isLogin) {
      router.push({name: 'login'});
      return;
    }
  }
  //已登录的情况再去登录页，跳转至首页
  if (to.name === 'login') {
    if (userInfo.isLogin) {
      router.push({ name: 'home' });
      return;
    }
  }
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

