let modules={
    namespaced:true,
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




};
export default modules