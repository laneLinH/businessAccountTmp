<template>
    <header>
      <div class="content">
       <div class="nav-left left">
         <ul>
           <li><span><i class="fa fa-home"></i>网站首页</span></li>
           <li>system <a>退出</a></li>
         </ul>
       </div>
       <div class="nav-right right">
         <ul>
           <li><a>会员列表</a></li>
           <li><a>商家列表</a></li>
         </ul>
       </div>
      </div>
    </header>
</template>

<script>
    export default {
        name: "headTop"
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../assets/style/minxin";
    header{
      height: 30px;
      background: #e8e8e8;
      .content{
        width: 1170px;
        margin: 0 auto;
        line-height: 30px;
        @include clearFix
      }
      .nav-left,.nav-right{
        ul{
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }
      .nav-left{
        ul>li{
          padding-right: 10px;
        }
      }
      .nav-right{
        ul>li{
          padding-left: 10px;
        }
      }
      .fa.fa-home{
        margin-right: 3px;
        font-size: 16px;
      }
    }

</style>
