import React ,{Component} from "react";
import './css/Structure.css'

class Structure extends Component{
    render(){
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>React结构简介</h3>
                    <p>基本和Vue差不多，就是项目安装没有直接的安装vue-router和vueX，
                        就是简单的项目结构，多个.gitignore文件，git上传去除文件。
                        文件需要自己整理，路由要自己封装。redux是React的类似vue的VueX，
                        安装：npm install --save redux(后面讲)</p>
                    <h3>index.js</h3>
                    <p>整个项目的文件入口，引入了'App.js''、 'react' 和 'react-dom' 下面做了和vue一样的组件渲染</p>
                    <div>React是 React 的核心库,react只做逻辑层（主要处理数据）</div>
                    <div>ReactDOM 是提供与 DOM 相关的功能，做渲染层，去渲染实际的DOM</div>
                </div>
                <h3>整理项目文件</h3>
                <div className='around'>
                    <div style={{width:'250px'}}>
                        <img src={require("../../assets/images/react/webpack01.jpg")} alt='' />
                    </div>
                    <div>
                        <ul>
                            <li>创建assets文件存放静态资源</li>
                            <li>创建component文件夹存放组件</li>
                            <li>创建router文件夹存放封装的路由</li>
                            <li>创建redux文件夹存放仓库变量</li>
                            <li>创建Module文件夹存放定义的方法</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>组件解析</h3>
                    <div className="hang">
                        <b>
                            <pre>
                                <code>
                                    {`
    import React, { Component } from 'react';
                                    `}
                                </code>
                            </pre>
                        </b>    
                        <span>引入React和Component </span>
                    </div>
                    <div>下面class Structure extends Component则是react实例的组件</div>
                    <p>class Structure extends Component也可以这样写class Structure extends React.Component,这样上面就可以减少引入'{'Component'}'。
                    实例采用了ES6的语法通过class继承React，构造函数constructor也可以不写，除了组件传递信息。super关键字则是继承传递的信息。
                    this.state={}定义数据，改变state的值通过this.setState({})方法。</p>
                    <div>最后通过export default Structure 将组件导出暴露给app使用</div>
                </div>
                <div>
                    <h3>serviceWorker.js文件</h3>
                    <div>
                    Service workers 非常适合渐进式Web应用程序，它允许离线访问并优化互联网连接较差的用户。
                但是当你不知道服务工作者正在缓存静态文件时，你会反复上传热修复程序，却发现你的网站一直没有更新。
                修改方式，serviceWorker.js是自动生成的文件，在src/index.js:
                    </div>
                    <pre>
                        <code>
                            {`
        // 在文件最下方将它注销掉
        serviceWorker.unregister();  
        
        从16.8版本开始，默认为 serverWorker.unregister()。
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        );
    }
}

export default Structure;