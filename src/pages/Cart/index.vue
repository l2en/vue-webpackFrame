<style rel="stylesheet/scss" lang="scss" src='./index.scss' scoped>
</style>

<template>
  <div class="cart-wrapper">
    <LogoDis disText="购物车" />
    <div class="p-20 wd-70" style="background:#fff">
      <at-table :columns="columns3" :data="data2" optional></at-table>
    </div>
  </div>
</template>

<script>
import LogoDis from "components/LogoDis";

export default {
  data() {
    return {
      columns3: [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "年龄",
          key: "age",
        },
        {
          title: "地址",
          key: "address"
        },
        {
          title: "操作",
          render: (h, params) => {
            return h("div", [
              h(
                "AtButton",
                {
                  props: {
                    size: "small",
                    hollow: true
                  },
                  style: {
                    marginRight: "8px"
                  },
                  on: {
                    click: () => {
                      this.$Message(params.item.name);
                    }
                  }
                },
                "查看姓名"
              ),
              h(
                "AtButton",
                {
                  props: {
                    size: "small",
                    hollow: true
                  },
                  on: {
                    click: () => {
                      this.$Message(params.item.address);
                    }
                  }
                },
                "查看地址"
              )
            ]);
          }
        }
      ],
      data2: [
        {
          name: "库里",
          age: 18,
          address: "深圳市宝安区创业一路"
        },
        {
          name: "詹姆斯",
          age: 25,
          address: "广州市天河区岗顶"
        },
        {
          name: "科比",
          age: 24,
          address: "上海市浦东新区"
        },
        {
          name: "杜兰特",
          age: 22,
          address: "深圳市南山区深南大道"
        }
      ]
    };
  },
  components:{
    LogoDis
  }
};
</script>

