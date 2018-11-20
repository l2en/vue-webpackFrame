import api from 'api/api'
import axios from 'services/axios'

const login = {
  state: {
    isLogin: false,
    token:'',
  },
  mutations: {
    login:(state, loginInfo) => {
      state.isLogin = isLogin
    },
    setLoginState: (state, isLogin) => {
      state.isLogin = isLogin
    },
  },
  actions: {
    login({commit}, loginObj) {
      return new Promise((resolve, reject) => {
        const {data} = res
        if(data) {
          localStorage.setItem('token', data.token)
          sessionStorage.setItem('isLogin', true)
          commit('setLoginState', true)
          resolve(res)
        }
      }).catch(error => {
        reject(error)
      })
    },
  }
}

export default login
