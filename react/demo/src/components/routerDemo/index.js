import React,{Component} from "react"
function Home(){
    return (
        <div>
            这是个首页你知道吗
        </div>
    )
}
function My(){
    return (
        <div>
            这是个天才你知道吗
        </div>
    )
};
class Btn extends Component{
    render(){
        return (
            <div>
                <button onClick={this.jump.bind(this,"/home")}>首页</button>
                <button onClick={this.jump.bind(this,"/my")}>我的</button>
            </div>
        )
    };
    jump(path){
        console.log(this)
       this.props.jump(path)
    }
};
class Box extends Component{
    constructor(){
        super();
        this.state={
            path:"/"
        }
    };
    componentDidMount(){
        //用原生js
        console.log(this)
        window.addEventListener("hashchange",this.hashChange)
    };
    componentWillUnmount(){
        window.removeEventListener("hashchange",this.hashChange)
    }
    hashChange=(e)=>{
        // console.log(e.newURL)
        let path=e.newURL.split("#")[1];
        this.setState({path})
    }
    render(){
        return (
            <div>
                <button onClick={()=>{
                    window.history.go(-1)
                }}>back</button>
                {<Btn jump={this.jump}></Btn>}
                {this.state.path=="/home"?<Home></Home>:""}
                {this.state.path=="/my"?<My></My>:""}
            </div>
        )
    };
    jump(path){
        window.location.hash=path
        // this.setState({path})//需要地址栏改变
    }
};
export default Box;