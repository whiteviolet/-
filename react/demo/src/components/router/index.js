import React from "react";
import {HashRouter,BrowserRouter,Route,Switch,Link,NavLink} from "react-router-dom";
import "./index.css"
function Home(){
    return (
        <div>
            <h1>这里是首页</h1>

        </div>
    )
}
function Details() {
        return(
            <div>
                <h1>这里是详情</h1>
            </div>
        )
}
function Login() {
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

class Box extends React.Component{N
    render(){
        return (
                <HashRouter>
                    <NavLink exact to="/" activeClassName="hah" >首页</NavLink>
                    <NavLink exact to="/details" activeClassName="hah">详情</NavLink>
                    <NavLink exact to="/my" activeClassName="hah">我的</NavLink>
                    <hr/>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/details" component={Details}></Route>
                        <Route  path="/my" render={()=>{
                            return (
                                <HashRouter>
                                    <NavLink exact to="/my/login" activeClassName="hah">登录</NavLink>
                                    <NavLink exact to="/my/reg" activeClassName="hah">注册</NavLink>
                                    <Route path="/my/login" component={Login}></Route>
                                    <Route path="/my/reg" render={()=>{
                                        return (
                                            <div>
                                                来到这里注册吧
                                            </div>
                                        )
                                    }}></Route>
                                </HashRouter>

                            )
                    }}></Route>
                        <Route  component={NotFind}></Route>
                    </Switch>

                </HashRouter>
        )
    }
};
export default Box;