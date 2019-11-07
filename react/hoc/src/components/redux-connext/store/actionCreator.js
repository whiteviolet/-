import Store from "./store"
export default {
    changeAge(age){
        setTimeout(()=>{
            let action={
                type:"CHANGE_AGE",
                params:age
            }
            Store.dispatch(action)
        },7000)


    }
}