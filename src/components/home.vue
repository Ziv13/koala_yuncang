<template>
  <div id="home">
      <div class="searchbox">
        <van-search placeholder="请输入搜索关键词" v-model="result" />
      </div>
      <div class="main">
          <van-swipe class="gallery" :autoplay="4000" indicator-color="white">
              <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
              </van-swipe-item>
          </van-swipe>
          <ul class="navbar">
            <li v-for="item in navlist" >
              <img  v-lazy="item.img" >
              <span>{{item.text}}</span>
            </li>
          </ul>
          <div class="notice-cont">
              <div class="img-box">
                  <img :src="ttimg">
              </div>
              <div class="notice-bar">
                  <van-notice-bar :text="text" left-icon="http://pic.sfont.cn/svg/img/ff72c8.svg"/>
              </div>
             
              
          </div>
          <ul>
              <li v-for="(item,idx) in sellerlist" :key="item.idx" class="bestSellerList">
                  <van-row gutter="20" >
                      <van-col span="8" class="img-box">
                        <img v-lazy="item.img" class="list-img" >
                      </van-col>
                      <van-col span="16" class="list-info">
                        <span class="description">{{item.description}}</span>
                        <van-tag type="primary">{{item.mark}}</van-tag>
                        <span class="bestPriceText">{{bestPriceText}}&nbsp;&nbsp;&yen;{{item.bestPrice}}</span>
                        <span class="priceText">{{priceText}}&nbsp;&nbsp;<del>{{item.price}}</del></span>
                      </van-col>
                  </van-row>
              </li>
            </ul>
      </div>
      
  </div>
</template>

<script>
import '../style/sass/home.scss'
export default {
  name: 'Home',
  data(){
    return{
      msg: '首页',
      result:'',
      title:'2018秋冬款女装',
      text:'koala商城1.0版正式上线',
      bestPriceText:'含税优惠价',
      priceText:'含税售价',
      ttimg:'/static/img/home/sytt.png',
      
      images: [
      '/static/img/home/s1.jpg',
      '/static/img/home/s2.jpg',
      '/static/img/home/s3.jpg',
      ],
      navlist:[
        {
          img:'/static/img/home/list1.png',
          text:'今日活动'
        },
        {
          img:'/static/img/home/list1.png',
          text:'品牌街'
        },
        {
          img:'/static/img/home/list1.png',
          text:'折扣专区'
        },
        {
          img:'/static/img/home/list1.png',
          text:'必买推荐'
        },
        {
          img:'/static/img/home/list1.png',
          text:'最新推荐'
        },
        {
          img:'/static/img/home/list1.png',
          text:'直升初级vip'
        },
        {
          img:'/static/img/home/list1.png',
          text:'直升中级vip'
        },
        {
          img:'/static/img/home/list1.png',
          text:'直升高级vip'
        }
      ],
      sellerlist:[
        {
          img:'/static/img/home/sellerlist1.png',
          description:'vida Glow 深海鱼胶原蛋白粉多口味可选...',
          mark:'朱茵同款',
          bestPrice:'389.18',
          price:'430.18'
        },{
          img:'/static/img/home/sellerlist1.png',
          description:'vida Glow 深海鱼胶原蛋白粉多口味可选...',
          mark:'朱茵同款',
          bestPrice:'389.18',
          price:'430.18'
        },{
          img:'/static/img/home/sellerlist1.png',
          description:'vida Glow 深海鱼胶原蛋白粉多口味可选...',
          mark:'朱茵同款',
          bestPrice:'389.18',
          price:'430.18'
        },
      ]
    }
  },
  methods:{
  }

}
</script>

<style>
#home{
  
}
</style>