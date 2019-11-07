import {getloginData} from "../../../api/login" ;
let modules={
    namespaced:true,
    state:{
        nickname:"",
        token:"",
        uid:"",
        isLogin:false
    },
    mutations:{
        login(state,payload){
            getloginData(payload).then(res=>{
                // console.log(payload)
                if(payload.success){
                    payload.success(res)
                }

                // console.log(res)
                if(res.code==200){
                    localStorage["isLogin"]=true;
                    localStorage["uid"]=res.data.uid;
                    localStorage["cickname"]=res.data.nickname;
                    localStorage["token"]=res.data.auth_token ;
                    state.uid=res.data.uid;
                    state.nickname=res.data.nickname;
                    state.isLogin=true;
                    state.token=res.data.auth_token


                }
            })

        }
    },
    actions:{
        login(conText,payload){
            conText.commit("login",payload)
        }
    }


};
    export default modules