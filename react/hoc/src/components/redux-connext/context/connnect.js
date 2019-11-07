import React,{Fragment} from "react";
// import Store from "../store/store";
import PropTypes from "prop-types"
export default (ComponentRender)=> {
    class Connect extends React.Component{
        componentDidMount(){
            this.context.store.subscribe(()=>{
                this.setState({})
            })
        };
        render (){
            let {age}=this.context.store .getState()
            return  (
                <Fragment>
                    <ComponentRender age={age}></ComponentRender>
                </Fragment>
            )
        }
    }
    Connect.contextTypes={
        store:PropTypes.object
    }
    return Connect
}

