<template>
  <div id="home">
      <div class="header">
      </div>

    <div class="main">
        <div class="swipe">
            <mt-swipe class="gallery" :auto="0">
              <mt-swipe-item :key="item.id" v-for="item in pics">
                    <img :src="item.imgUrl" alt="">
              </mt-swipe-item>
            </mt-swipe>
        </div>
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
      title:'2018秋冬款女装',
      pics:[
        {id:1 ,imgUrl:'../static/img/home/s1.jpg'},
        {id:2 ,imgUrl:'../static/img/home/s2.jpg'},
        {id:3 ,imgUrl:'../static/img/home/s3.jpg'}
      ]
    }
  }

}
</script>

<style>
#home{
  
}
</style>