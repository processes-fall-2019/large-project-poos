import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import BootstrapVue from 'bootstrap-vue'
import VModal from 'vue-js-modal'
import CircularCountDownTimer from 'vue-circular-count-down-timer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import 'bootstrap-css-only/css/bootstrap.min.css'
// import 'mdbvue/build/css/mdb.css'
// import { sync } from 'vuex-router-sync'

Vue.use(BootstrapVue)
Vue.use(VModal)
Vue.use(CircularCountDownTimer)

Vue.config.productionTip = false

// sync(store, router)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
