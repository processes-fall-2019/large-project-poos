import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

// sync(store, router)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
