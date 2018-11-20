import api from 'api/api'
import axios from 'services/axios'

const user = {
  state: {
    isLogin: false,
    userId: '',
    userName: '',
  },
  mutations: {
    setIsLogin: (state, isLogin) => {
      state.isLogin = isLogin
    },
  },
  actions: {
    loginInfo ({commit}, loginObj) {
      return new Promise((resolve, reject) => {
        // axios.post(api.login, loginObj).then(res => {
        //   const data = res.data.data
        //   if (data) {
        //     localStorage.token = data.token
        //     sessionStorage.isLogin = true
        //     commit('setIsLogin', true)
        //   }
        //   resolve(res)
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },
  }
}
export default user
