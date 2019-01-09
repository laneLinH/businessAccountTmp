<template>
    <div class="container">
        <headTop></headTop>
        <div class="logo" >
          <img src="/static/img/businessAccount/logo.png" @click="gohome"/>
        </div>
        <div class="center-content">
          <leftSide></leftSide>
          <div class="main-chunk">
              <transition class="fade-in">
                <router-view></router-view>
              </transition>
          </div>
        </div>
        <accountfooter></accountfooter>
        <footerBar></footerBar>
    </div>
</template>

<script>
    import headTop from '@/page/account/common/headTop'
    import footerBar from '@/page/home/common/footerBar'
    import accountfooter from '@/page/account/common/accountfooter'
    import leftSide from '@/page/account/common/leftSide'
    export default {
        name: "businessAccountTmp",
        components:{
          headTop,
          footerBar,
          accountfooter,
          leftSide
        },
        methods:{
          gohome(){
            this.$router.push({path:'/home/login'})
          }
        }
    }
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/style/variables";
  .container{
    height: 100%;
    flex-direction: column;
    display: flex;
    overflow-y: auto;
  }
  .logo{
    width: $maxWith;
    margin: 20px auto;
    img{
      cursor: pointer;
    }
  }
  .center-content{
    width: $maxWith;
    margin: 0 auto;
    display: flex;
  }
  .main-chunk{
    flex: 1;
    border: 1px solid #ddd;
    margin: 20px 0;
  }
</style>
