import Loadable from 'react-loadable';
import React,{Fragment} from "react";
import Style from "./loadable.module.less"
import { Spin } from 'antd';

function LoadingComponent (){
    return (
        <div className="example" className={Style.wrap}>

            <Spin  className={Style.cen}/>
        </div>
    )
}

export default (loader,loading=LoadingComponent)=> {
      return Loadable({
          loader,
          loading
      })
}
