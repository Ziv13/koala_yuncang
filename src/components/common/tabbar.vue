<template>    
<van-tabbar  :fixed="true" class="tabbar">
    <van-tabbar-item v-for="tab in tabs" :icon="tab.iconfont" :key="tab.key" :id="tab.key">
        <router-link :to="tab.link" tag="span" class="iconfont">
          {{tab.title}}
        </router-link>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
// import '../../style/sass/tab.scss'
export default {
  name: 'tabbar',
  data () {
    return {
      active: 0,
      tabs: [
        {
          key: 1,
          title: '首页',
          iconfont: 'home',
          link: '/home'
        }, {
          key: 2,
          title: '朋友圈',
          iconfont: 'star-o',
          link: '/share'
        }, {
          key: 3,
          title: '购物车',
          iconfont: 'cart',
          link: '/cart'
        }, {
          key: 4,
          title: '个人中心',
          iconfont: 'contact',
          link: '/user'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tabbar {
  max-width: 720px;
  margin: 0px auto;
  z-index: 999;
  background: #f4f3ef;
  height: 1.386rem;
  margin: 0 auto;
}

.icon {
  display: block;
  font-size: .666rem;
  text-align: center;
  height: .75rem;
  line-height: .75rem;
}
</style>
