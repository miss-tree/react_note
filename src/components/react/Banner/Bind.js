import React ,{Component} from "react";

class Bind extends Component{
    render(){
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>React属性绑定</h3>
                    <p>基本和Vue差不多，就是项目安装没有直接的安装vue-router和vueX，
                        就是简单的项目结构，多个.gitignore文件，git上传去除文件。
                        文件需要自己整理，路由要自己封装。redux是React的类似vue的VueX，
                        安装：npm install --save redux(后面讲)</p>
                    <div>其实React 主要考究的就是我们的js功底</div>    
                </div>
                <div>
                    <h3>React 的render</h3>
                    <pre>
                        <code>
                            {`
        class XXXX extends Component{
            constructor(props){
                super(props)   //固定写法
                this.state={
                    msg:'我是一个home组件',
                    color:'red',
                    style:{
                        color:'red',
                        fontSize:'40px'
                    }
                }
            } 
        } 
        export default XXXX;
                            `}
                        </code>
                    </pre>
                    <p>
                    子类必须在constructor方法中调用super方法，否则新建实例时会报错。
                    这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
                    如果不调用super方法，子类就得不到this对象
                    </p>
                </div>
                <div>
                    <h3>React 的render</h3>
                    <p>JSX的实质就是React.creacteElement的调用，每个div里面的标签都是不断的嵌套调用方法</p>
                </div>
                <div>
                    <h3>绑定state的值</h3>
                    <pre>
                        <code>
                            {`
        <h2>{this.state.msg}</h2>
        <label htmlFor="name">姓名</label>
        <div id="box" className='red'>我是一个红的的div---id</div>
        <div style={{"color":'red'}}>我是一个红的的 div  行内样式</div>
        <div style={this.state.style}>我是一个红的的 div  行内样式</div>                    
                            `}   
                        </code>
                    </pre>
                    <span className="red">属性绑定注意</span>
                    <p>class要换成className</p>
                    <p>for要换成 htmlFor</p>
                    <p>其他的属性和以前写法是一样的</p>
                </div>
                <div>
                    <h3>引入图片的3种方式</h3>
                    <pre>
                        <code>
                            {`
        import logo from '../assets/images/1.jpg';
        
        <img src={logo} />
        <img src={require('../assets/images/1.jpg')} />
        <img src="https://www.baidu.com/img/xinshouye_353af22a7f305e1fb6cfa259394dea9b.png" />
                            `}
                        </code>
                    </pre>
                    <span className="red">注意</span>
                    <p>需要绑定key值，虽然不报错，但是会提醒</p>
                </div>
                <div>
                    <h3>动态显示DOM</h3>
                    <pre>
                        <code>
                            {`
        { this.state.flag?<Lifecycle title={this.state.title} />:""}
                            `}
                        </code>
                    </pre>
                    <span className="red">注意</span>
                    <p>此方法实现了类似Vue的 V-show 或 V-if 动态显示DOM，通过点击事件改变this.state.flag的值</p>
                </div>
            </div>
        );
    }
}

export default Bind;