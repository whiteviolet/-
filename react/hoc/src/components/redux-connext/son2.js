import React from "react";
import Connect from "./context/connnect"


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
export default Connect(Son2);