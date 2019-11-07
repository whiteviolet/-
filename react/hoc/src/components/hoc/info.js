import React from "react";
import Hoc from "./hoc"


class Info extends React.Component{
    render(){
        return (
            <div>
                这是你的个人信息
            </div>
        )

    }
}
export default Hoc(Info);