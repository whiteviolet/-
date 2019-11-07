import React from "react";


import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import ActionCreator from "./store/actionCreator"
class Son1 extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         text:[]
    //     }
    // }

    render(){

        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={()=>{
                    let text=this.refs.input.value
                    this.props.add(text)

                }}>添加</button>
            </div>
        )
    }
}
let mapStateToProps=(state)=>{

    return state
}
let mapDispatchToProps=(dispatch)=>{

  return  bindActionCreators(ActionCreator,dispatch)
}
 export default connect(mapStateToProps,mapDispatchToProps)(Son1);