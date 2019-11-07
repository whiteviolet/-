import React from "react";
import {HashRouter,Switch,Link,NavLink,Redirect,Route} from "react-router-dom";
import loadable from "./utils/loadable"
// import Admin from "./pages/admin/index"
// import Home from "./pages/home/index"
// import Login from "./pages/login/index"
// import Look from "./pages/admin/look"
const Admin=loadable(()=>import("./pages/admin/index"))
const Home=loadable(()=>import("./pages/home/index"))
const Login=loadable(()=>import("./pages/login/index"))
const Look=loadable(()=>import("./pages/admin/look"))
const Reg=loadable(()=>import("./pages/reg/index"))
class App extends React.Component{
    render(){
        return (
            <HashRouter>
                <Redirect from="/" to="/login" ></Redirect>
                <Switch>


                    <Route exact path="/login" component={Login} ></Route>
                    <Route exact path="/reg" component={Reg} ></Route>
                    <Route  path="/admin" render={()=>{

                            return (

                                    <Admin>
                                        <Route  path="/admin/look" component={Look} ></Route>
                                    </Admin>



                            )


                    } }></Route>
                    <Route exact path="/home" component={Home} ></Route>

                </Switch>

            </HashRouter>
        )
    }
}
export default App