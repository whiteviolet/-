import React from "react";
import Son1 from "./son1"
import Son2 from "./son2"


class Box extends React.Component{
    render(){
        return (
            <div>
                <Son1></Son1>
                <Son2></Son2>
            </div>
        )
    }
}
export default Box;