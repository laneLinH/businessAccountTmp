<template>
  <div class="logo" >
    <img src="/static/img/loginImg/logo.png" @click="gohome"/>
  </div>
</template>

<script>
    export default {
        name: "logo",
        methods:{
          gohome(){
            this.$router.push({path:'/'})
          }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../assets/style/variables";
  .logo{
    width: $maxWith;
    margin: 40px auto 0 auto;
    img{
      cursor: pointer;
    }
  }
</style>
