import React from "react";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import ActionCreator from "./store/actionCreator"

class Son2 extends React.Component{
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    checked(type){
        let list=[]
        switch (type){
            case 0 :
               console.log(this.props.list);


              list= this.props.list;
                console.log(list);

                this.setState({list});
                console.log(this.state);


                break;


            case -1 :
                list= this.props.list.filter((item,index)=>{
                    return !item.fin
                });
                this.setState({list});
                break;
            case 1 :
                list= this.props.list.filter((item,index)=>{
                    return item.fin
                });
                this.setState({list});

                break;
        }
    }
    render(){


        return (

            <div>


                {this.props.list.map((item,index)=>{
                    return <li key={index}>{item.data}
                        <span onClick={()=>{
                            this.props.del(index)
                        }}>删除</span>
                        <span onClick={()=>{
                            this.props.finish(index)
                        }}>{item.fin?"完成":"未完成"}</span>

                    </li>
                })}
                <hr/>

                <div>
                    <li onClick={this.checked.bind(this,0)}>全部</li>
                    <li onClick={this.checked.bind(this,1)}>完成</li>
                    <li onClick={this.checked.bind(this,-1)}>未完成</li>
                    {this.state.list.map((item,index)=>{
                        return <li key={index}>{item.data}
                            <span onClick={()=>{
                                this.props.del(index)
                            }}>删除</span>
                            <span onClick={()=>{
                                this.props.finish(index)
                            }}>{item.fin?"完成":"未完成"}</span>

                        </li>
                    })}
                </div>

            </div>
        )
    }
}
let mapStateToProps=(state)=>{

    return state
}
let mapDispatchToProps=(dispatch)=>{
    return bindActionCreators(ActionCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Son2);