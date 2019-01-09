<template>
      <section>
        <el-tabs v-model="activeModel" type="border-card" @tab-click="choose">
          <el-tab-pane name="mobile">
            <span slot="label">
              <i class="el-icon-phone"></i>
              手机注册
            </span>
          </el-tab-pane>
          <el-tab-pane name="email">
            <span slot="label">
              <i class="el-icon-message"></i>
              邮箱注册
            </span>
          </el-tab-pane>
          <section v-if="activeModel==='mobile'">
            <el-form :model="mobileForm" label-position="right" :rules="mobileFormrules" ref="mobileForm" label-width="130px" class="mobile-form">
              <el-form-item label="手机号:" prop="mobileNum">
                <el-input v-model="mobileForm.mobileNum"></el-input>
              </el-form-item>
              <el-form-item label="登录密码:" prop="password"  class="register-passwod">
                <el-input type="password" maxlength="20" v-model="mobileForm.password" ></el-input>
                <div class="safety-secure">
                  <span>安全程度</span>
                  <div class="safety-chunk">
                    <span v-for="item in safetyAry" :class="{'active':item.fg==safetyLevel}" v-text="item.title"></span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="确认密码:" prop="confirmPassword" >
                <el-input  type="password" maxlength="20" v-model="mobileForm.confirmPassword"></el-input>
              </el-form-item>
              <el-form-item label="平台验证码:" prop="authCode" >
                <el-input  type="text" v-model="mobileForm.authCode" class="auth-code"></el-input>
                <authCode :contentWidth="100" :contentHeight="38" :identifyCode="authCode" class="auth-code-cava" @changeCode="changeCode()"></authCode>
                <a class="code-link" @click="changeCode">看不清?换一张</a>
              </el-form-item>
              <el-form-item label="短信验证码:" prop="mobileCode" >
                <el-input  type="text" v-model="mobileForm.mobileCode" class="mobile-code"></el-input>
                <a class="get-auth-code">点击获取验证码</a>
              </el-form-item>
              <div class="agreement">
                <el-checkbox v-model="mobileForm.checkAgree"></el-checkbox>
                <span class="agreement-ay">《旅旅游平台会员注册协议》</span>我已阅读并同意
              </div>
              <el-row>
                <a class="login-btn">注册</a>
              </el-row>
            </el-form>
          </section>
          <section v-else>
            <el-form :model="emailForm" label-position="right" :rules="emailFormrules" ref="emailForm" label-width="130px" class="mobile-form">
              <el-form-item label="邮箱帐号:" prop="email">
                <el-input v-model="emailForm.email"></el-input>
              </el-form-item>
              <el-form-item label="登录密码:" prop="password"  class="register-passwod">
                <el-input type="password" maxlength="20" v-model="emailForm.password" ></el-input>
                <div class="safety-secure">
                  <span>安全程度</span>
                  <div class="safety-chunk">
                    <span v-for="item in safetyAry" :class="{'active':item.fg==safetyLevel}" v-text="item.title"></span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="确认密码:" prop="confirmPassword" >
                <el-input  type="password" maxlength="20" v-model="emailForm.confirmPassword"></el-input>
              </el-form-item>

              <el-form-item label="邮箱验证码:" prop="emialCode" >
                <el-input  type="text" v-model="emailForm.emailCode" class="mobile-code"></el-input>
                <a class="get-auth-code">点击获取验证码</a>
              </el-form-item>
              <div class="agreement">
                <el-checkbox v-model="emailForm.checkAgree" prop="emailForm.checkAgree"></el-checkbox>
                <span class="agreement-ay">《旅旅游平台会员注册协议》</span>我已阅读并同意
              </div>
              <el-row>
                <a class="login-btn">注册</a>
              </el-row>
            </el-form>
          </section>
        </el-tabs>
      </section>
