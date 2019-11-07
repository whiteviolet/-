import React from "react";
import {connect} from "react-redux"


class Son2 extends React.Component{
    render(){
        // console.log(this)
        return (
            <div>
                {this.props.age}
                这是组件二
            </div>
        )
    }
}
export default connect(state=>state)(Son2);