let modules={
    namespaced:true,
    state:{
        cickname:localStorage["cickname"]?localStorage["cickname"]:"",
        isLogin:localStorage["isLogin"]?localStorage["isLogin"]:false

    },
    mutations:{
        login(state,payload){
            // console.log(state,payload)
            localStorage["cickname"]=payload.cickname;
            localStorage["isLogin"]=payload.isLogin;
            state.cickname=payload.cickname;
            state.isLogin=payload.isLogin;

        },
        outLogin(state){
            localStorage.removeItem("clckaname")
            localStorage.removeItem("isLogin");
            state.cickname="";
            state.isLogin=false
        }


    }

};
export default modules