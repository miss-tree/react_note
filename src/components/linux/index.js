import React, { Component } from 'react';
import {  Route,Link } from "react-router-dom";
// import routes from "../../router/routes"
//antd 布局
import { Layout, Menu, Icon } from 'antd';
const {  Sider, Content } = Layout;
const { SubMenu } = Menu;

class index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      height:document.body.clientHeight,
      collapsed: false,
     };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount(){
    var bodyHeight=document.body.clientHeight||document.documentElement.clientHeight
    console.log(bodyHeight)
    this.setState({
      height:bodyHeight-80
    })
  }
    render() {
      return (
        <div className="">
          <Layout>
            <Sider
              style={{
                overflow: 'auto',
                height:this.state.height,
                left: 0,
              }}
            >
              <div  className="logo"></div>

              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Link to="/linux/">
                    <Icon type="laptop" />  
                    <span> linux安装</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/linux/Tool">
                    <Icon type="video-camera" />
                    <span> linux远程管理工具</span>
                  </Link>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="table" />
                      <span>linux基础</span>
                    </span>
                  }
                >
                  <Menu.Item key="6"><Link to="/linux/handle">常用命令</Link></Menu.Item>
                  <Menu.Item key="12"><Link to="/linux/service">服务命令</Link></Menu.Item>
                  <Menu.Item key="4"><Link to="/linux/catalog">目录讲解</Link></Menu.Item>
                  <Menu.Item key="5"><Link to="/linux/software">软件安装</Link></Menu.Item>
                  {/* <Menu.Item key="15"><Link to="/linux/install">rpm和yum</Link></Menu.Item> */}
                  <Menu.Item key="7"><Link to="/linux/config">配置修改</Link></Menu.Item>
                  <Menu.Item key="8"><Link to="/linux/viorder">vi/vim入门</Link></Menu.Item>
                  <Menu.Item key="9"><Link to="/linux/pack">打包压缩</Link></Menu.Item>
                  <Menu.Item key="11"><Link to="/linux/process">进程信息</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="3">
                  <Link to="/linux/power">
                  <Icon type="sketch" />
                    <span>用户权限</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="10">
                  <Link to="/linux/setnode">
                    <Icon type="heat-map" />
                    <span>安装Node/PM2</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="13">
                  <Link to="/linux/mongodb">
                    <Icon type="bar-chart" />
                    <span>安装Mongodb</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="14">
                  <Link to="/linux/mysql">
                    <Icon type="line-chart" />
                    <span>安装MySQL</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="16">
                  <Link to="/linux/nginx">
                    <Icon type="ie" />
                    <span>Nginx负载均衡</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="17">
                  <Link to="/linux/redis">
                    <Icon type="radar-chart" />
                    <span>使用redis</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Content style={{ margin: '24px 16px',overflow: 'initial', background: '#fff',height:this.state.height-48 }}>
                <div style={{ padding: 24, background: '#fff' }}>
                  {
                    this.props.routes.map((route,key)=>{
                          return <Route key={key} exact path={route.path} component={route.component}/>
                    })
                  }  
                </div>           
              </Content>
            </Layout>
          </Layout>
        </div>
      );
    }
  }

export default index;  