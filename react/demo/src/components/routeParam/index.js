import React from "react";
import {HashRouter,BrowserRouter,Route,Switch,Link,NavLink} from "react-router-dom";

function Home(){
    return (
        <div>
            <h1>这里是首页</h1>

        </div>
    )
}
function Details(props) {

    return(

        <div>
            <h1>这里是详情</h1>
            <p>{props.match.params.us}</p>
            <p>{props.match.params.ps}</p>
        </div>
    )
}
function Login(props){
    // console.log("deng",props)
    return(

        <div>
            <h1>这里是我的登录</h1>

        </div>
    )
}
function NotFind(){
    return (
        <div>
            <h1>你页面没了</h1>
        </div>
    )
}
class Son1 extends React.Component{
    render(){
        return (
            <HashRouter>
                <NavLink exact to="/" activeClassName="hah" >首页</NavLink>
                <NavLink exact to="/details/天才/qaz" activeClassName="hah">详情</NavLink>
                <NavLink exact to="/my" activeClassName="hah">我的</NavLink>
                <hr/>
            </HashRouter>
        )
    }
}
class Son2 extends React.Component{
    jump=(path)=>{
        console.log("fang",this.props.location.search);
        // let a=this.props.location.search
        // let b=a.split("&")[1];
        // let c=b.split("=")
        // let obj={};
        //
        // obj[c[0]]=c[1];
        // console.log(obj)
        this.props.history.push(`${path}?us=123&ps=456`)
        // this.props.history.push({pathname:path,state:{us:123,ps:"456"}})

    }
    render(){
        return (
        <HashRouter>
            <button onClick={this.jump.bind(this,"/my/login")}>登录</button>
            <button onClick={this.jump.bind(this,"/my/reg")}>注册</button>
            <Switch>
                <Route exact path="/my/login" component={Login}></Route>
                <Route exact path="/my/reg" render={(props)=>{
                    // console.log("zhu",props)
                    return (
                        <div>
                            来到这里注册吧

                        </div>
                    )
                }}></Route>
            </Switch>

        </HashRouter>


        )
    }
}


class Box extends React.Component{
    render(){

        return (

            <HashRouter>
                <Son1></Son1>

                <Switch>

                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/details/:us/:ps" component={Details}></Route>
                    <Route  path="/my" component={Son2}></Route>
                    <Route  component={NotFind}></Route>
                </Switch>

            </HashRouter>
        )
    }
};
export default Box;