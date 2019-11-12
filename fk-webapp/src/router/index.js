import Vue from 'vue'
import home from '../views/tabs/home'
import classify from '../views/tabs/classify'
import channel from '../views/tabs/channel'
import carts from '../views/tabs/carts'
import my from '../views/tabs/my'
import main from '../views/main'
import VueRouter from 'vue-router'
import login from "../components/login/login";
import register from "../components/login/register";
import findpwd from "../components/login/findpwd";
import goods from "../components/goodsListModel/goods";
import findTos from "../components/login/findTos";
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {path: '/', redirect: '/main'},
    {
      path: '/main',
      component: main,
      children: [
        {path: '', component: home},
        {path: 'classify',component: classify},
        {path: 'channel', component: channel},
        {path:'carts', component: carts},
        {path:'my',meta:{requireAuth:true,}, component:my},
        {path:'login', component:login},
        {path:'register', component:register},
        {path:'findpwd', component:findpwd},
        {path:'findTos',component:findTos}
      ]
    },
    {path:'/goods', component:goods},

  ]
})

// // 全局路由guard 前置guard user ->main -> login
// router.beforeEach((to, from, next) => {
//   console.log(to.path) // to from $route
//   console.log(from.path)
//   // let token = localStorage.getItem('token')
//   next()
//   // if (token) {
//   //   next('/main')
//   // } else {
//   //   next('/login')
//   // }
// })

// router.afterEach((to, from) => {
//   // window.confirm('您真的需要退出吗!')
//   console.log('afterEach')
// })
router.beforeEach((to,from,next)=>{

  let token = localStorage.getItem('token')
  next()

  if (to.meta.requireAuth) {//如果需要跳转 ，往下走（1）
    if (token) {//判断是否登录过，如果有登陆过，说明有token,或者token未过期，可以跳过登录（2）
      if (to.path === '/my') {//判断下一个路由是否为要验证的路由（3）
        next();// 如果是直接跳到首页，
      } else {//如果该路由不需要验证，那么直接往后走
        next();
      }
    }else {
      // eslint-disable-next-line no-console
     // alert('请登录');//如果没有登陆过，或者token 过期， 那么跳转到登录页
      next('/main/login');
    }
  } else { //不需要跳转，直接往下走
    next();
  }

})
export default router