</template>
<script>
  import authCode from "@/components/authCode/authCode"
  import {randomCode} from '@/utils/tools'
   const validataPassword=(rule,val,callback)=>{
     callback(new Error('请输入您的密码'))
  }
  const validataConfirmPassword=(rule,val,callback)=>{
    callback(new Error('请输入您的确认密码'))
  }
    export default {
        name: "register",
      components:{
        authCode
      },
      data(){
        return{
          activeModel:'mobile',
          safetyLevel:null,
          safetyAry:[{title:'弱',fg:1},{title:'中',fg:2},{title:'强',fg:3}],
          strongRegex: /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$/g,
          mediumRegex: /^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/g,
          enoughRegex:/(?=.{6,}).*/g,
          mobileForm:{
            mobileNum:null,
            password:null,
            confirmPassword:null,
            authCode:null,
            mobileCode:null,
            checkAgree:false
          },
          emailForm:{
            email:null,
            password:null,
            confirmPassword:null,
            emailCode:null,
            checkAgree:false
          },
          authCode:'124f',
          mobileFormrules:{
            mobileNum:[
              { required: true, message: '请输入手机号码', trigger: 'blur' },
              { pattern: /^(((13[0-9])|(14[579])|(15([0-3]|[5-9]))|(16[6])|(17[0135678])|(18[0-9])|(19[89]))\\d{8})$/, message: '请输入正确的手机号码', trigger: 'blur' }
            ],
            password:[
              { required: true, message: '请输入密码', trigger: 'blur' },
              { required:true,validator:validataPassword,trigger: 'blur' }
            ],
            confirmPassword:[
              { required: true, message: '请输入确认密码', trigger: 'blur' },
              { required: true,validator:validataConfirmPassword, trigger: 'blur' }
            ],
            authCode:[
              { required: true, message: '请输入平台验证码', trigger: 'blur' },
              { type:'number', message: '请输入正确的手机号码', trigger: 'blur' }
            ],
            mobileCode:[
              { required: true, message: '请输入短信验证码', trigger: 'blur' },
              { type:'number', message: '请输入短信验证码', trigger: 'blur' }
            ]
          },
          emailFormrules:{
            email:[
              { required: true, message: '请输入邮箱帐号', trigger: 'blur' },
              { pattern: /^([a-z0-9A-Z]+[-|_|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$/, message: '请输入正确的邮箱帐号', trigger: 'blur' }
            ],
            password:[
              { required: true, message: '请输入密码', trigger: 'blur' },
              { max:20,min:6, message: '请输入6-20位字符', trigger: 'blur' }
            ],
            confirmPassword:[
              { required: true, message: '请输入确认密码', trigger: 'blur' },
              { max:20,min:6, message: '请输入6-20位字符', trigger: 'blur' }
            ],
            emailCode:[
              { required: true, message: '请输入短信验证码', trigger: 'blur' },
              { type:'number', message: '请输入短信验证码', trigger: 'blur' }
            ],
            'emailForm.checkAgree':[
              { required: true, message: '请勾选协议', trigger: 'blur' },
            ]
          },
        }
      },
      watch:{
        'mobileForm.password'(val){
          if(val){
            if(!/(?=.{6,}).*/g.test(val)){
                this.safetyLevel=1
            }else if(/^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/g.test(val)){
              this.safetyLevel=2
            }else if(/^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$/g.test(val)){
              this.safetyLevel=3
            }else{
              this.safetyLevel=1
            }
          }
        }
      },
      computed:{

      },
      methods:{
          choose(tab,et){
            this.activeModel=tab.paneName
          },
        changeCode(){
          this.authCode=randomCode(4)
        },
        register(){
            this.$refs.mobileForm.submit()
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../assets/style/variables";
.mobile-form{
  padding: 40px 0;
  display: inline-block;
}
.auth-code,.mobile-code{
  width: 100px;
}
.auth-code-cava{
  position: absolute;
  right: 50px;
  border: 1px solid #333333;
}
.code-link{
  right: -55px;
  cursor: pointer;
  vertical-align: middle;
  position: absolute;
  color: $alinkColor;
  &:hover{
    color: $lowColor;
  }
}
  .register-passwod{
      position: relative;
    .safety-secure{
      position: absolute;
      right: -190px;
      top: 0;
      display: flex;
      align-items: center;
      &>span:nth-of-type(1){
        margin-right: 15px;
      }
      .safety-chunk{
        span{
          display: inline-block;
          text-align: center;
          line-height: 25px;
          color: white;
          width: 30px;
          cursor: default;
          margin-right: 1px;
          background: #b4b4b4;
        }
        .active{
          background: red;
        }
      }
    }
  }
  .get-auth-code{
    color:$alinkColor;
    cursor: pointer;
    &:hover{
      color: $lowColor;
    }
  }
  .agreement{
    position: relative;
    left: 130px;
    .agreement-ay{
      color: #5caae6;
      cursor: pointer;
    }
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
</style>
