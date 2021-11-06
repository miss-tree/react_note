import React, { Component , Suspense} from 'react';
import {  Route,Link } from "react-router-dom";
import Loading from "../index/Loading"
import Axios  from "../../Module/axios"
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
    this.getMessage();
  }
  getMessage(){
    Axios.get("/node").then(res=>{
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
              left: 0,
            }}
          >
            <div  className="logo"></div>

            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/node/">
                  <Icon type="laptop" />  
                  <span> nodejs安装</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/node/Tool">
                  <Icon type="video-camera" />
                  <span> 常用工具/软件</span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="global" />
                    <span>node基础</span>
                  </span>
                }
              >
                <Menu.Item key="6"><Link to="/node/Banner/http">http模块</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/node/Banner/urlpath">url模块</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/node/Banner/fsmodule">fs模块</Link></Menu.Item>
                <Menu.Item key="7"><Link to="/node/Banner/path">path模块</Link></Menu.Item>
                <Menu.Item key="8"><Link to="/node/Banner/querystring">querystring模块</Link></Menu.Item>
                <Menu.Item key="9"><Link to="/node/Banner/events">事件驱动</Link></Menu.Item>
                <Menu.Item key="99"><Link to="/node/Banner/EventLoop">事件循环</Link></Menu.Item>
                <Menu.Item key="10"><Link to="/node/Banner/node_router">路由封装</Link></Menu.Item>
                <Menu.Item key="11"><Link to="/node/Banner/exp_router">仿express路由</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="table" />
                    <span>MongoDB</span>
                  </span>
                }
              >
                <Menu.Item key="12"><Link to="/node/mongodb/">MongoDB安装</Link></Menu.Item>
                <Menu.Item key="13"><Link to="/node/mongodb/use_software">Mongodb使用命令</Link></Menu.Item>
                <Menu.Item key="14"><Link to="/node/mongodb/Indexes">MongoDB索引</Link></Menu.Item>
                <Menu.Item key="15"><Link to="/node/mongodb/LinkNode">Nodejs使用</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="radar-chart" />
                    <span>Express</span>
                  </span>
                }
              >
                <Menu.Item key="36"><Link to="/node/Express">Express</Link></Menu.Item>
                <Menu.Item key="41"><Link to="/node/Express/Manual">手册调用</Link></Menu.Item>
                <Menu.Item key="34"><Link to="/node/Express/Middle">中间件</Link></Menu.Item>
                <Menu.Item key="35"><Link to="/node/Express/Cookie">Cookie</Link></Menu.Item>
                <Menu.Item key="37"><Link to="/node/Express/Session">Session</Link></Menu.Item>
                <Menu.Item key="38"><Link to="/node/Express/ExpMongodb">封装MongoDB</Link></Menu.Item>
                <Menu.Item key="39"><Link to="/node/Express/UpLoad">文件上传</Link></Menu.Item>
                <Menu.Item key="31"><Link to="/node/Express/ExpRoutes">路由模块化</Link></Menu.Item>
                <Menu.Item key="30"><Link to="/node/Express/ExpPro">项目模块化</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="heat-map" />
                    <span>Koa</span>
                  </span>
                }
              >
                <Menu.Item key="66"><Link to="/node/Koa/Cognition">安装Koa</Link></Menu.Item>
                <Menu.Item key="64"><Link to="/node/Koa/KoaRouter">Koa路由</Link></Menu.Item>
                <Menu.Item key="65"><Link to="/node/Koa/Middleware">中间件</Link></Menu.Item>
                <Menu.Item key="67"><Link to="/node/Koa/Template">模板引擎</Link></Menu.Item>
                <Menu.Item key="68"><Link to="/node/Koa/Static">静态资源配置</Link></Menu.Item>
                <Menu.Item key="69"><Link to="/node/Koa/Storage">数据存储</Link></Menu.Item>
                <Menu.Item key="62"><Link to="/node/Koa/Optimize">优化Mongodb</Link></Menu.Item>
                <Menu.Item key="60"><Link to="/node/Koa/KoaModule">路由封装</Link></Menu.Item>
                <Menu.Item key="61"><Link to="/node/Koa/KoaPro">项目模块化</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '24px 16px',overflow: 'initial', background: '#fff',height:this.state.height-48 }}>
              <div style={{ padding: 24, background: '#fff' }}>
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