import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue' //--JAVASCRIPT PORTION
import 'bootstrap/dist/css/bootstrap.css' //--CSS PORTION. no .use
import 'bootstrap-vue/dist/bootstrap-vue.css' //--CSS PORTION. no .use

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(BootstrapVue) // Install BootstrapVue --JAVASCRIPT PORTION
Vue.use(IconsPlugin) // Install BootstrapVue --JAVASCRIPT PORTION


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
