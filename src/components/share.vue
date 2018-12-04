<template>
  <div id="share">
      <van-nav-bar title="素材圈" />
        <search-bar>
            <van-icon class-prefix="iconfont" name="ico-category" slot="left-icon"></van-icon>
              <van-icon class-prefix="iconfont" name="search" slot="search-icon"></van-icon>
              <span slot="search-text" @click="show = true">搜索产品/标题</span>        
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
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-tabs>
            <van-tab v-for="(tab,idx) in tabList" :title="tab" :key="idx">
                <div class="tab-cont">
                    <forward-item></forward-item>
                    <span>暂时没有内容,稍后再来看看</span>
                </div>
            </van-tab>
        </van-tabs>
        </van-pull-refresh>
        
      
  </div>
</template>

<script>
  import '../style/sass/share.scss'
  import SearchBar from '../components/common/searchbar'
  import ForwardItem from '../components/common/forwardItem' 
export default {
  name: 'Share',
  data(){
    return{
      isLoading: false,
      show: false,
      value: '',
      tabList:[
            '全部',
            '已转发',
            '视频',
            '转发活动',
            'YpL',
            'UUU',
            'CCC',
            'GGG',
            'vvv'
        ]
    }
  },
  methods:{
    onCancel(){
      this.show = false;
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  },
  components:{
    SearchBar,
    ForwardItem
  }
}
</script>

<style>

</style>