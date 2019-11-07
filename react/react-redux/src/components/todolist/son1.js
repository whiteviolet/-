import React from "react";

import ActionCreator from "./store/actionCreator"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

class Son1 extends React.Component{

    render(){
        console.log(this.props,"son1")
        return (
            <div>
                {this.props.age}
                <button onClick={()=>{
                    // let action = ActionCreator.changeAge(89)
                    this.props.changeAge(22)

                }}>改变</button>
            </div>
        )
    }
}
// let mapStateToProps=(state)=>{
//     return state
// }
let mapDispatchToProps=(dispatch)=>{
    // return {
        // abc: function (a) {
        //
        //     console.log(11)
        //     let action = ActionCreator.changeAge(a)
        //     dispatch(action)
        //     // console.log('xixi')
        //

    // }
  return  bindActionCreators(ActionCreator,dispatch)
}
 export default connect(state=>state,mapDispatchToProps)(Son1);