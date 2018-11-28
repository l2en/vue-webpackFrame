<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div>
    <LogoDis disText='欢迎加入'/>
    <div class="login-main">
      <div class="login-main-loginPanel">
        <div class="login-main-loginPanel-title">
          <span class="fs-25">登录</span>
          <a class="fs-15 red" @click="toRegister">免费注册</a>
        </div>
        <div class="login-main-loginPanel-main pt-36">
          <l-input type="text"  icon='icon-user' v-model="phone" placeholder="手机号" :errortips='usernameErrortips'/>
          <l-input type="password" icon='icon-psw' v-model="password" class="mt-20" placeholder="密码" :errortips='pswErrortips'/>
          <l-verify class="mt-20" v-if='errorCount>=3' @success="verifySuccess"/>
          <div class="fs-15 mt-25 gray">
            <input type="checkbox"/>
            <span>自动登录</span> | <a @click="forget">忘记密码?</a>
          </div>
          <l-button type='primary' @click="handleLogin" class="mt-20">登录</l-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Mock from "mockjs";
import api from "./api.js";

import LInput from "baseComponents/LInput";
import LButton from "baseComponents/LButton";
import LVerify from "baseComponents/LVerify";

import Header from "components/Header";
import LogoDis from "components/LogoDis";

export default {
  components: {
    Header,
    LogoDis,
    LInput,
    LButton,
    LVerify
  },
  data() {
    return {
      phone: '',
      password: '',
      errorCount: 0,
      pswErrortips: "",
      usernameErrortips: "",
      isPassVerify: true
    };
  },
  props: {},
  watch:{
    errorCount(newVal, oldVal){
      if(newVal<3) return;
      this.isPassVerify = false
    }
  },
  computed: {},
  methods: {
    ...mapActions(["login"]),
    toRegister() {
      this.$router.push({ name: "register" });
    },
    handleLogin() {
      this.errorCount +=1
      if(!this.isPassVerify) return;
      let loginObj = {}
      loginObj.phone = this.phone
      loginObj.password = this.password
      this.login(loginObj).then(res => {
        const { code, message } = res
        if (code == 402) {
          this.usernameErrortips = message
          return
        }
        if (code == 403) {
          this.pswErrortips = message
          return
        }
        if (code == 200) {
          this.errorCount = 0
          this.pswErrortips = ""
          this.usernameErrortips = ""
          this.$router.push({ name: "home" })
        }
      });
    },
    verifySuccess(){
      this.isPassVerify = true
    },
    forget(){
      this.$router.push({name: 'forget'})
    }
  }
};
</script>

