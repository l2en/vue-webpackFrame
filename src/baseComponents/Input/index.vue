<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>

</style>

<template>
  <div class='__input-wrapper'>
    <i :class="icoClass"></i>
    <input :type="inputType"  :class="inputClass" :placeholder="placeholder"/>
  </div>
</template>

<script>
export default {
  props: {
    icon:{
      type:String,
      default: 'icon-user'
    },
    inputType: {
      type: String,
      default: "text"
    },
    inputWidth:{
      type: String,
      default: '369px'
    },
    placeholder:{
      type: String,
      default:''
    }
  },
  components: {},
  computed: {
    inputClass() {
      return [
        '__input-content','pl-12','fs-17','fw-400'
      ];
    },
    icoClass(){
      return[
        '__input-wrapper-icon','iconfont', 'gray',
        `${this.icon}`
      ]
    }
  },
  methods: {}
};
</script>
