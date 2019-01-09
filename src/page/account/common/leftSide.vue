<template>
      <div class="left-nav">
        <el-menu   :default-active="routePath"  :unique-opened="true" class="sidenav">
            <li class="door-name">
              <span>商户中心</span>
            </li>
              <el-submenu :index="item.path" :key="index" class="module-chunk" v-for="(item,index) in menuList">
                  <template slot="title" ><span v-text="item.name"></span></template>
                  <el-menu-item :key="subindex" :index="subitem.pathUrl" v-for="(subitem,subindex) in item.children"  class="sub-sidenav" >
                    <router-link class="link-chunk" :to="subitem.pathUrl" v-text="subitem.name"></router-link>
                  </el-menu-item>
              </el-submenu>
        </el-menu>
      </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
    export default {
      name: "leftSide",
      data:()=>({
        menuList:[]
      }),
      mounted(){
       this.initData()
      },
      computed:{
        ...mapState(['menu']),
        routePath(){
          return this.$route.path
        }
      },
      methods:{
        ...mapActions(['getMenuList']),
          initData(){
            this.getMenuList()
            this.menuList=this.menu.menuList
          }
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss"  scoped>
  @import "../../../assets/style/variables";
  .left-nav{
    width: 190px;
    padding-right: 30px;
  }
  .sidenav{
    margin: 20px 0;
    border: none;
    .door-name{
      background-color: #428bca;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      display: block;
      padding: 10px 15px;

      span{
        font-size: 18px;
        color: white;
      }
    }
    .module-chunk{
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-top: 5px;
      transition: all linear 0.3s;
    }
  }
  .sub-sidenav.show{
    display: block;
  }
  .sub-sidenav.hide{
    display: none;
  }
  .sub-sidenav{
    li{
      padding: 5px 15px;
      cursor: pointer;
      &:hover{
        background: #58bceb;
        a{
          color: white;
        }
      }
    }
  }
  .link-chunk{
    padding: 5px 15px;
    display: block;
  }
</style>
