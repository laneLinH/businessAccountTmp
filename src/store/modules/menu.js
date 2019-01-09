import {getMenuList} from '@/service/menu'
import {Message} from 'element-ui'
import components from '@/router/components'
const menus={
  state:{
      menuList:null,
      routes:{},
      isLoadRoute:true
  },
  mutations:{
      setMenus(state,data){
         state.menuList=data
      },
    setRoutes(state,data){

        state.routes=data
    },
    setIsLoadRoute(state,data){
        state.isLoadRoute=data
    }
  },
  actions:{
      getMenuList({state,commit}){
        let menuList=[
          {
            name: '商品中心',
            path:'productCenter',
            children: [
              {name: '商品大厅', path: 'packageSearch'},
              {name: '发布商品', path: 'publish'},
              {name: '商品管理', path: 'packageManage'},
              {name: 'B2B商品审核', path: 'packageVerifyManage'},
            ]
          },
          {
            name: '销售订单管理',
            path:'orderManage',
            children: [
              {name: '销售订单', path: 'companyB2BOrderManage'},
              {name: '下级销售订单', path: 'organizationB2BOrderManage'},
              {name: '销售订单统计', path: 'companyB2BOrderTotalCount'},
              {name: '下级销售统计', path: 'organizationB2BOrderTotalCount'},
            ]
          },
          {
            name: '采购订单管理',
            path:'purchaseOrderManage',
            children: [
              {name: '采购订单', path: 'companyPurchaseOrderManage'},
              {name: '下级采购订单', path: 'organizationPurchaseOrderManage'},
              {name: '采购订单统计', path: 'companyPurchaseOrderCount'},
              {name: '下级采购统计', path: 'organizationPurchaseOrderCount'},
            ]
          },
          {
            name: '旅游团队上报',
            path:'journeyTeamManage',
            children: [
              {name: '电子行程单管理', path: 'journeyInfoDetail'},
              {name: '行程单列表', path: 'journeyInfoManage'},
              {name: '旅游团队信息管理', path: 'teamInfoDetail'},
              {name: '旅游团队列表', path: 'teamInfoManage'},
            ]
          },
          {
            name: '合同管理',
            path:'applicationManage',
            children: [
              {name: '电子合同申请', path: 'eContractApplicationManage'},
              {name: '电子合同审核', path: 'eContractApplicationVerifyManage'},
              {name: '电子合同管理', path: 'eContractNumberManage'},
              {name: '纸质合同发放', path: 'paperContractFetchManage'},
              {name: '纸质合同管理', path: 'paperContractNumberManage'},
              {name: '纸质合同回收', path: 'paperContractRecoverManage'},
              {name: '合同详情', path: 'eContractManage'},
              {name: '协议旅行社', path: 'friendDepartmentManage'},
              {name: '转并团申请', path: 'teamTransferApplyManage'},
              {name: '转并团审核', path: 'teamTransferApproveManage'},
              {name: '转并团统计', path: 'teamTransferStatisticsManage'},
              {name: '合同统计', path: 'contractReportManage'},
              {name: '电子合同核销', path: 'eContractWriteOffManage'}
            ]
          },
          {
            name: '会员管理',
            path:'memberManage',
            children: [
              {name: '黑名单管理', path: 'blackList'},
              {name: '会员审核', path: 'groupApplyAudit'},
              {name:'会员分组管理',path:'memberGroup'},
              {name: '个人会员管理', path: 'memberPerson'},
              {name: '商户会员管理', path: 'memberShop'},
              {name: '我所属会员组', path: 'owningGroup'}
            ]
          },
          {
            name: '账户中心',
            path:'accountManage',
            children: [
              {name: '账户信息', path: 'accountInfo'},
              {name: '保险账户绑定', path: 'bxAccountManage'},
              {name: '下级单位管理', path: 'childComanyManage'},
              {name: '组织机构股管理', path: 'departmentManagement'},
              {name: '操作员管理', path: 'memberManage'},
              {name: '单位会员管理', path: 'membercenter'},
              {name: '个人信息', path: 'info'},
              {name: '账户安全', path: 'securityCenter'},
              {name: '单位类型权限配置', path: 'companyInternalRoleManage'}
            ]
          },
          {
            name: '服务中心',
            path:'serviceManage',
            children: [
              {name: '广告管理', path: 'advertisementManage'},
              {name: '数据字典', path: 'dataDictionary'},
              {name: '公告管理', path: 'declarationManage'},
              {name: '操作日志', path: 'systemOperationLog'},
              {name: '短信记录查询', path: 'sMSLogManage'}
            ]
          },
          {
            name: '财务统计',
            path:'financialManage',
            children: [
              {name: '账单记录', path: 'billRecordManage'},
              {name: '退款记录', path: 'refundManage'},
              {name: '提现申请管理', path: 'auditDepartmentWithdrawCashes'},
              {name: '线下充值审核', path: 'auditRecharge'},
              {name: '财务信息', path: 'financialInfo'},
              {name: '单位钱包', path: 'unitIndex'},
              {name: '钱包统计', path: 'statistic'}
            ]
          }
        ]
        let dealMenuList=(list)=>{
          if(list.hasOwnProperty('children')){
            list.children.forEach((m,n)=>{
              // let i='-'+(n+1)
              // _th.$set(m,'id',list.path+m.path)
              // _th.$set(m,'pathUrl','/'+list.path+'/'+m.path)
              m['pathUrl']='/'+list.path+'/'+m.path
            })
          }else{
            list.forEach((m,n)=>{
              // _th.$set(m,'id',n+1+'')
              dealMenuList(m)
            })
          }
        }
        dealMenuList(menuList)
        commit('setMenus',menuList)
      },
      configRoute({state,commit}){
        let accountRoutes=[]
        let dealRouter=(list,id)=>{
              if(list.hasOwnProperty('children')){
                let childroutes=[]
                list.children.forEach((m,n)=>{
                  let route={
                    path:m.path,
                    name:m.path,
                    meta:{title:m.name},
                    component:() => import(/* webpackChunkName: "account" */ '@/page/account/'+m.path),
                    children:[]
                  }
                  childroutes.push(route)
                })
                accountRoutes[id].children=childroutes
              }else{
                list.forEach((m,n)=>{
                  let route={
                    path:'/'+m.path,
                    name:m.path,
                    meta:{title:m.name},
                    component:components.businessAccountTmp,
                    hidden:true,
                    children:[]
                  }
                  accountRoutes.push(route)
                  dealRouter(m,n)
                })
              }
          }
        dealRouter(state.menuList)
        // let tproute=  {
        //                 path:'/account',
        //                 name:'account',
        //                 hidden: true,
        //                 component:components.businessAccountTmp,
        //                 children:accountRoutes
        //               }
        //
        commit('setRoutes',accountRoutes)
      }
  }
}

export default menus
