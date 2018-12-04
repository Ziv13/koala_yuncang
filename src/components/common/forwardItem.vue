<template>
    <ul id="forward-cont">
        <li class="forward-item" v-for="item in forwardList">
            <ul class="text-group">
                <li class="user-img">
                    <img src="/static/img/user/user01.jpg" >
                </li>
                <li class="forward-text">
                    <span class="user-name">猫仔</span>
                    <div class="decoration" >{{item.description}}</div>
                </li>
                <li class="forward-icon">
                    <van-icon class-prefix="iconfont" name="search" slot="search-icon"></van-icon>
                    <span>全部</span> 
                </li>
            </ul>
            <ul class="img-group">
                <li class="img-item" v-for="(img,idx) in imgList" :key="idx">
                        <img :src="img" >
                </li>
            </ul>
            <van-row type="flex" class="data-group">
                    <van-col span="6">
                        <span>{{item.time}}分钟前</span>
                    </van-col>
                    <van-col span="6">
                        <span>已转发{{item.count}}次</span>
                    </van-col>
            </van-row>
        </li>    
    </ul>
</template>
          
    <script>
export default {
name: 'ForwardItem',
data(){
    return{
        forwardList:[
            {
                
                description:'深海鱼胶原蛋白粉多口味可选深海鱼胶原蛋白粉多口味可选...深海鱼胶原蛋白粉多口味可选深海鱼胶原蛋白粉多口味可选',
                time:'50',
                count:'20'
            },{
                img:'/static/img/share/share1.png',
                description:'深海鱼胶原蛋白粉多口味可选深海鱼胶原蛋白粉多口味可选...深海鱼胶原蛋白粉多口味可选深海鱼胶原蛋白粉多口味可选',
                time:'50',
                count:'20'
            },{
                img:'/static/img/share/share1.png',
                description:'深海鱼胶原蛋白粉多口味可选深海鱼胶原蛋白粉多口味可选...深海鱼胶原蛋白粉多口味可选深海鱼胶原蛋白粉多口味可选',
                time:'50',
                count:'20'
            }
        ],
        imgList: [
            '/static/img/share/share1.png',
            '/static/img/share/share1.png',
            '/static/img/share/share1.png',
            '/static/img/share/share1.png',
            '/static/img/share/share1.png',
            '/static/img/share/share1.png'
        ]  
    } 
}
}
</script>

<style lang="scss">
#forward-cont{
    width:100%;
    background-color:#F2F2F2;
    .forward-item{
        max-height:700px;margin:10px;background-color:#fff;
        .text-group{
            width:100%;height:88px;display:flex;margin-bottom:10px;
            .user-img{
                display:inline-block;
                width:80px;height:88px;
                background:#fff;padding:12px;
                img{
                    width:48px;height: 48px;border-radius:48px;
                }
            }
            .forward-text{
                height:88px;
                .user-name{
                    font-size: 16px; text-align:center;
                }
                .decoration{
                 font-size: 12px;white-space: wrap; 
                 text-overflow: ellipsis;width:230px;
                }
            }
            .forward-icon{
                width:40px;
                display:flex;flex-direction:column;
                justify-content: space-between;
            }
        }
        .img-group{
            display: flex;justify-content: space-between;flex-wrap:wrap;
            .img-item{
                width:30%;
                img{
                    width:100%;height:100%;
                }
            }
        }
        .data-group{
            height:20px;
        }
    }
    .van-row{
        margin: 6px;
        font-size: 16px;
    }
    .fl{
        float:left;
    }
    .fr{
        float:right;
    }
}
</style>