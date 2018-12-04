<template>
  <div id="home">
      <search-bar>
            <van-icon class-prefix="iconfont" name="bell" slot="left-icon"></van-icon>
          <van-icon class-prefix="iconfont" name="search" slot="search-icon"></van-icon>
          <span slot="search-text" @click="show = true">2018秋冬款女装</span>  
          <van-icon class-prefix="iconfont" name="ico-category" slot="right-icon"></van-icon>  
      </search-bar>

      <van-popup v-model="show" position="top" :overlay="false">
          <div class="popup-cont">
              <form action="/">
                <van-search
                  v-model="value"
                  placeholder="请输入搜索关键词"
                  show-action
                  @cancel="onCancel"
                />
              </form>
          </div>
      </van-popup>
      <div class="main">
          <van-swipe class="gallery" :autoplay="4000" indicator-color="white">
              <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
              </van-swipe-item>
          </van-swipe>
          <ul class="navbar">
            <li v-for="item in navList" >
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
          <div class="sellerListCont">
              <div class="sellerListTitle">
                  <van-row>
                      <van-col span="6" offset="10" class="titleCont">畅销榜单</van-col>
                      <van-col span="6" offset="2">查看更多<van-icon class-prefix="iconfont" name="gengduo" /></van-col>
                  </van-row>
              </div>
              <ul>
                <li v-for="(item,idx) in sellerList" :key="item.idx" class="bestSellerList">
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
          <div class="brand-area-cont">
              <van-row class="brand-area">
                  <van-col span="6" offset="10" class="titleCont">品牌专区</van-col>
              </van-row>
              <ul class="brand-area-bar">
                  <li v-for="item in brandList" >
                    <img  v-lazy="item.img" >
                    <span>{{item.text}}</span>
                  </li>
              </ul>
          </div>
          <div class="brand-origin-cont">
              <van-row class="brand-origin">
                  <van-col span="6" offset="10" class="titleCont">品牌溯源</van-col>
                  <van-col span="6" offset="2">查看更多<van-icon class-prefix="iconfont" name="gengduo" /></van-col>
              </van-row>
              <ul class="brand-origin-bar">
                  <li v-for="item in brandOriginList" >
                    <img  v-lazy="item.img" >
                    <span>{{item.text}}</span>
                  </li>
              </ul>
          </div>
          
      </div>
      <div class="footer">
      </div> 
  </div>
</template>

<script>
import '../style/sass/home.scss'
import SearchBar from '../components/common/searchbar'
export default {
  name: 'Home',
  data(){
    return{
      show: false,
      value: '',
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
      navList:[
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
      brandList:[
        {
          img:'/static/img/home/brand1.png',
          text:'专业呵护肠道安全健康'
        },
        {
          img:'/static/img/home/brand1.png',
          text:'有机身体护理明星'
        },
        {
          img:'/static/img/home/brand1.png',
          text:'千万妈妈信赖之选'
        },
        {
          img:'/static/img/home/brand1.png',
          text:'澳新第一山羊奶品牌'
        },
        {
          img:'/static/img/home/brand1.png',
          text:'医美级护肤专研'
        },
        {
          img:'/static/img/home/brand1.png',
          text:'韩国专业SPA护肤'
        }
      ],
      brandOriginList:[
        {
          img:'/static/img/home/brandorigin1.png',
          text:'独探访家范冰冰推荐椰子油产品大营--MELROSE总部'
        },
        {
          img:'/static/img/home/brandorigin1.png',
          text:'LOVENKINS原材料产地--达尔文探访之旅'
        },
        {
          img:'/static/img/home/brandorigin1.png',
          text:'独探访家范冰冰推荐椰子油产品大营--MELROSE总部'
        }
      ],
      sellerList:[
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
    onCancel(){
      this.show = false;
    }
  },
  components:{
    SearchBar
  }

}
</script>

<style>

</style>