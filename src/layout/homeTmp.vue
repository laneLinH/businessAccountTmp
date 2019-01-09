<template>
  <div class="container">
    <logo ></logo>
    <section class="content">
       <router-view></router-view>
    </section>
    <footerBar></footerBar>
  </div>
</template>

<script>
  import logo from '@/page/home/common/logo'
  import footerBar from '@/page/home/common/footerBar'
    export default {
      name: "homeTmp",
      components:{
        logo,
        footerBar
      }
    }
</script>

<style   rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/style/variables";
  .container{
    height: 100%;
    flex-direction: column;
    display: flex;
  }
  .content{
    width: $maxWith;
    margin:0 auto;
    flex: 1;  }
</style>
