import React, { Component , Suspense } from 'react';
import {  Route,Link } from "react-router-dom";
import Loading from "../index/Loading"
//antd 布局
import { Layout, Menu, Icon } from 'antd';
// import 'antd/es/Layout/style';
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
                  <Link to="/three/">
                    <Icon type="laptop" />  
                    <span>关于WebGL</span>
                  </Link>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="table" />
                      <span>Three基础</span>
                    </span>
                  }
                >
                  <Menu.Item key="6"><Link to="/three/start/base">Threejs基石</Link></Menu.Item>
                  <Menu.Item key="12"><Link to="/three/start/light">材质光源</Link></Menu.Item>
                  <Menu.Item key="4"><Link to="/three/start/Geometry">几何网格对象</Link></Menu.Item>
                  <Menu.Item key="5"><Link to="/three/start/Camera">相机</Link></Menu.Item>
                  {/* <Menu.Item key="7"><Link to="/three/start/config">配置修改</Link></Menu.Item> */}
                  {/* <Menu.Item key="8"><Link to="/three/start/viorder">vi/vim入门</Link></Menu.Item> */}
                  {/* <Menu.Item key="9"><Link to="/three/start/pack">打包压缩</Link></Menu.Item> */}
                  {/* <Menu.Item key="11"><Link to="/three/start/process">进程信息</Link></Menu.Item> */}
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="stock" />
                      <span>Three进阶</span>
                    </span>
                  }
                >
                  <Menu.Item key="36"><Link to="/three/advance/module">封装模块</Link></Menu.Item>
                  {/* <Menu.Item key="32"><Link to="/three/start/light">材质光源</Link></Menu.Item> */}
                  {/* <Menu.Item key="34"><Link to="/three/start/Geometry">几何网格对象</Link></Menu.Item> */}
                  {/* <Menu.Item key="35"><Link to="/three/start/Camera">相机</Link></Menu.Item> */}
                  {/* <Menu.Item key="37"><Link to="/three/start/config">配置修改</Link></Menu.Item> */}
                  {/* <Menu.Item key="38"><Link to="/three/start/viorder">vi/vim入门</Link></Menu.Item> */}
                  {/* <Menu.Item key="39"><Link to="/three/start/pack">打包压缩</Link></Menu.Item> */}
                  {/* <Menu.Item key="31"><Link to="/three/start/process">进程信息</Link></Menu.Item> */}
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