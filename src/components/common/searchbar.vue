<template>    
    <div id="search-bar">
        <van-row >
            <van-col span="3" >
                <slot name="left-icon" ></slot>
                <slot name="icon-badge" ></slot>                
            </van-col>

            <div class="search-box">
              <van-col span="1" offset="1"><slot name="search-icon" ></slot></van-col>
              <van-col span="12" offset="2"><slot name="search-text" ></slot></van-col>  
            </div>
            <van-col span="3" class="fr" ><slot name="right-icon"></slot></van-col>     
        </van-row>
    </div>
</template>
        
<script>

export default {
    name: 'SearchBar',
    data () {
        return {
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#search-bar{
    background-color:#fff;
    width:100%;height:36px;
    padding:6px;
    .van-row{
        margin: 6px;
        font-size: 16px;
        .left-icon{
            fontsize:24px;
        }
        .search-box{
            width:242px;height:24px;display:inline-block;
            background-color:#F2F2F2;margin-left:6px;padding: 2px;
            border-radius:24px;
        }
        .fr{float:right;}
    }
}
</style>
        