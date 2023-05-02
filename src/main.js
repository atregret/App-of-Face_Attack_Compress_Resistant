import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import router from './router' 
// 引入jQuery、bootstrap
import $ from 'jquery'
import 'bootstrap'


// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// 全局注册 $
Vue.prototype.$ = $
Vue.use(VueRouter) 


axios.defaults.baseURL = 'http://127.0.0.1:5000'; 
Vue.prototype.$ajax = axios;
Vue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
