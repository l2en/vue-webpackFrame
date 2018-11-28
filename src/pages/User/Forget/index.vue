<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div>
    <LogoDis disText="找回密码"/>
    <div class="forget-main">
      <div class="forget-main-loginPanel p-30 wd-70">
        <div class="forget-main-loginPanel-title">
          <span class="fs-25">找回密码</span>
        </div>
        <div class="forget-main-loginPanel-main pt-36">
          <l-input
            type="text"
            v-model="phone"
            :errortips="phoneErrortips"
            placeholder="手机号"
            icon="icon-user"
          />
          <l-input
            type="number"
            v-model="captcha"
            @click="sendVerCode"
            :errortips="pswErrortips"
            :suffixText="suffixText"
            icon="icon-Verification"
            class="mt-20"
            placeholder="输入验证码"
          />
          <l-input
            type="password"
            v-model="newpassword"
            icon="icon-psw"
            class="mt-20"
            placeholder="新密码(6-20位)"
          />
          <l-verify @success="verifySuccess" class="mt-20"/>
          <l-button type="primary" @click="recoverPassword" class="mt-20">完成并登录</l-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "./api.js";

import LInput from "baseComponents/LInput";
import LButton from "baseComponents/LButton";

import Header from "components/Header";
import LogoDis from "components/LogoDis";
import LVerify from "baseComponents/LVerify";

export default {
  components: {
    Header,
    LInput,
    LButton,
    LogoDis,
    LVerify
  },
  data() {
    return {
      newpassword: "",
      phoneErrortips: "",
      pswErrortips: "",
      imgCodeErrortips: "",
      imgcaptcha: "",
      reSendVerCode: true,
      timeToDown: 60,
      suffixText: "获取验证码",
      phone: "",
      captcha: "",
      ispasseVerify: false
    };
  },
  props: {},
  watch: {},
  methods: {
    sendVerCode() {
      if (!this.reSendVerCode) return;
      console.log(1);
      this.reSendVerCode = false;
      this.$http.get(`${api.sms}/${this.phone}`);
      let reSend = setInterval(() => {
        if (this.timeToDown <= 0) {
          clearInterval(reSend);
          this.timeToDown = 60;
          this.suffixText = "获取验证码";
          this.reSendVerCode = true;
        }
        this.timeToDown -= 1;
        this.suffixText = `${this.timeToDown}s后重发`;
      }, 1000);
    },
    verifySuccess() {
      this.ispasseVerify = true;
    },
    recoverPassword() {
      if (!this.ispasseVerify) {
        this.$Message.warning("请拖动滑动进行验证");
        return;
      }
      let recoverObj = {};
      recoverObj.phone = this.phone;
      recoverObj.captcha = this.captcha;
      recoverObj.password = this.newpassword;
      this.$http.post(api.recoverPassword, recoverObj).then(res => {
        this.$router.push({name: 'login'})
      });
    }
  }
}
</script>

