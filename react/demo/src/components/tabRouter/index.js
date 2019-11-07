import React from "react";
import {withRouter} from "react-router-dom"

class Header extends React.Component{
    render (){
        return (
            <div>
                <button onClick={this.jump.bind(this,"/movie")}>电影</button>
                <button onClick={this.jump.bind(this,"/game")}>游戏</button>
                <button onClick={this.jump.bind(this,"/music")}>音乐</button>
            </div>
        )
    };
    jump(path){
        this.props.history.push(path)
    }

};
export default withRouter(Header);