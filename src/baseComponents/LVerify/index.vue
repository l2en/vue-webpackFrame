<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div class="_Verify-wrapper"> 
    <div class="drag" ref="dragDiv">
      <div class="drag_bg"></div>
      <div class="drag_text">{{confirmWords}}</div>
      <div ref="moveDiv" @mousedown="mousedownFn($event)" :class="{'handler_ok_bg':confirmSuccess}" class="handler handler_bg" style="position: absolute;top: 0px;left: 0px;height:100%"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beginClientX: 0 /*距离屏幕左端距离*/,
      mouseMoveStata: false /*触发拖动状态  判断*/,
      maxwidth: "" /*拖动最大宽度，依据滑块宽度算出来的*/,
      confirmWords: "拖动滑块验证" /*滑块文字*/,
      confirmSuccess: false /*验证成功判断*/
    };
  },
  methods: {
    //mousedown 事件
    mousedownFn: function(e) {
      if (!this.confirmSuccess) {
        e.preventDefault && e.preventDefault(); //阻止文字选中等 浏览器默认事件
        this.mouseMoveStata = true;
        this.beginClientX = e.clientX;
      }
    }, 

    //验证成功函数
    successFunction() {
      this.confirmSuccess = true;
      this.confirmWords = "验证通过";
      if (window.addEventListener) {
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mousemove", this.mouseMoveFn);
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mouseup", this.moseUpFn);
      } else {
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mouseup", () => {});
      }
      document.getElementsByClassName("drag_text")[0].style.color = "#fff";
      document.getElementsByClassName("handler")[0].style.left =
        this.maxwidth + "px";
      document.getElementsByClassName("drag_bg")[0].style.width =
        this.maxwidth + "px";
        this.$emit('success')
    }, 

    //mousemove事件
    mouseMoveFn(e) {
      if (this.mouseMoveStata) {
        let width = e.clientX - this.beginClientX;
        if (width > 0 && width <= this.maxwidth) {
          document.getElementsByClassName("handler")[0].style.left =
            width + "px";
          document.getElementsByClassName("drag_bg")[0].style.width =
            width + "px";
        } else if (width > this.maxwidth) {
          this.successFunction();
        }
      }
    },

    //mouseup事件
    moseUpFn(e) {
      this.mouseMoveStata = false;
      var width = e.clientX - this.beginClientX;
      if (width < this.maxwidth) {
        document.getElementsByClassName("handler")[0].style.left = 0 + "px";
        document.getElementsByClassName("drag_bg")[0].style.width = 0 + "px";
      }
    }
  },
  mounted() {
    this.maxwidth =
      this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth;
    document
      .getElementsByTagName("html")[0]
      .addEventListener("mousemove", this.mouseMoveFn);
    document
      .getElementsByTagName("html")[0]
      .addEventListener("mouseup", this.moseUpFn);
  }
};
</script>
