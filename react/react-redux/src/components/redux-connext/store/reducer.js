
let state={list:[]};




export default (preState=state,action)=>{

    let newAction=JSON.parse(JSON.stringify(preState))
    let {type,params}=action
    switch(type){
        case "ADD_TEXT":newAction.list.push({data:params,fin:false}) ;
        break;
        case "DEL_TEXT":newAction.list.splice(params,1) ;
            break;
        case "FINSHIN_TEXT":newAction.list[params].fin=true ;
            break;
    }
    return newAction;
}