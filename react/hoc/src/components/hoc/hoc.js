
import React,{Fragment} from "react";

import Skip from "./skip"





export default (RenderComponent)=>{
    class Hoc extends React.Component{
        constructor(){
            super();
            this.state={
                isLogin:""
            }
        }
        componentDidMount(){
            setTimeout(()=>{
                let isLogin=localStorage.getItem('isLogin')
                if(isLogin){
                    this.setState({isLogin:true})
                }else{
                    this.setState({isLogin:false})
                }
            },1000)
        }
        render(){
            let {isLogin}=this.state;
            return (
                <Fragment>
                    {isLogin?<RenderComponent></RenderComponent>:<Skip></Skip>}
                </Fragment>

            )

        }
    }
    return Hoc
};