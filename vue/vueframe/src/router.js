import Vue from "vue";
import Router from "vue-router";



Vue.use(Router);


export default new Router({
    mode:"history",
    base:process.env.BASE_URL,  //自动获取根目录路径
    routes:[
        {
            path:"/",
            name:"home",
            component:()=>import("./pages/index/index.vue")
        },
       
    ]
})