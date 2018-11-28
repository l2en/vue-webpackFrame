<style  rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div class="footer-wrapper">
    <div class="footer-wrapper-slogan wd-70">
      <span class="footer-wrapper-slogan-item">
        <img src='~@/assets/ico/footer-fast.png'/>
        <span class="ml-10">品类齐全，轻松购物</span>
      </span>
      <span class="footer-wrapper-slogan-item">
        <img src='~@/assets/ico/footer-fast.png'/>
        <span class="ml-10">极速物流，极速送达</span>
      </span>
      <span class="footer-wrapper-slogan-item">
        <img src='~@/assets/ico/footer-good.png'/>
        <span class="ml-10">正品行货，精致服务</span>
      </span>
      <span class="footer-wrapper-slogan-item">
        <img src='~@/assets/ico/footer-less.png'/>
        <span class="ml-10">天天低价，畅选无忧</span>
      </span>
    </div>
    <div class="footer-wrapper-services wd-70">
      <div class="footer-wrapper-services-item" v-for='(item, index) in servicesItems' :key='index'>
        <h3>{{item.title}}</h3>
        <a v-for='(oneItem,index) in item.items' :key='index'>{{oneItem}}</a>
      </div>
    </div>
    <p class="fs-14 footer-wrapper-company gray mt-20">
      <a>利群集团</a> | 
      <a>利群网</a>
    </p>
    <p class="fs-14 footer-wrapper-company gray mt-10">
      山东省青岛市市北区合肥路686号 Tel: 0532-66025052 E-mail: lqyaopin@163.com
    </p>
    <p class="fs-14 footer-wrapper-company gray mt-10 mb-0">
      <img src="~@/assets/imgs/busLice.png" class="ml-40"/>
      <img src="~@/assets/imgs/alipay.png" class="ml-40"/>
      <img src="~@/assets/imgs/bankpay.png" class="ml-40"/>
    </p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      servicesItems: [
        {
          title: "购物指南",
          items: ["积分政策", "会员注册", "购药流程", "安全购药"]
        },
        {
          title: "关于支付",
          items: ["发票制度", "支付方式"]
        },
        {
          title: "售后服务",
          items: ["投诉与建议", "退款说明", "退换货政策"]
        },
        {
          title: "帮助中心",
          items: ["常见问题", "密码找回", "评价规则"]
        },
        {
          title: "关于配送",
          items: ["收货验货", "配送费用", "配送方式", "到货时间"]
        }
      ]
    };
  },
  props: {},
  methods: {}
};
</script>

