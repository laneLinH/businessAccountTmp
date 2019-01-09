<template>
    <section class="process-card">
      <div class="process-title">
         <div class="titles-item" v-for="(item,index) in process">
           <i :class="{'active':(index+1) < (processIdx+1)}">{{item.processIdx}}</i>
           <span>{{item.title}}</span>
         </div>
        <div class="grey-pin"></div>
        <div class="green-pin" :class="`${process[processIdx-1].classStr}`"></div>
      </div>
      <div v-if="processIdx == 1">
        <el-form :model="accountForm" label-position="right" :rules="accountForm" ref="accountForm" label-width="130px" class="account-form">
          <el-form-item label="会员帐号" prop="account">
            <el-input v-model="accountForm.account"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="authCode">
            <el-input v-model="accountForm.authCode" class="auth-code"></el-input>
            <authCode :contentWidth="100" :contentHeight="38" :identifyCode="authCode" class="auth-code-cava" @changeCode="changeCode()"></authCode>
          </el-form-item>
          <el-row>
            <a class="login-btn">注册</a>
          </el-row>
        </el-form>
      </div>
      <div v-else-if="processIdx == 2">

      </div>
      <div v-else="processIdx == 3">

      </div>
    </section>
</template>

<script>
  import authCode from "@/components/authCode/authCode"
  import {randomCode} from '@/utils/tools'
    export default {
        name: "findPassword",
      components:{
        authCode
      },
        data(){
            return{
               processIdx:1,
               process:[
                 {title:'填写会员帐号',processIdx:1,classStr:'first'},
                 {title:'验证帐号信息',processIdx:2,classStr:'second'},
                 {title:'设置新密码',processIdx:3,classStr:'third'}
               ],
              authCode:'124f',
              accountForm:{
                account:null,
                authCode:null
              }
            }
        },
      methods:{
        changeCode(){
          this.authCode=randomCode(4)
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss"  scoped>
  @import "../../../assets/style/variables";
    .process-card{
      margin: 60px auto;
      border: 1px solid #cccccc;
      box-shadow: 0 0 5px 0 #ccc;
      .process-title{
        margin: 60px 15%;
        display: flex;
        justify-content: space-around;
        position: relative;
        .grey-pin{
          width: 100%;
          height: 10px;
          background: $grayBtn;
          top: 5px;
          z-index: -1;
          border-radius: 5px;
          position: absolute;
          left: 0;
        }
        .green-pin{
          width: 33.3%;
          height: 10px;
          background: $greenBtn;
          top: 5px;
          z-index: -1;
          border-radius: 5px;
          position: absolute;
          left: 0;
          transition: width linear 0.5s;
        }
        .green-pin.first{
          width: $processWd*1;
        }
        .green-pin.second{
          width: $processWd*2;
        }
        .green-pin.third{
          width: 100%;
        }
        .titles-item{
          text-align: center;
          flex: 1;
          i.active{
            background: $greenBtn;
          }
          i{
            width: 20px;
            font-style:normal;
            text-align: center;
            line-height: 20px;
            height: 20px;
            display: inline-block;
            border-radius: 65%;
            background: $grayBtn;
            color: white;
          }
          span{
            margin-top: 15px;
            display: block;
          }
        }
      }
      .account-form{
        width: 360px;
        margin: 50px auto;;
      }
      .auth-code{
        width: 40%;
        vertical-align: top;
      }
      .auth-code-cava{
        position: absolute;
        right: 0;
        border: 1px solid #333333;
      }
      .login-btn{
        text-align: center;
        display: block;
        color: white;
        line-height: 30px;
        margin: 30px 0 0 130px;
        width: 270px;
        height: 30px;
        border: 1px solid #00a665;
        background-color: $greenBtn;
        cursor: pointer;
      }
    }
</style>
