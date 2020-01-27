import React ,{Component} from "react";

class Structure extends Component{
    // constructor(props){
    //      super(props)   
    // }
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
                <div>
                    <h3>整理项目文件</h3>
                    <div>创建assets文件存放静态资源</div>
                    <div>创建component文件夹存放组件</div>
                    <div>创建router文件夹存放封装的路由</div>
                    <div>创建redux文件夹存放仓库变量</div>
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
                    <div>最后通过export default Structure将组件导出暴露给app使用</div>
                </div>
                <div>
                    <h3>修改常用设置</h3>
                    <p>create-react-app 直接创建了脚手架，但是要修改配置要细看package.json文件的
                        <span className="spanCode">scripts</span> 里的文件读取的
                        <span className="spanCode">react-scripts</span> 是在node_modules里面找 react-scripts文件。
                    </p>
                    <div><span className="spanCode">修改端口</span> 在react-scripts/scripts/start.js文件。</div>
                    <div><span className="spanCode">修改webpack</span> 在react-scripts/config/webpack.config.dev.js文件。</div>
                </div>
            </div>
        );
    }
}

export default Structure;