import {handleLogin,handlstaffeLogin} from '@/service/login'
const logins={
  state:{
    isFirstLoad:false
  },
  mutations:{
  },
  actions:{

    login ({ state, commit }, data) {

    },
    loginOut({ state, commit }){
          commit('clearLoginInfo')
    }
  }
}
export default logins
