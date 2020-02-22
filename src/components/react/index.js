import React, { Component , Suspense} from 'react';
import {  Route,Link } from "react-router-dom";
import Axios  from "../../Module/axios"
import Loading from "../index/Loading"
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
    this.getMessage()
    var bodyHeight=document.body.clientHeight||document.documentElement.clientHeight
    console.log(bodyHeight)
    this.setState({
      height:bodyHeight-80
    })
  }
  getMessage(){
    Axios.get("/react").then(res=>{
      console.log(res)
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
              {/* <Menu.Item key="99">
                <Link to="/react/Loading">
                  <Icon type="aliyun" />
                  <span> loading</span>
                </Link>
              </Menu.Item> */}
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="apartment" />
                    <span>react基础</span>
                  </span>
                }
              >
                <Menu.Item key="3"><Link to="/react/Banner/bind">绑定属性</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/react/Banner/mapdata">遍历数据/组件</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/react/Banner/events">绑定事件/赋值</Link></Menu.Item>
                <Menu.Item key="9"><Link to="/react/Banner/restrain">约束性组件</Link></Menu.Item>
                <Menu.Item key="10"><Link to="/react/Banner/passval">组件传值</Link></Menu.Item>
                <Menu.Item key="41"><Link to="/react/Banner/Context">Context</Link></Menu.Item>
                <Menu.Item key="70"><Link to="/react/Banner/State">无状态组件</Link></Menu.Item>
                <Menu.Item key="42"><Link to="/react/Banner/Hook">Hook</Link></Menu.Item>
                <Menu.Item key="43"><Link to="/react/Banner/HighComponent">高阶组件</Link></Menu.Item>
                <Menu.Item key="44"><Link to="/react/Banner/inherit">组合 vs 继承</Link></Menu.Item>
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
                <Menu.Item key="6"><Link to="/react/ReactRouter/config">路由基础</Link></Menu.Item>
                <Menu.Item key="7"><Link to="/react/ReactRouter/trends">动态路由</Link></Menu.Item>
                <Menu.Item key="8"><Link to="/react/ReactRouter/nesting">路由嵌套</Link></Menu.Item>
                <Menu.Item key="16"><Link to="/react/ReactRouter/Module">路由模块化</Link></Menu.Item>
                <Menu.Item key="15"><Link to="/react/ReactRouter/solder">路由守卫</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="deployment-unit" />
                    <span>Redux</span>
                  </span>
                }
              >
                <Menu.Item key="12"><Link to="/react/Redux">Redux</Link></Menu.Item>
                <Menu.Item key="13"><Link to="/react/Redux/Action">Action</Link></Menu.Item>
                <Menu.Item key="14"><Link to="/react/Redux/ActionTypes">actionTypes</Link></Menu.Item>
                <Menu.Item key="17"><Link to="/react/Redux/Error">常遇的坑</Link></Menu.Item>
                <Menu.Item key="18"><Link to="/react/Redux/Middleware">中间件</Link></Menu.Item>
                <Menu.Item key="19"><Link to="/react/Redux/ReactRedux">react-redux</Link></Menu.Item>
                <Menu.Item key="55"><Link to="/react/Redux/ReduxPersist">redux-persist</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub7"
                title={
                  <span>
                    <Icon type="dot-chart" />
                    <span>小知识</span>
                  </span>
                }
              >
                <Menu.Item key="204"><Link to="/react/Knowledge/CrossDomain">前端跨域</Link></Menu.Item>
                <Menu.Item key="203"><Link to="/react/Knowledge/Pack">打包问题</Link></Menu.Item>
                <Menu.Item key="206"><Link to="/react/Knowledge/PureComponent">PureComponent</Link></Menu.Item>
                <Menu.Item key="205"><Link to="/react/Knowledge/Responsive">响应式设置</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub6"
                title={
                  <span>
                    <Icon type="sliders" />
                    <span>插件使用</span>
                  </span>
                }
              >
                <Menu.Item key="26"><Link to="/react/plugins/crossEnv">cross-env</Link></Menu.Item>
                <Menu.Item key="27"><Link to="/react/plugins/history">history</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="ant-design" />
                    <span>antd使用</span>
                  </span>
                }
              >
                <Menu.Item key="22"><Link to="/react/Antd/Axios">Axios</Link></Menu.Item>
                <Menu.Item key="23"><Link to="/react/Antd/">-_-</Link></Menu.Item>
                <Menu.Item key="24"><Link to="/react/Antd/">-_-</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                    <Icon type="fall" />
                    <span>项目优化</span>
                  </span>
                }
              >
                <Menu.Item key="32"><Link to="/react/optimize/webpack">webpack优化</Link></Menu.Item>
                <Menu.Item key="33"><Link to="/react/optimize/CodeSplitting">路由懒加载</Link></Menu.Item>
                <Menu.Item key="34"><Link to="/react/optimize/Overrides">config-overrides.js</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '24px 16px',overflow: 'initial', background: '#fff',height:this.state.height-48 }}>
              <div style={{ padding: 20, background: '#fff', }}>
              <Suspense fallback={<Loading/>}>
                  {
                    this.props.routes.map((route,key)=>{
                          return <Route key={key} exact path={route.path} component={route.component}/>
                    })
                  }  
                </Suspense>
              </div>           
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
  }

export default index;  