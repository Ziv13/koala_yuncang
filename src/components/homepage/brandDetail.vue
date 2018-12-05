<template>
<div id="brand-detail">
    <h1>brandDetail</h1>
    <li v-for="(item,idx) in filterBrandList">
        <span>{{item[idx]}}</span>
    </li>
</div>
</template>

<script>
export default {
    name: 'BrandDetail',
    props:{
        "goodsId": String
    },
    data(){
        return{
           brandList: [] 
        }
    },
    created(){
    let goodsId = this.goodsId
    this.$get('../../static/data.json').then(((res) =>{
      let datas = res.brandList;
      if(datas&&datas.length>0){
          this.brandList = datas;

      }else{
          console.log('no found brandList')
      }
    }).bind(this))
    
  },
  computed: {
        filterBrandList: function () {
            let brandList = JSON.parse(this.brandList);
            console/log(brandList)
            return brandList.filter(function (item) {
                return item.goodsId = this.goodsId;
                console.log(item);
            });;
        }
    }
}
</script>

<style lang="scss" scoped>
</style>

