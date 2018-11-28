<style  rel="stylesheet/scss" lang="scss" src='./index.scss' >
</style>

<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer class="mt-20"/>
  </div>
</template>

<script>
import Footer from 'components/Footer'
import Header from 'components/Header'

export default {
  name: 'App',
  components:{
    Footer,
    Header
  },
  created(){
    //在页面加载时读取localStorage里的状态信息
    localStorage.getItem("userInfo") && this.$store.replaceState(Object.assign(this.$store.state,{user:JSON.parse(localStorage.getItem("userInfo"))}));

    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload",()=>{
      console.log('刷新前')
        localStorage.setItem("userInfo",JSON.stringify(this.$store.state.user))
    })
  }
}
</script>
