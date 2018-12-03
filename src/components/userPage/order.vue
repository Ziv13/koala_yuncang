<template>
<div id="order">
    <div id="setting">
            <van-nav-bar
              title="订单管理"
              left-text="返回"
              left-arrow
              @click-left="onClickLeft"
            />
    </div>
    <van-tabs v-model="active" animated >
            <van-tab  v-for="(item,idx) in tabList" :title="item" :key="item.idx" style="flex-basis: 15%;">
              <div class="tab-cont">
                  <span>暂时没有内容,稍后再来看看</span>
              </div>
                
            </van-tab>
          </van-tabs>
</div>
</template>

<script>
export default {
name: 'Order',
data(){
    return{
        active:'0',
        tabList:[
            '全部',
            '待付款',
            '待发货',
            '待收货',
            '已完成'
        ]
    }
},
methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components:{
  
  }
}
</script>

<style lang="scss">
#order {
        .tablen{
            flex-basis: 15%;
        }
        .tab-cont {
            width:100%;height:200px; padding:60px 80px;
            span{color:#ccc;font-size: 16px; text-align:center;}
        }
}
</style>