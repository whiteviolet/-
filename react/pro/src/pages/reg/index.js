import React from "react";
import {Form, Input } from 'antd';
import { Select ,Button} from 'antd';

const { Option } = Select;



class Reg extends React.Component{
    constructor(){
        super();
        this.state={
            list:[
                {   akey:"00",
                    area:"艾欧尼亚"
                } ,{akey:"01",
                    area:"祖安"
                } ,{akey:"02",
                    area:"诺克萨斯"
                },{akey:"03",
                    area:"班德尔城"
                },{akey:"04",
                    area:"皮尔特沃夫"
                } ,{key:"05",
                    area:"战争学院"
                }, {key:"06",
                    area: "巨神峰"
                } ,{aakey:"07",
                    area:"雷瑟守备"
                } ,{akey:"08",
                    area:"裁决之地"
                } , {akey:"09",
                    area:"黑色玫瑰"
                } ,{akey:"10",
                    area:"暗影岛"
                }, {akey:"11",
                    area:"钢铁烈阳"
                }, {akey:"12",
                    area:"均衡教派"
                } ,{akey:"13",
                    area:"水晶之痕"
                } ,{akey:"14",
                    area:"影流"
                }, {akey:"15",
                    area:"守望之海"
                } ,{akey:"16",
                area:"征服之海"
                },
                {akey:"20",
                    area:"比尔吉沃特 "
                },{akey:"21",
                    area:"德玛西亚 "
                },{akey:"22",
                    area:"弗雷尔卓德"
                },{area:"无畏先锋" },{
                    akey:"23",
                    area:"恕瑞玛"
                },{akey:"24",
                    area:"扭曲丛林"
                }, {
                    akey: "25",
                    area: "教育网专区"
                },{
                    akey:"100",
                    area:"请选择你所在大区"
                }
            ],
            area:""


        }
    };
    Component
    handleChange=(value) =>{
        let {label} =value
        this.setState({area:label})

    }
    jump=(path)=>{

        console.log(this)
        let {area} =this.state
      this.props.form.validateFields((err,values)=>{

          if(!err){
              let {username,password,name}=values
              this.$axios.post("/lyh/v1/reg",{username,password,name,area}).then((res)=>{
                console.log(res)
              })
          }
        })
    };


    render(){
        const { getFieldDecorator } = this.props.form;

        return (
            <div style={{width:"50%",margin:"0 auto"}}>
                <span>账号</span>

                {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入你的用户名' }],
                })(
                    <Input

                        placeholder="Username"
                    />,
                )}

                <span>密码</span>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入你的密码' }],
                })(
                    <Input
                        type="password"
                        placeholder="Password"
                    />,
                )}
                <span>ID</span>
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入你的ID' }],
                })(
                    <Input

                        placeholder="name"
                    />,
                )}
                <div>你所在大区</div>
                <Select
                    labelInValue
                    defaultValue={{ key: '100' }}
                    style={{ width: 150 }}
                    onChange={this.handleChange}
                >
                    {this.state.list.map((item,index)=>{
                        return   <Option key={index} value={item.akey} >{item.area}</Option>
                    })}


                </Select>
                <Button onClick={this.jump.bind(this,"/login")}>注册</Button>
            </div>
        )
    }
};
export default Form.create({  })(Reg);