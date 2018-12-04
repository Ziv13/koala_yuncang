<template>
  <div id="cart">
      <van-nav-bar title="购物车"/>
      <div class="sellerListCont">
        <ul>
          <li v-for="(item,idx) in sellerList" :key="item.idx" class="bestSellerList">
              <van-row gutter="20" >
                  <van-col span="8" class="img-box">
                    <img v-lazy="item.img" class="list-img" >
                  </van-col>
                  <van-col span="16" class="list-info">
                    <span class="description">{{item.description}}</span>
                    <span class="bestPrice">&yen;{{item.bestPrice}}</span>
                    <span class="priceText">&#40; 含税&yen;{{item.taxPrice}}&#41;</span>
                    <van-stepper  :step="1"/>
                  </van-col>
              </van-row>
          </li>
        </ul>
    
    
    
      </div>
      <van-submit-bar class="count"
          :price="3050"
          button-text="结算"
          @submit="onSubmit"
      >
          <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
  </div>
  
</template>

<script>
import '../style/sass/cart.scss'
export default {
  name: 'Cart',
  data(){
    return{
      checked: true,
      sellerList:[
              {
                img:'/static/img/home/sellerlist1.png',
                description:'vida Glow 深海鱼胶原蛋白粉多口味可选...',
                bestPrice:'389.18',
                taxPrice:'36.10'
              },{
                img:'/static/img/home/sellerlist1.png',
                description:'vida Glow 深海鱼胶原蛋白粉多口味可选...',
                bestPrice:'389.18',
                taxPrice:'36.10'
              }
      ]
    }
  },
  methods:{
      onSubmit(){
        console.log(111)
      }
  }
}
  
</script>

<style >
</style>