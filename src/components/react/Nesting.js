import React ,{Component} from "react";

class Nesting extends Component{
    // constructor(props){
    //      super(props)   
    // }
    render(){
        const url='`${this.props.match.url}/`';
        const to='`${this.props.match.url}/add`'
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>路由嵌套</h3>
                    <div>在组建内使用</div>
                    {/* <div className="hang">
                        <div>cnpm install react-router-dom --save  <span>安装</span></div>
                        <div>import <code>{`{ HashRouter as Router, Route, Link }`}</code>from "react-router-dom";  
                        <span>根组件(APP.js)引入</span></div>
                    </div> */}
                    <pre>
                        <code>
                            {`
        方法一：                    
        <div className="right">
            <Route exact path="/user/" component={Main} /> //直接输入地址，表示加载/user下第一个默认组件
            <Route  path="/user/info" component={Info} />
        </div>                    
        方法二：                  
        <div className="right">
            <Route exact path={${url}} component={ShopList} /> //在本地址上添加
            <Route  path={${to}} component={ShopAdd} />
        </div>                  
                            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <span className="red">注意</span>
                    在嵌套的组件使用 Route 加载组件，后面路由模块化的时候会有所修改
                </div>
            </div>
        );
    }
}

export default Nesting;