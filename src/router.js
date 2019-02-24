import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from './pages/login'
import homeComponent from './pages/home'
import allReceiverComponent from './pages/home/children/allReceiver'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: loginComponent
    },
    {
      path: '/home',
      component: homeComponent,
      redirect: '/home/allReceiver',
      children: [{
        path: 'allReceiver',
        component: allReceiverComponent
      }, ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token=localStorage.getItem('token')
  if(token && to.path === '/login'){
     return next('/home')
  }
  if(token || to.path ==='/login'){
    next()
  }else{
    next('/')
  }
})

export default router