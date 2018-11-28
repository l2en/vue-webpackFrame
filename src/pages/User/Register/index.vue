<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div>
    <LogoDis disText='欢迎加入'/>
    <div class="register-main">
      <div class="register-main-loginPanel p-30 wd-70">
        <RegisterSuccess v-if='isRegisterSuccess' @backToPrePage='backToPrePage'/>
        <Register v-else @handleRegisterSuccess='handleRegisterSuccess'/>
      </div>
    </div>
  </div>
</template>

<script>
import api from "./api.js";

import Header from "components/Header";
import LogoDis from "components/LogoDis";

import Register from './components/Register'
import RegisterSuccess from './components/RegisterSuccess'

export default {
  components: {
    Header,
    LogoDis,
    Register,
    RegisterSuccess
  },
  data() {
    return {
      isError: false,
      reSendVerCode: true,
      timeToDown: 30,
      isRegisterSuccess: false
    };
  },
  props: {},
  methods: {
    handleRegister(){
      this.$router.push({name: 'registersuccess'})
    },
    sendVerCode(){
      let timeOfDown = setInterval(()=>{
        if(this.timeToDown <= 0){
          clearInterval(timeOfDown);
          this.reSendVerCode = true
          return
        }
        this.reSendVerCode = false
        this.timeToDown =this.timeToDown - 1
      },1000)
    },
    backToPrePage(){
      this.$router.push({name: 'login'})
    },
    handleRegisterSuccess(){
      this.isRegisterSuccess = true
    }
  }
};
</script>

