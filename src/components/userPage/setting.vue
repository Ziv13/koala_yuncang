<template>
  <div id="setting">
      <van-nav-bar
        title="设置"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
  <show-item >
    <span slot="left-text">个人信息</span>
    <span slot="right-badge">1</span>
    <span slot="right-text"></span>
    <van-icon class-prefix="iconfont" name="gengduo" slot="right-icon"></van-icon>
  </show-item>
  <show-item >
      <span slot="left-text">账户管理</span>
      <span slot="right-badge"></span>
      <span slot="right-text"></span>
      <van-icon class-prefix="iconfont" name="gengduo" slot="right-icon"></van-icon>
  </show-item>
  <show-item >
        <span slot="left-text">实名认证</span>
        <span slot="right-text">未认证</span>
        <van-icon class-prefix="iconfont" name="gengduo" slot="right-icon"></van-icon>
  </show-item>

    <show-item class="clear">
      <span slot="left-text" >清除缓存</span>
      <span slot="right-text">4.15MB</span>
      <van-icon class-prefix="iconfont" name="gengduo" slot="right-icon"></van-icon>
    </show-item>
  
    <show-item class="help">
        <span slot="left-text">帮助中心</span>
        <span slot="right-badge"></span>
        <span slot="right-text"></span>
        <van-icon class-prefix="iconfont" name="gengduo" slot="right-icon"></van-icon>
    </show-item>
    <show-item >
          <span slot="left-text">用户服务协议</span>
          <span slot="right-badge"></span>
          <span slot="right-text"></span>
          <van-icon class-prefix="iconfont" name="gengduo" slot="right-icon"></van-icon>
    </show-item>

    <show-item class="share">
        <span slot="left-text">分享APP</span>
        <span slot="right-badge"></span>
        <span slot="right-text"></span>
        <van-icon class-prefix="iconfont" name="gengduo" slot="right-icon"></van-icon>
    </show-item>
    <show-item >
          <span slot="left-text">关于我们</span>
          <span slot="right-badge"></span>
          <span slot="right-text"></span>
          <van-icon class-prefix="iconfont" name="gengduo" slot="right-icon"></van-icon>
    </show-item>

  </div>
</template>
      
<script>
import ShowItem from '@/components/common/ShowItem'
import '../../style/sass/setting.scss'
export default {
  name: 'Setting',
  data(){
    return{
      
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components:{
    ShowItem
  }
}
</script>

<style>
</style>