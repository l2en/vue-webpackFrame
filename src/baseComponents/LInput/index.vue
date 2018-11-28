/**
  errortips: 错误提示文字，
  suffixText: 尾缀文字
*/

<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div style="height:50px">
    <div class='__input-wrapper' :style="errorStyle">
      <i :class="icoClass"></i>
      <input 
        :maxlength="maxlength"
        :type="type" 
        :class="inputClass" 
        :placeholder="placeholder"
        :value="value"
        @input="handleInput"
        @keyup.enter="handleEnter"
        @keyup="handleKeyup"
        @keypress="handleKeypress"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />
    <slot></slot>
      <a class="blue pl-5 __input-subffix" v-if='suffix' @click='handleClick'>{{suffixText}}</a>
    </div>
    <p class="__input-errortips" v-if='isError'>
      <i class="iconfont icon-wraning red mr-5"></i>
      <span class="red fw-500">{{errortips}}</span>
    </p>
  </div>
</template>

<script>
import * as _ from "lodash";

export default {
  data() {
    return {};
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "icon-user"
    },
    type: {
      type: String,
      default: "text"
    },
    inputWidth: {
      type: String,
      default: "369px"
    },
    placeholder: {
      type: String,
      default: ""
    },
    errortips: {
      type: String,
      default: ""
    },
    suffixText: {
      type: String,
      default: ""
    },
    maxlength:{
      type: String || Number,
      default: ''
    }
  },
  model: {
    prop: "value",
    event: "input"
  },
  components: {},
  created() {},
  computed: {
    isError() {
      return !_.isEmpty(this.errortips);
    },
    suffix() {
      return !_.isEmpty(this.suffixText);
    },
    inputClass() {
      return ["__input-content", "pl-12", "fs-17", "fw-400"];
    },
    errorStyle() {
      return this.isError ? { border: "1px red solid" } : {};
    },
    icoClass() {
      return ["__input-wrapper-icon", "iconfont", "gray", `${this.icon}`];
    }
  },
  methods: {
    handleEnter(event) {
      this.$emit("enter", event);
    },
    handleKeydown(event) {
      this.$emit("keydown", event);
    },
    handleKeypress(event) {
      this.$emit("keypress", event);
    },
    handleKeyup(event) {
      this.$emit("keyup", event);
    },
    handleIconClick(event) {
      this.$emit("click", event);
    },
    handleFocus(event) {
      this.$emit("focus", event);
    },
    handleBlur(event) {
      this.$emit("blur", event);
    },
    handleClick(event) {
      this.$emit("click", event);
    },
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
    handleChange(event) {
      this.$emit("change", event);
    }
  }
};
</script>
