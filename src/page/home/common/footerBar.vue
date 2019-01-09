<template>
    <footer>
       <ul>
         <li v-for="item in data"><a v-text="item.name"></a></li>
       </ul>
    </footer>
</template>

<script>
    export default {
        name: "footerBar",
        data(){
          return{
            data:[
              {name:'关于我们',url:''},
              {name:'联系我们',url:''},
              {name:'广告服务',url:''},
              {name:'诚聘英才',url:''},
              {name:'隐私保护',url:''},
              {name:'免责声明',url:''},
              {name:'帮助中心',url:''},
              {name:'用户协议',url:''}
            ]
          }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../assets/style/variables";
  footer{
    padding: 15px 0;
    background: $footerBgColor;
    color: white;
    height: 50px;
    ul{
      display: flex;
      max-width: $maxWith;
      margin: 0 auto;
      li{
        margin-right: 10px;
        a{
          cursor: pointer;
          color: white;
          transition: all 0.1s;
          &:hover{
            color: red;
          }
        }
      }
    }
  }
</style>
