<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div>
    <div class="register-main-loginPanel-title">
      <span class="fs-25">注册新用户</span>
      <a class="fs-15 blue" @click='toLogin'>已有账号，快捷登录</a>
    </div>
    <div class="register-main-loginPanel-main pt-36">
      <l-input type="text" v-model='phone' :errortips='phoneErrortips' placeholder="手机号" icon='icon-user'/>
      <l-input type="text" v-model="captcha" @click="sendVerCode" :errortips='pwsErrortips' :suffixText='suffixText'  icon='icon-Verification' class="mt-20" placeholder="输入验证码"/>
      <l-input type="password" v-model="password" icon='icon-psw' class="mt-20" placeholder="密码"/>
      <l-input type="password" v-model="repassword" :errortips='confirmErrortips' @blur="pswConfirm" icon='icon-psw' class="mt-20" placeholder="确认密码"/>
      <l-verify class="mt-20" @success="verifySuccess"/>
      <div class="fs-15 mt-25 gray">
        <input type="checkbox" ref="registerProtocol"/>
        <span>我已阅读并同意<a class="blue">《服务协议》</a></span>
      </div>
      <l-button type='primary' @click="handleRegister" class="mt-20">立即注册</l-button>
    </div>
  </div>
</template>

<script>
import api from "./api.js";

import LInput from "baseComponents/LInput";
import LButton from "baseComponents/LButton";
import LVerify from "baseComponents/LVerify";

import Header from "components/Header";

export default {
  components: {
    Header,
    LInput,
    LButton,
    LVerify
  },
  data() {
    return {
      name: "",
      password: "",
      confirmPassword: "",
      phoneErrortips: "",
      pwsErrortips: "",
      verifyErrortips: "",
      confirmErrortips: "",

      isPassverfy: false,
      reSendVerCode: true,
      timeToDown: 60,
      suffixText: "获取验证码",
      phone: "",
      captcha: "",
      password: "",
      repassword:""
    };
  },
  props: {},
  watch: {},
  methods: {
    // 滑动验证成功
    verifySuccess() {
      this.isPassverfy = true;
    },
    // 已有账号，去登陆
    toLogin() {
      this.$router.push({ name: "login" });
    },
    // 发送验证码
    sendVerCode() {
      if (!this.reSendVerCode) return;
      this.$http.get(`${sendCode}/${this.phone}`);
      this.reSendVerCode = false;
      let timeOfDown = setInterval(() => {
        if (this.timeToDown <= 0) {
          clearInterval(timeOfDown);
          this.timeToDown = 60;
          this.reSendVerCode = true;
          this.suffixText = `获取验证码`;
          return;
        }
        this.timeToDown -= 1;
        this.suffixText = `${this.timeToDown}s后重发`;
      }, 1000);
    },
    // 校验密码是否一致
    pswConfirm() {
      if(this.repassword != this.password){
        this.confirmErrortips = '两次密码不一致'
      }
    },
    // 注册
    handleRegister(event) {
      this.$emit('handleRegisterSuccess',event);return;
      let isChecked = this.$refs.registerProtocol.checked
      if(!isChecked) {
        this.$Notify({
          message: '请勾选服务协议',
          duration: 2000,
          type: 'warning',
        })
        return
      }
      if(this.repassword != this.password) return;
      let registrationObj = {};
      registrationObj.phone = this.phone;
      registrationObj.password = this.repassword;
      registrationObj.captcha = this.captcha;
      this.$http.post(api.registration, registrationObj).then(res => {
        const {code} = res
        if(code == 201){
          this.$Message.warning('用户已存在，不能重复注册')
          return
        }
        if(code == 200){
          this.$emit('handleRegisterSuccess',event)
        }
      });
    }
  }
};
</script>

