import api from '../api'
import axios from 'services/axios'

function storeToLocalStore(state) {
  window.localStorage.setItem("userInfo", JSON.stringify(state));
}

const user = {
  state: {
    isLogin: false,
    userName: '',
    userId: ''
  },
  mutations: {
    SET_USERINFO: (state, userLoginInfo = {}) => {
      state.isLogin = userLoginInfo.loginState || false
      state.userName = userLoginInfo.userName || ''
      state.userId = userLoginInfo.userId || ''
      storeToLocalStore(state)
    }
  },
  actions: {
    login({ commit }, loginObj) {
      return new Promise((resolve, reject) => {
        axios.post(api.login, loginObj).then(res => {
          res = {
            data: {
              token: "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJuaW5naGFvLm5ldCIsImV4cCI6IjE0Mzg5NTU0NDUiLCJuYW1lIjoid2FuZ2hhbyIsImFkbWluIjp0cnVlfQ.SwyHTEx_RQppr97g4J5lKXtabJecpejuef8AqKYMAJc"
            },
            message: '成功',
            code: 200
          }
          if (res.code != 200) return;
          const { data } = res;
          if (data) {
            localStorage.setItem('token', JSON.stringify(data.token))
            commit('SET_USERINFO', { userId: '0001', userName: loginObj.phone, loginState: true })
          }
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    logout({ commit }, userid) {
      return new Promise((resolve, reject) => {
        axios.get(`${api.logout}/${userid}`).then(res => {
          res = {
            message: "成功",
            code: 200
          }
          if (res.code != 200) return;
          localStorage.removeItem('token')
          commit('SET_USERINFO')
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
