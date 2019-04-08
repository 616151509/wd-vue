import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import tools from './tools';
import './mock'


Vue.config.productionTip = false
Vue.use(tools);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
