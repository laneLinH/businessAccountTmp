const login = () => import(/* webpackChunkName: "home" */ '@/page/home/login/login')
const homeTmp = () => import(/* webpackChunkName: "home" */ '@/layout/homeTmp')
const register = () => import(/* webpackChunkName: "home" */ '@/page/home/register/register')
const findPassword = () => import(/* webpackChunkName: "home" */ '@/page/home/findPassword/findPassword')
const chooseBusiness = () => import(/* webpackChunkName: "account" */ '@/page/account/chooseBusiness')
const businessAccountTmp = () => import(/* webpackChunkName: "account" */ '@/layout/businessAccountTmp')
const packageSearch = () => import(/* webpackChunkName: "account" */ '@/page/account/packageSearch')

export default{
  register,
  login,
  homeTmp,
  findPassword,
  chooseBusiness,
  businessAccountTmp,
  packageSearch
}
