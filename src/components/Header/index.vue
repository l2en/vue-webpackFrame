<style  rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div>
    <div class="header">
      <div class="header-content">
        <span>
          <span class="header-content-mallName mr-10">利群网上医药商城</span>
          <span v-if='!isLogin'>
            <a class="header-content-register" @click="toRegister">注册 / </a>
            <a class="header-content-login" @click="toLogin">登录</a>
          </span>
          <span v-if='isLogin'>
            <a class="header-content-logined fw-600">{{userName}}</a>
            <a class="header-content-login" @click='signOut'>退出登录</a>
          </span>
        </span>

        <span>
          <a class="mr-10" @click="toMall">我的商城</a>
          <a class="mr-10 fs-12"><i class="iconfont icon-phone blue"></i>0532-66025052</a>
          <a class="mr-10">微信公众号</a>
          <a class="mr-10">帮助中心</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import api from './api.js'
import { mapActions } from "vuex";

export default {
  components: {},
  props: {},
  watch: {
    
  },
  computed: {
    isLogin() {
      return this.$store.state.user.isLogin || false;
    },
    userName(){
      return this.$store.state.user.userName;
    }
  },
  methods: {
    ...mapActions(["logout"]),
    toLogin() {
      this.$router.push({ name: "login" });
    },
    toRegister() {
      this.$router.push({ name: "register" });
    },
    signOut() {
        this.$Modal.confirm({
          title: '提示',
          content: '确定退出登录吗？',
          styles:{top: '200px'},
          maskClosable: false,
          cancelText: '取消',
          okText: '确定'
        }).then(() => {
          this.logout("0001").then(res => {
            if (res.code != 200) return;
            this.$router.push({ name: "login" });
          });
        }).catch(() => {
          console.log('点击了【取消】按钮')
        })
      
    },
    toMall(){
      this.$http.post(api.registration,{}).then(res=>{
          console.log('res')
      })
    }
  }
};
</script>

