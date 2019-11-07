import React from "react";
import Connect from "./context/connnect"
import actionCreator from "./store/actionCreator"


class Son1 extends React.Component{

    render(){

        return (
            <div>
                {this.props.age}
                <button onClick={()=>{
                    actionCreator.changeAge(89);

                }}>改变</button>
            </div>
        )
    }
}
export default Connect(Son1);