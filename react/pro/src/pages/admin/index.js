import React from "react";
import { Layout, Menu, Icon } from 'antd';
import  {withRouter} from 'react-router-dom'
import Style from "./index.module.less"
const { Header, Content, Footer, Sider } = Layout;


class Admin extends React.Component{
    //查看
    jump(url){
        this.$axios.post("/lyh/v1/look",{})
      this.props.history.push(url)
    };
    render(){
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span className="nav-text">添加</span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Icon type="team" />
                            <span className="nav-text" onClick={this.jump.bind(this,"./admin/look")}>查看</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <div className={Style.wrap}>
                            <div>
                                ID:航不胜
                            </div>
                            <div>
                                安全退出
                            </div>
                        </div>
                    </Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            {this.props.children}

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(Admin)