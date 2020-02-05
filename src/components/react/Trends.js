import React ,{Component} from "react";

class Trends extends Component{
    // constructor(props){
    //      super(props)   
    // }
    render(){
        var id='`/content/${value.aid}`'
        var location='`/productcontent?name=${value.aid}`'
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>动态路由</h3>
                    <div>官网：<a href='https://reacttraining.com/react-router/web/example/basic' target='_blank'>
                    https://reacttraining.com/react-router/web/example/basic
                        </a></div>
                    <div className="hang">
                        <div><code>{`<Route path="/content/:aid" component={Content} />`}</code><span>在APP.js设置，aid表示将要传的动态数值（也可以用其他代替'id、num'）</span></div>
                        <div><code>{`<Link to={${id}}>{value.title}</Link>`}</code> ;  <span>跳转</span></div>
                        <div> <span className='spanCode'>this.props.match.params <span>对应的动态路由加载的组件里面获取传值</span></span></div>
                        <div><code>{`<Link to={${location}}>{value.title}</Link>`}</code><span>跳转页面get方式带参数name</span></div>
                        <div><span className='spanCode'>this.props.location.search <span>获取 react get传值</span></span> </div>
                    </div>
                    <h3 >js跳转路由</h3>
                    <div>官网：<a href='https://reacttraining.com/react-router/web/example/auth-workflow' target="_blank">
                    https://reacttraining.com/react-router/web/example/auth-workflow
                        </a></div>
                    <div className="hang">
                        <div><code>{`import {BrowserRouter as Router,Route, Link,Redirect,withRouter} from "react-router-dom";`}</code><span>要引入Redirect</span></div>
                        <div><code>{`this.state = {loginFlag:false};`}</code>  <span>定义一个flag</span></div>
                    </div>
                    <pre>
                        <code>
                            {`
        render() {
            if(this.state.loginFlag){
                return <Redirect to='/' />; // return <Redirect to={{ pathname: "/" }} />;
            }
            return (    
                ……            
            );
        }                   
                            `}
                        </code>
                    </pre>
                </div>
                <p>通过js改变loginFlag的状态,改变以后从新render 就可以通过Redirect自己来跳转</p>
                <div>

                </div>
            </div>
        );
    }
}

export default Trends;