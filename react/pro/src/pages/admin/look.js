//查看
import React,{Fragment} from "react";
import { Spin, Icon } from 'antd';




class Look extends React.Component{
    jump(path){
        console.log(this)
        this.props.history.push(path)
    }
    render(){
        return (
            <Fragment>
                <button onClick={this.jump.bind(this,"/home")}>跳转</button>

            </Fragment>
        )
    }
}
export default Look