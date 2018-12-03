<template>
    <div id="showItem">
        <van-row >
            <van-col span="12" ></van-col><slot name="left-text"></slot></van-col>
            <van-col span="2" class="fr"><slot name="right-icon" ></slot></van-col>
            <van-col span="2" class="fr"><slot name="right-badge" ></slot></van-col>
            <van-col span="6" class="fr"><slot name="right-text"></slot></van-col>     
        </van-row>
    </div>
</template>
      
<script>
export default {
name: 'showItem'
}
</script>

<style lang="scss">
#showItem{
    width:100%;height:36px;
    border-bottom:1px solid #ccc;
    padding:6px;
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