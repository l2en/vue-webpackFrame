<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>

</style>

<template>
  <div>
    <button :class="ButtonClass">登录</button>
  </div>
</template>

<script>
export default {
  props: {
    buttonText:{
      type: String,
      default: ''
    }
  },
  computed:{
    ButtonClass(){
      return [
        '__Button', 'fs-18', 'btnBlue',
        `${buttonText}`
      ]
    }
  }
}
</script>
