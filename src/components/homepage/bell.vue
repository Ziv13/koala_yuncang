<template>
    <div id="bell">
        <van-nav-bar
            title="我的消息"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <ul>    
            <li class="bell-item nth1" >
                <div class="left">
                   <van-icon class-prefix="iconfont" name="yinlianglabashengyin-xianxing"  class="left-icon" ></van-icon> 
                </div>
                <div class="middle">
                    <p>云仓通知</p>
                    <p></p>
                </div>
                <div class="right">
                    <p></p>
                    <p></p>
                </div>
            </li>

            <li class="bell-item nth2" >
                <div class="left">
                    <van-icon class-prefix="iconfont" name="yinlianglabashengyin-xianxing"  class="left-icon" ></van-icon> 
                </div>
                <div class="middle">
                    <p>促销优惠</p>
                    <p>福利星期三,下午场现已开抢</p>
                </div>
                <div class="right">
                    <p>{{time}}</p>
                    <p></p>
                </div>
            </li>  
            
            <li class="bell-item nth3" >
                <div class="left">
                    <van-icon class-prefix="iconfont" name="yinlianglabashengyin-xianxing"  class="left-icon" ></van-icon> 
                </div>
                <div class="middle">
                    <p>管家私信</p>
                    <p>福利星期三,下午场现已开抢</p>
                </div>
                <div class="right">
                    <p></p>
                    <p></p>
                </div>
            </li>  
                    
            <li class="bell-item nth4" >
                <div class="left">
                    <van-icon class-prefix="iconfont" name="yinlianglabashengyin-xianxing"  class="left-icon" ></van-icon> 
                </div>
                <div class="middle">
                    <p>交易物流</p>
                    <p></p>
                </div>
                <div class="right">
                    <p></p>
                    <p></p>
                </div>
            </li> 
            
            <li class="bell-item nth5" >              
                <div class="left">
                    <van-icon class-prefix="iconfont" name="yinlianglabashengyin-xianxing"  class="left-icon" ></van-icon> 
                </div>
                <div class="middle">
                    <p>新功能介绍</p>
                    <p>全新升级!新版app操作指南</p>
                </div>
                <div class="right">
                    <p>{{time}}</p>
                    <p></p>
                </div>
            </li>
        </ul>
    </div>
</template>
            
<script>

export default {
    name: 'bell',
    data(){
        return{
        }
    },
    methods: {
        onClickLeft() {
        this.$router.go(-1);
        },
    },
    computed:{
        time: function(){
            return Date.now();
        } 
    }
}
</script>
      
<style lang="scss" scoped>
#bell{
    width:100%;height:100%;overflow-x: hidden;background:#f2f2f2;box-sizing:border-box;
    .bell-item{
        width:100%;height:84px;background-color: #fff;
        display:flex;
        .left{
            padding:0 14px;
            .iconfont{
               font-size: 32px; text-align:center;line-height:84px;
            }
        }
        .middle{
            width: 40%;margin-right:10px;
            display:flex;flex-direction: column; justify-content: center;
        }
        .right{
            width: 40%;
            display:flex;flex-direction: column; justify-content: center; align-items:flex-end;
        }
    }
    .nth1{margin-top:20px;}
    .nth1, .nth2{border-bottom:2px solid #ccc;}
    .nth4, .nth5{margin-top:10px;}
}
</style>