import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from "./router"
import {request} from "./assets/js/libs/request";



Vue.use(Vuex);

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
let store=new Vuex.Store({
    //数据源
    state:{
        total:0,
        user:[
            {name:"张三",age:17},
            {name:"张4",age:19},
            {name:"张5",age:10}
        ]


    },
    //同步方法
    mutations:{
        incTotal(state,plyload){
            // console.log(state,plyload)
            state.total=plyload.total
        },
        decTotal(state,plyload){
            // console.log(state,plyload)
            state.total=plyload.total
        }

    },
    //异步方法
    actions:{

    },
    getters:{
        getUsers(state){
            let user=state.user.filter(res=>{
                return res.age>12
            })
            return user
        }


    }


})

Vue.config.productionTip = false
Vue.prototype.$request=request
new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')
