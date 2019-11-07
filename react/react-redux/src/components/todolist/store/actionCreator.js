// import Store from "./store"
export default {
    // changeAge(age){
    //     let action={
    //         type:"CHANGE_AGE",
    //         params:age || 20
    //     }
    //     // Store.dispatch(action)
    //     return action
    // }
    changeAge(age){
        return (dispatch)=>{
            setTimeout(()=>{
                let action={
                    type:"CHANGE_AGE",
                    params:age || 20
                }
                dispatch(action)
            },5000)

        }
    }
}