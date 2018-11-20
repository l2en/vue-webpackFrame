import axios from 'axios'

import router from '../router/index'
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = ''
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`   // 添加请求头
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          localStorage.clear('token')
          router.replace({
            path: 'login',
            // query: { redirect: router.currentRoute.fullPath }
          })
      }
    }
    return Promise.reject(error)
  })

export default axios
