<template>
  <div class="container">
    <logo ></logo>
    <section class="content">
      <h3 class="title">请选择商家：</h3>
        <ul class="business-list">
          <li v-for="item in businessList"><router-link :to="item.url">{{item.name}}</router-link></li>
        </ul>
    </section>
    <footerBar></footerBar>
  </div>
</template>

<script>
  import logo from '@/page/home/common/logo'
  import footerBar from '@/page/home/common/footerBar'
    export default {
      name: "chooseBusiness",
      components:{
        logo,
        footerBar
      },
      data(){
        return{
          businessList:[
            {name:'四川家乐易游电子商务有限公司',url:''},
            {name:'创新时代广场分店',url:''},
            {name:'分销商--火车南站门市',url:''},
            {name:'供应商--成都周边短线',url:''},
            {name:'高新',url:''}
          ]
        }
      }
    }
</script>

<style   rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/style/variables";
  .container{
    height: 100%;
    flex-direction: column;
    display: flex;
  }
  .content{
    width: $maxWith;
    margin:0 auto;
    flex: 1;
  }
  .title{
    margin: 20px 0;
  }
  .business-list{
    font-size: 18px;
    margin: 10px 0;
    li{
      margin-bottom: 10px;
    }
  }
</style>
