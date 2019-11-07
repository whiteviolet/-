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
        {
            path:"/news",
            name:"news",
            component:()=>import("./pages/news/index.vue")

        },
        {
            path:"/news/article/:id",
            name:"article",
            component:()=>import("./pages/news/article.vue")
        },
        {
            path:"/goods",
            name:"goods",
            component:()=>import("./pages/goods"),
            redirect:"/goods/item",
            children:[
                {
                    path:"item",
                    name:"item",
                    component:()=>import("./pages/goods/item.vue")
                },
                {
                    path:"content",
                    name:"content",
                    component:()=>import("./pages/goods/content.vue")
                },
                {
                    path:"review",
                    name:"review",
                    component:()=>import("./pages/goods/review.vue")
                }
            ]
        },
        {
            path:"/login",
            name:"login",
            component:()=>import("./pages/login/")
        },
        {
            path:"/ucenter",
            name:"ucenter",
            component:()=>import("./pages/ucenter"),
            meta:{auth:true}
        },
        {
            path:"/profile",
            name:"profile",
            component:()=>import("./pages/ucenter/profile.vue"),
            //路由独享守卫
            // beforeEnter:(to,from,next)=>{
            //     if(Boolean(localStorage['isLogin'])){
            //         next()
            //     }else{
            //         next("/login")
            //     }
            //
            // }
        },
        {
            path:"/classify",
            name:"classify",
            component:()=>import("./pages/classify")
        },
        {
            path:"/skip",
            name:"skip",
            component:()=>import("./pages/skip")
        },
        {
            path:"/time",
            name:"time",
            component:()=>import("./pages/time")
        }


    ]
})