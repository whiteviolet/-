export default {
    changename(name){
        let action={
            type:"CHANGE-NAME",
            params:name
        }
        return action
    }

}