
import State from "./state"
export default (preState=State,action)=>{

    let newState=preState;
    let {type,params}=action;
    switch(type){
        case "CHANGE-NAME": newState.name=params;
        break;
    }
    return newState
}