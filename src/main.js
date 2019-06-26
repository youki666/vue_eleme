import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueResource from 'vue-resource'
import './common/css/reset.css'
import './common/js/icon.js'
import './common/less/icon.less'
import router from './router'
import store from './store'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
