<template>
  <div id="user">
      <div class="user-info-page">
          <div class="setup-page">
            <van-row>
                <van-col span="6" offset="8" class="titleCont">个人中心</van-col>
                <van-col span="4" offset="5">
                  <van-icon class-prefix="iconfont" name="libraryicon04" class="setup-icon"/>
                </van-col>
            </van-row>
          </div>
          <div class="user-info-card">
              <div class="user-img">
                <img :src="userInfo.userImg" >
              </div>
              <div class="user-text">
                  <div class="user-text-left">
                    <ul>
                      <li class="user-name">
                        {{userInfo.userName}}
                      </li>
                      <li class="decoration"></li>
                      <li>
                        <span>会员编号:&nbsp;</span>
                        {{userInfo.userNumber}}
                      </li>
                      <li>
                        <span>绑定手机:&nbsp;</span>
                        <span>{{userInfo.phoneStatus}}</span>
                      </li>
                    </ul>
                    
                  </div>
                  <div class="user-text-right">
                      <div class="member-icon">
                        <van-tag plain round  size="medium" color="#4BD6C1">
                          <van-icon class-prefix="iconfont" name="v1" />
                        </van-tag>
                        <div>{{userInfo.experience}}</div>
                      </div>
                      
                      <van-tag mark plain  size="medium" color="#4BD6C1" class="data-icon">
                          <van-icon class-prefix="iconfont" name="document" />
                          <span>完善资料</span>
                          <van-icon class-prefix="iconfont" name="gengduo" />
                      </van-tag>
                  </div>
              </div>
              <div class="vip-cont">
                  <van-row type="flex" >
                      <van-col span="6">
                          <van-icon class-prefix="iconfont" :name="userInfo.vipIcon" class="setup-icon"/>
                          <span>{{userInfo.vipLevel}}</span>
                      </van-col>
                      <van-col span="7">{{userInfo.vipText}}</van-col>
                      <van-col span="5">
                          <van-tag mark plain  size="medium" color="#4BD6C1" class="data-icon">
                              <span>{{userInfo.vipStatus}}</span>
                          </van-tag>
                        </van-col>
                    </van-row>
              </div>
          </div>
      
      </div>
      <div class="order-cont">
          <van-row class="order-title">
              <van-col span="6"  class="titleCont">我的订单</van-col>
              <van-col span="6" offset="12">全部订单<van-icon class-prefix="iconfont" name="gengduo" /></van-col>
          </van-row>
          <ul class="order-bar">
              <li v-for="item in orderList" >
                <van-icon class-prefix="iconfont" :name="item.name" />
                <span>{{item.text}}</span>
              </li>
          </ul>
      </div>
      <div class="service-cont">
          <van-row class="service-title">
              <van-col span="6"  class="titleCont">专属服务</van-col>
          </van-row>
          <ul class="service-bar">
              <li v-for="item in serviceList" >
                <van-icon class-prefix="iconfont" :name="item.name" />
                <span>{{item.text}}</span>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import '../style/sass/user.scss'
export default {
  name: 'User',
  data(){
    return{
      userInfo:{
          userImg:'/static/img/user/user01.jpg',
          userName:'毛仔',
          userNumber:2174,
          phoneStatus:'未绑定',
          experience:'402/600' ,
          vipIcon:'v',
          vipLevel:'开通初级vip',
          vipText:'享受全场8.5折优惠',
          vipStatus:'立即开通'
      },
      orderList:[
        {
        name:'daifukuan',
        text:'待付款'
        },
        {
        name:'daifahuo',
        text:'待发货'
        },
        {
        name:'daishouhuo',
        text:'待收货'
        },
        {
        name:'pinglun',
        text:'待评论'
        },
        {
        name:'tuikuan',
        text:'退款/售后'
        }
      ],
      serviceList:[
        {
        name:'daifukuan',
        text:'用户口碑'
        },
        {
        name:'daifahuo',
        text:'地址管理'
        },
        {
        name:'daishouhuo',
        text:'财务管理'
        },
        {
        name:'pinglun',
        text:'我的主页'
        },
        {
        name:'tuikuan',
        text:'我的券'
        },
        {
        name:'daishouhuo',
        text:'用户口碑收藏'
        },
        {
        name:'pinglun',
        text:'电子门票'
        },
        {
        name:'tuikuan',
        text:'我的等级'
        }
      ]
      
    }
  }

}
</script>

<style>

</style>
