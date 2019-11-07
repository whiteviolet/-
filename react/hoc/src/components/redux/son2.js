
import React from "react"
import Store from "./store"
import Action from "./actionCreator"
class Son2 extends React.Component{
    componentDidMount(){
        Store.subscribe(()=>{
            // console.log(11)

            this.setState({})
        })
    }
    render(){

        let {name}=Store.getState()
        return(
            <div>
                {name}
                <button onClick={()=>{
                    let action=Action.changename("航不胜")
                    Store.dispatch(action)
                }}>改名</button>
            </div>
        )
    }
};
export default Son2