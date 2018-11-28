<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div class="register-success">
    <i class="iconfont icon-success fs-50" style="color: #56c874"></i>
    <p class="fs-24">恭喜您，注册成功！</p>
    <span><span>{{timeDown}}</span>s后进入首页</span>
    <l-button class="mt-20" type='primary' @click='backToPrePage'>马上登陆</l-button>
  </div>
</template>

<script>
import LButton from "baseComponents/LButton";

export default {
  components: {
    LButton
  },
  data() {
    return {
      timeDown: 3
    }
  },
  props: {},
  created(){
    this.handleTimeDown()
  },
  methods: {
    backToPrePage(event) {
      this.$emit("backToPrePage",event);
    },
    handleTimeDown(){
      let timedown = setInterval(()=>{
        if(this.timeDown <= 0){
          clearInterval(timedown)

          this.$router.push({ name: "home" })
          return
        }
        this.timeDown -=1
      },1000)
    },
  }
};
</script>

