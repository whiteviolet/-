import React,{Fragment} from "react";
import { message } from 'antd';
import { Form, Icon, Input, Button, Checkbox ,Card} from 'antd';
import Style from "./index.module.less"

class Login extends React.Component{
    //注册
    reg=()=>{
        this.props.history.push("./reg")
    };
    //登录
    join=()=>{
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let {username,password}=values

                this.$axios.post("lyh/v1/login",values).then(res=>{
                    if(res.err==0){

                        this.props.history.push("./admin")
                    }else{
                        message.error("你输入的啥玩意")
                    }
                })
            }
        })
        // console.log(this)

    };



    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={Style.userLogin} >
                <Card title="召唤师，你回来了" className={Style.position}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入你的用户名' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入你的密码' }],
                        })(
                            <Input
                                type="password"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <div className={Style.btnWrap}>
                        <Button  onClick={this.join} >是的，我回来了</Button>
                        <Button  onClick={this.reg}>我想成为英雄</Button>
                    </div>


                </Card>




            </div>
        )
    }
}
export default  Form.create({ name: 'normal_login' })(Login)