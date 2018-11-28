<style  rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div class="LogoDis-logo" style="border: 1px red soild">
    <div class="LogoDis-logo-content">
      <img src='/static/images/logo.png' alt="利群医药商城" title="利群医药商城"/>
      <h1 style="display: none">利群医药商城</h1>
      <span class="LogoDis-logo-content-title ml-20 pl-10">{{disText}}</span>
    </div>
  </div>
</template>

<script>

export default {
  components:{

  },
  props:{
    disText:{
      type:String,
      default:''
    }
  },
  methods:{

  }
  
}
</script>

