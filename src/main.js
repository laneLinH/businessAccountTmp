// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters'
import * as _ from 'lodash'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false

store.dispatch('getMenuList')
store.dispatch('configRoute')
router.addRoutes(store.state.menu.routes)
router.beforeEach((to,from,next)=>{
  const islogin=sessionStorage.getItem('islogin')
  if(islogin){
    // store.dispatch('getMenuList')
    // store.dispatch('configRoute')
    // router.addRoutes([store.state.menu.routes])
    // console.log(store.state.menu.routes)
    // next({path:'/account/productCenter/packageSearch'})
  }
  next()
  if(to.meta.title){
    document.title=to.meta.title;
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
