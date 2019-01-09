<template>
  <div class="inner-content">
    <el-form :model="loginForm" label-position="left" :rules="rules" ref="loginForm" label-width="130px" class="login-form">
      <el-form-item label="账号/手机/邮箱:" prop="userName">
        <el-input v-model="loginForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password" >
        <el-input v-model="loginForm.userName"></el-input>
      </el-form-item>
      <el-row class="notice">
        <router-link to="/home/findPassword/1">找回密码</router-link>
        <router-link to="/home/register">注册用户</router-link>
      </el-row>
      <el-row>
        <a class="login-btn" @click="login">登录</a>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  import logo from '@/page/home/common/logo'
  // import components from '@/router/components'
  import { mapActions,mapState } from 'vuex'
    export default {
        name: "login",
        components:{
          logo
        },
        data:()=>({
            loginForm:{
               userName:null,
               password:null
             },
            rules:{
              userName: [
                { required: true, message: '请输入账号/手机/邮箱', trigger: 'blur' }
              ],
              password:[
                { required: true, message: '请输入密码', trigger: 'blur' }
              ]
            }
        }),
      computed:{
        ...mapState(['menu'])
      },
      mounted(){},
      methods:{
        ...mapActions(['getMenuList','configRoute']),
       login(){
         this.getMenuList()
         this.configRoute()
         this.$router.addRoutes(this.menu.routes)
         sessionStorage.setItem('islogin','true')
         this.$router.push('/productCenter/packageSearch')
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../assets/style/variables";
  .inner-content{
    width: 100%;
    height: 90%;
    box-shadow: 0 0 5px 0 #ccc;
    background: url("/static/img/loginImg/bglogin.png") no-repeat  center;
    background-size: 100% 100%;
    position: relative;
  }
  .login-form{
    background-color: white;
    padding: 15px 20px;
    display: inline-block;
    position: absolute;
    right: 50px;
    top:50%;
  }
  .notice{
    padding: 10px 0;
    a{
      cursor: pointer;
      color: $alinkColor;
      &:hover{
        color: $lowColor;
      }
    }
  }
  .login-btn{
    width: 100%;
    color: white;
    display: inline-block;
    padding: 12px 80px;
    font-size: 18px;
    border:none;
    background: #e33828;
    transition: all 0.1s;
    text-align: center;
    cursor: pointer;
    &:hover{
      background: #ec523a;
    }
  }
</style>
