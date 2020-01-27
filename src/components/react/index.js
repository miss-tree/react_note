import React, { Component } from 'react';
import {  Route,Link } from "react-router-dom";
// import routes from "../../router/routes"
//antd 布局
import { Layout, Menu, Icon } from 'antd';
const { Sider, Content } = Layout;
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
                  {/* <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                  > */}
                  <Sider
                    style={{
                      overflow: 'auto',
                      height:this.state.height,
                      // position: 'fixed',
                      left: 0,
                    }}
                  >
                    <div  className="logo"></div>

                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                      <Menu.Item key="1">
                        <Link to="/react/">
                        <Icon type="setting" />
                          <span> react安装</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                        <Link to="/react/structure">
                          <Icon type="aliyun" />
                          <span> react结构分析</span>
                        </Link>
                      </Menu.Item>
                      <SubMenu
                        key="sub1"
                        title={
                          <span>
                            <Icon type="apartment" />
                            <span>react基础</span>
                          </span>
                        }
                      >
                        <Menu.Item key="3"><Link to="/react/bind">绑定属性</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/react/mapdata">遍历数据/组件</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/react/events">绑定事件/赋值</Link></Menu.Item>
                        <Menu.Item key="9"><Link to="/react/restrain">约束性组件</Link></Menu.Item>
                        <Menu.Item key="10"><Link to="/react/passval">组件传值</Link></Menu.Item>
                      </SubMenu>
                      <Menu.Item key="11">
                        <Link to="/react/lifecycle">
                          <Icon type="appstore" />
                          <span>生命周期</span>
                        </Link>
                      </Menu.Item>
                      <SubMenu
                        key="sub2"
                        title={
                          <span>
                            <Icon type="cluster" />
                            <span>路由</span>
                          </span>
                        }
                      >
                        <Menu.Item key="6"><Link to="/react/config">路由基础</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/react/trends">动态路由</Link></Menu.Item>
                        <Menu.Item key="8"><Link to="/react/nesting">路由嵌套</Link></Menu.Item>
                        <Menu.Item key="15"><Link to="/react/solder">路由守卫</Link></Menu.Item>
                        <Menu.Item key="16"><Link to="/react/mould">路由模块化</Link></Menu.Item>
                      </SubMenu>
                      <SubMenu
                        key="sub3"
                        title={
                          <span>
                            <Icon type="cluster" />
                            <span>Redux</span>
                          </span>
                        }
                      >
                        <Menu.Item key="12"><Link to="/">Tom</Link></Menu.Item>
                        <Menu.Item key="13"><Link to="/">Bill</Link></Menu.Item>
                        <Menu.Item key="14"><Link to="/">Alex</Link></Menu.Item>
                      </SubMenu>
                    </Menu>
                  </Sider>
                  <Layout>
                    {/* <Header style={{ background: '#fff', padding: 0 }}>
                      <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                      />
                    </Header> */}
                    {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
                    <Content style={{ margin: '24px 16px',overflow: 'initial', background: '#fff',height:this.state.height-48 }}>
                      <div style={{ padding: 20, background: '#fff', }}>
                        {
                          this.props.routes.map((route,key)=>{
                              // if(route.exact){
                                return <Route key={key} exact path={route.path} component={route.component}/>
                              // }else{
                              //   return <Route  key={key}  path={route.path} component={route.component}/>
                              // }
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