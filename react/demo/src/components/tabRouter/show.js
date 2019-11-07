import React from "react";
import Header from "./index"
import Game from "./game"
import Movie from "./movie"
import Music from "./music"
import {HashRouter,Route,Switch,Redirect} from "react-router-dom"
class Box extends React.Component{
    render (){
        return (
            <div>

                <HashRouter>
                    <Header></Header>
                    <Switch>
                        <Redirect exact from="/" to="/movie"></Redirect>
                        <Route exact path="/movie" component={Movie}></Route>
                        <Route exact path="/music" component={Music}></Route>
                        <Route exact path="/game" component={Game}></Route>


                    </Switch>
                </HashRouter>
            </div>
        )
    };


};
export default Box;