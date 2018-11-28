<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div>
    <button @click='handleClickLink' :class="ButtonClass"><slot></slot></button>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "default"
    }
  },
  computed: {
    ButtonClass() {
      let btnType = "";
      switch (this.type) {
        case "primary":
          btnType = "btnbg-primary";
          break;
        case "danger":
          btnType = "btnbg-danger";
          break;
        default:
          btnType = "btnbg-default";
      }
      return ["__Button", "fs-18", `${btnType}`];
    }
  },
  methods:{
    handleClickLink(event) {
      this.$emit("click", event);
    },
  }
};
</script>
