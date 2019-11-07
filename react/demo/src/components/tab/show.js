import React from "react";
class Show extends React.Component{
    constructor(){
      super();


      this.state={
          data:[]
      }
    };
    getData(sel){
        let list={"1001":["肖申克的救赎","七宗罪","龙猫","教父"],
            "1002":["遮天","神墓","盘龙","冰火魔厨"],
            "1003":["红色高跟鞋","我和我的道姑朋友","千千阙歌","侧脸"],
            "1004":["英雄联盟","王者荣耀","彩虹六号","麻将"]
        };
        setTimeout(()=>{
            console.log("网络请求");
            // this.setState({data:list.sel})
            this.setState({data:list[sel]})
        },500)



    };
    //模拟ajax请求后台数据
    componentDidMount(){
       let sel=this.props.sel;
       this.getData(sel)

    };

    //props改变
    //优化减少ajax请求
    componentWillReceiveProps(props){
        // console.log(props)
        if(this.props.sel==props.sel) return
        this.getData(props.sel)
    }

    renderIf(data){
        if(!data.length) return "没有相关信息";
        return data.map((item,index)=>{
            return <li key={index}>{item}</li>
        })
    };
    //优化重复渲染
    shouldComponentUpdate(props,state){
        // console.log(this.props.sel,props.sel);
        // console.log(this.state.data==state.data)
        // console.log(this.state.data)
        // console.log(state.data)
        if(JSON.stringify(this.state.data)==JSON.stringify(state.data)){
            return false
        }else{
            return true
        }
    }
    render(){
        console.log(11)
        let {data}=this.state
        return (
            <div>
                {this.renderIf(data)}
            </div>
        )
    }
};
export default Show;
