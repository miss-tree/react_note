import React ,{Component} from "react";

class Config extends Component{
    render(){
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>React路由</h3>
                    <div>官网：https://reacttraining.com/react-router/web/example/basic</div>
                    <div className="hang">
                        <div>cnpm install react-router-dom --save  <span>安装</span></div>
                        <div>import <code>{`{ BrowserRouter as Router, Route, Link }`}</code>  from "react-router-dom";  <span>根组件(APP.js)引入</span></div>
                        <div>
                            <span className="red">注意</span>
                            上面的引入方式在打包的时候有问题，<span className="lineCode">BrowserRouter</span>类似于Vue的History模式，需要后台配合需要改下面的方法：
                        </div>
                        <div>import <code>{`{ HashRouter as Router, Route, Link }`}</code>  from "react-router-dom";  <span>根组件(APP.js)引入</span></div>
                    </div>
                    <pre>
                        <code>
                            {`
        <Router>
                <Link to="/">首页</Link>
                <Link to="/news">新闻</Link>
                <Link to="/product">商品</Link>

               <Route exact path="/" component={Home} />
               <Route path="/news" component={News} />    
               <Route path="/product" component={Product} />
        </Router>                   

        404处理
        import { HashRouter as Router, Route, Link , Switch } from "react-router-dom";
        <Router>
            <Switch>
                <Link to="/">首页</Link>
                <Link to="/news">新闻</Link>
                <Link to="/product">商品</Link>

               <Route exact path="/" component={Home} />
               <Route path="/news" component={News} />    
               <Route path="/product" component={Product} />
               <Route component={NotFound} />    //匹配404页面  
            </Switch>   
        </Router>   
                            `}
                        </code>
                    </pre>
                    <span className="red">注意</span>
                    exact表示严格匹配，否则Home组件将在所有路由页面出现，替代将要渲染的组件.
                    <div>Switch 表示会将显示的下面的组件只显示第一个，避免出现404页面</div>
                    <div>Route 渲染内容的三种方式：children、component、render</div>
                    <hr></hr>
                    <p>
                        这三种方式在路由中互斥只显示一种，优先级为：children&gt;component&gt;render。
                        其中children和render接收一个函数，component接收一个组件。但是还是有一些差异
                    </p>
                    <ul>
                        <li>children:不管路由是否匹配都渲染children函数内组件，其他和render一致</li>
                        <li>render：只在路由匹配的时候调用渲染</li>
                        <li>component：只在路由匹配的时候调用渲染</li>
                    </ul>
                    <hr></hr>
                    <pre>
                        <code>
                            {`
        import { HashRouter as Router, Route, Link , Switch } from "react-router-dom";
        <Router>
            <Switch>
                。。。。。
                <Route exact path="/" 
                component={Home} 
                children={()=><div>children content</div>}
                render={()=><div>render content</div>}
                />
                。。。。。
            </Switch>   
        </Router>   
                            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <h3>路由重定向</h3>
                    <pre>
                        <code>
                            {`
        import { HashRouter as Router, Route, Link , Switch } from "react-router-dom";
        <Router>
            <Switch>
                <Link to="/">首页</Link>
                <Link to="/news">新闻</Link>
                <Link to="/product">商品</Link>

               <Route exact path="/" component={Home} />
               <Route path="/news" component={News} />    
               <Route path="/product" component={Product} />
               <Redirect from="/*" to="/" />   //重定向到其他组件
            </Switch>   
        </Router>   
                            `}
                        </code>
                    </pre>
                    <p>必须用<span className="spanCode"><code>{`<Switch>`}</code></span>标签，Redirect必须放最后一行；
                    含义：如果上面的路由都匹配不到时，跳转到"/"页面</p>
                </div>
                <div>
                    <h3>路由跳转</h3>
                    <pre>
                        <code>
                            {`
        import {  Link } from "react-router-dom";
        ……
        <Link to="/product">商品</Link>

        跳转到主页
        gotoHome() {
            this.props.history.push('/home')
        }
  
                            `}
                        </code>
                    </pre>
                    <p><code>{``}</code></p>
                </div>
            </div>
        );
    }
}

export default Config;