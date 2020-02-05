import React from "react"

class Module extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>路由模块化</h3>
                <p>下面演示的路由模块化的过程</p>
                <pre>
                    <code>
                        {`
        import React, { Component } from 'react';
        import { BrowserRouter as Router, Route, Link } from "react-router-dom";

        import Home from './components/Home';
        import User from './components/User';
        import Shop from './components/Shop';
        import News from './components/News';
        import './assets/css/index.css';

        let routes = [
            {path: "/", component: Home,exact:true},
            {path: "/shop",component: Shop},
            {path: "/user",component: User},
            { path: "/news", component: News}
        ];
        class App extends Component {
            render() {
                return (
                    <Router>
                        <div>
                            <header className="title">
                                <Link to="/">首页组件</Link>
                                <Link to="/user">用户页面</Link>
                                <Link to="/shop">商户</Link>
                                <Link to="/news">新闻</Link>
                            </header> 
                            {
                                routes.map((route,key)=>{
                                    if(route.exact){
                                        return <Route key={key} exact path={route.path} component={route.component}/>
                                    }else{
                                        return <Route  key={key}  path={route.path} component={route.component}/>
                                    }
                                })
                            }            
                        </div>
                    </Router>
                );
            }
        }

        export default App;
        

                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>路由嵌套</h3>
                <pre>
                    <code>
                        {`
        import React, { Component } from 'react';
        import { BrowserRouter as Router, Route, Link } from "react-router-dom";
        import './assets/css/index.css';
        import routes from './model/router.js';

        class App extends Component {
            render() {
                return (
                    <Router>
                        <div>
                            <header className="title">
                                <Link to="/">首页组件</Link>
                                <Link to="/user">用户页面</Link>
                                <Link to="/shop">商户</Link>
                                <Link to="/news">新闻</Link>
                            </header> 
                            {
                                routes.map((route,key)=>{
                                    if(route.exact){
                                        return <Route key={key} exact path={route.path}                     
                                        // route.component     value.component   <User  {...props}  routes={route.routes} />
                                        render={props => (
                                        // pass the sub-routes down to keep nesting
                                        <route.component {...props} routes={route.routes} />
                                        )}
                                        />
                                    }else{
                                        return <Route  key={key}  path={route.path} 
                                        render={props => (
                                        // pass the sub-routes down to keep nesting
                                        <route.component {...props} routes={route.routes} />
                                        )}
                                        />
                                    }
                                })
                            }            
                        </div>
                    </Router>
                );
            }
        }
        export default App;
                        `}
                    </code>
                </pre>
                <span className='red'>嵌套路由使用还要在嵌套的地方加上 </span>
                <pre>
                    <code>
                        {`
         <div className="right">
            {
                this.props.routes.map((route,key)=>{
                    return   <Route key={key} exact path={route.path} component={route.component} />
                })
            }
            {/* <Route  path="/user/add" component={UserAdd} /> */}
        </div>                
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default Module;