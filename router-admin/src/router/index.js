import Vue from 'vue'
import VueRouter from 'vue-router'
import pathArr from './pathArr'

// 导入需要的组件
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from '@/components/menus/MyUsers.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue' 
import Rights from '@/components/menus/MyRights.vue' 
import Settings from '@/components/menus/MySettings.vue' 
import UserDetail from '@/components/user/MyUserDetail.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 登录的路由规则
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { 
      path: '/home',
      redirect: '/home/users',
      component: Home,
      children: [
        { path: 'users', component: Users },
        { path: 'goods', component: Goods },
        { path: 'rights', component: Rights },
        { path: 'orders', component: Orders },
        { path: 'settings', component: Settings },
        // 用户详情页的路由规则
        {
          path: 'userinfo/:id',
          component: UserDetail,
          props: true
        },
    ]},
  ]
})

// 全局前置守卫
router.beforeEach((to, from , next) => {
  // 控制页面权限
  if(pathArr.indexOf(to.path) !== -1){
    const token = localStorage.getItem('token')
    if(token){
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router