import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './api'

//引入公共样式
import './styles/components.css'




//安装elemet-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
