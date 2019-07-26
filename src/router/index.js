import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'

Vue.use(Router)

export const constantRouterMap =[
  {path: '/login', component: Login, hidden: true}
]

export default new Router({
  routes: constantRouterMap
})
