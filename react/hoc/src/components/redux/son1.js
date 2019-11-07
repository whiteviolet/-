
import React from "react"
import Store from "./store"
class Son1 extends React.Component{
    constructor(){

        super();
        this.state={
            name:"当时年少春衫薄，骑马倚斜桥，满楼红袖招"
        }
    }
    render(){
        return(
            <div>
                {this.state.name}
            </div>
        )
    }
};
export default Son1