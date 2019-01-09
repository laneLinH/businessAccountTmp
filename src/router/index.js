import Vue from 'vue'
import Components from './components'
import Router from 'vue-router'
Vue.use(Router)
export const routes=[
  {
    path: '/',
    redirect:'/home/login'
  },
  {
    path:'/chooseBusiness',
    name:'chooseBusiness',
    component:Components.chooseBusiness
  },
  {
    path: '/home',
    name: 'home',
    component:Components.homeTmp,
    hidden:true,
    children: [
      {
        path:'login',
        name: 'login',
        meta:{
          title:'用户登录'
        },
        component:Components.login
      },
      {
        path:'register',
        name: 'register',
        meta:{
          title:'用户注册'
        },
        component:Components.register
      },
      {
        path:'findPassword/:processIdx',
        name: 'findPassword',
        meta:{
          title:'找回密码'
        },
        component:Components.findPassword
      },
    ]
  },
  {
    path: '*',
    // redirect:'/home/login'
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes
})


