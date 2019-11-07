import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import {request} from "./assets/js/libs/request";

//全局前置守卫
router.beforeEach((to,from,next)=>{
    // console.log(to)
    if(to.meta.auth){
        // alert("jinbuqu")
        if(Boolean(localStorage['isLogin'])){
            next();
        }else{
             next("/login")
        }
    }else{
        next();
    }

})
Vue.config.productionTip = false
Vue.prototype.$request=request
new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
