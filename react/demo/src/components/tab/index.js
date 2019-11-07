import React from "react";
import Show from "./show";
import Change from "./change";
class Box extends React.Component{
    constructor(){
        super();

        this.state={
            data:[{name:"电影",id:"1001"},
                {name:"小说",id:"1002"},
                {name:"音乐",id:"1003"},
                {name:"游戏",id:"1004"}],
            sel:"1001"
        }


    }
    render(){
        return (
            <div>
                开始
                <Change data={this.state.data} send={this.send.bind(this)}></Change>
                <Show sel={this.state.sel}></Show>
            </div>
        )
    };
    send(id){
        this.setState({sel:id})
    }
};
export default Box
