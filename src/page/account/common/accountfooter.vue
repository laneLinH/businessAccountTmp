<template>
    <div class="account-footer">
      <section class="inner">
        <h5>分社机构查询：</h5>
        <ul class="footer-nav-list">
          <li>
            <dl>
              <dt>交易指南</dt>
              <dd><a href="http://help.zotours.com/Transaction/TransactionProcess">交易流程</a></dd>
              <dd><a href="http://help.zotours.com/Transaction/TransactionIntroduction">交易介绍</a></dd>
              <dd><a href="http://help.zotours.com/Transaction/TransactionGuide">交易指南</a></dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>消费指南</dt>
              <dd><a href="http://help.zotours.com/Consumption/ConsumptionProcess">消费流程</a></dd>
              <dd><a href="http://help.zotours.com/Consumption/ConsumptionAuthentication">消费认证</a></dd>
              <dd><a href="http://help.zotours.com/Consumption/Settlement">结算方式</a></dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>支付方式</dt>
              <dd><a href="http://help.zotours.com/Payment/OnlinePrepaid">在线预付</a></dd>
              <dd><a href="http://help.zotours.com/Payment/OnlinePayment">在线支付</a></dd>
              <dd><a href="http://help.zotours.com/Payment/HirePurchase">分段付款</a></dd>
              <dd><a href="http://help.zotours.com/Payment/ThirdPayment">第三方支付</a></dd>


            </dl>
          </li>
          <li>
            <dl>
              <dt>售后服务</dt>
              <dd><a href="http://help.zotours.com/AfterService/AfterServicePolicy">售后服务政策</a></dd>
              <dd><a href="http://help.zotours.com/AfterService/AfterServiceFlow">售后服务流程</a></dd>
              <dd><a href="http://help.zotours.com/AfterService/PriceProtect">价格保护</a></dd>
              <dd><a href="http://help.zotours.com/AfterService/RefundInstructions">退款说明</a></dd>

            </dl>
          </li>
          <li>
            <dl>

              <dt>联系我们</dt>
              <dd><a href="/Home/Complaint">投诉建议</a></dd>
              <dd><a href="">联系我们</a></dd>
              <dd><a href="">客服中心</a></dd>

            </dl>
          </li>
          <li>
            <dl>
              <dt>系统信息</dt>
              <dd><a target="_blank" href="/Home/VersionRecord">版本升级记录</a></dd>
            </dl>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../../assets/style/variables";
    .account-footer{
          background: #eff3f5;
      .inner{
        width: 1170px;
        margin: 40px auto;
      }
    }
    .footer-nav-list{
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      margin-top: 20px;
      position: relative;
        &:before{
          content: '';
          border: 1px dashed #e6e6e6;
          position: absolute;
          height: 1px;
          width: 100%;
          top:0;
        }
        &:after{
          content: '';
          border: 1px dashed #e6e6e6;
          position: absolute;
          height: 1px;
          width: 100%;
          bottom:0;
        }
      dt{
        font-size: 15px;
        font-weight: 700;
        color: #333;
      }
      dd>a{
        color: $mainFontColor;
        &:hover{
            color: red;
        }
      }
    }
</style>
