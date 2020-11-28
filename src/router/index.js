import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import excellentPlan from '@/pages/excellentPlan/excellentPlan'
import index from '@/pages/head/head'
import detail from '@/pages/detail/detail'
import designInpiration from '@/pages/designInpiration/designInpiration'
import login from '@/pages/login/login'
import direct from '@/pages/direct/direct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/excellentPlan',
      name: 'excellentPlan',
      component: excellentPlan
    },
    {
      path:'/designInpiration',
      name:'designInpiration',
      component:designInpiration
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/direct',
      name:'direct',
      component:direct
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail,
      props:true
    }
  ]
})
