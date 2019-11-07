import React from "react";
import "./change.css";

class Change extends React.Component{
    render(){
        return (
            <div>
               <div className="wrap">
                   {this.props.data.map((item,index)=>{
                       return <li onClick={this.send.bind(this,item.id) } key={index}>{item.name}</li>
                   })}
               </div>
            </div>
        )
    };
    send(id){

        this.props.send(id)
    }
};
export default Change;
