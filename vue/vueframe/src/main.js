import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from "./router"
import {request} from "./assets/js/libs/request";







Vue.config.productionTip = false
Vue.prototype.$request=request
new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')
