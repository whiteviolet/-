
let state={
    age:18
}


export default (preState=state,action)=>{
    console.log(action)
    let newAction=JSON.parse(JSON.stringify(preState))
    let {type,params}=action
    switch(type){
        case "CHANGE_AGE":newAction.age=params ;
        break;
    }
    return newAction;
}