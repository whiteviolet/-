
export default {
    add(text){
        let action={
            type:"ADD_TEXT",
            params:text
        }
        return action

    },
   del(index){
       let action={
           type:"DEL_TEXT",
           params:index
       }
       return action

    },
    finish(index){
        let action={
            type:"FINSHIN_TEXT",
            params:index
        }
        return action
    }
}