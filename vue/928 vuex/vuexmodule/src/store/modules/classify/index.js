import {getclassifyData} from "../../../api/classify/index";
let modules={
    namespaced:true,
    state:{
        classify:[],
    },
    mutations:{
        getclassify(state,payload){

            getclassifyData().then(res=>{
                // console.log(res)
                if(res.code==200){
                    state.classify=res.data
                }

            })
        }
    },
    actions: {
        getclassify(conText, payload) {
            conText.commit("getclassify")
        }
    }

}
export default modules