import Vue from 'vue'
import home from '../views/tabs/home'
import classify from '../views/tabs/classify'
import channel from '../views/tabs/channel'
import carts from '../views/tabs/carts'
import my from '../views/tabs/my'
import main from '../views/main'
import VueRouter from 'vue-router'




Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: main,
      children: [
        {
          path: '',
          component: home,
        },
        {
          path: 'classify',
          component: classify
        },
        {
          path: 'channel',
          component: channel
        },
        {
          path:'carts',
          component: carts
        },
        {
          path:'my',
          component:my
        }
      ]
    }
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

export default router
