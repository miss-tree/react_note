import React, { Component } from 'react'

export default class HighComponent extends Component {
    render() {
        const nameVal= '用户名: ${username}, 密码: ${password}, 确认密码: ${rePassword}';
        const hello='用户名: ${username}, 密码: ${password}'
        return (
            <div>
                <div>
                    <h3 className="Title_h3">高阶组件</h3>
                    <p>
                    高阶函数是一个函数，它接收函数作为参数或将函数作为输出返回。
                    在 React 中高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件。
                    看了文档半天都不懂，一脸懵逼，最后看来网上的详解才明白过来。
                    感谢博主<a href="https://segmentfault.com/a/1190000018633603?utm_source=tag-newest" 
                    target="_blank"  rel='nofollow me noopener noreferrer' title="segmentfault">xpromise                   
                        </a> ,讲得特别详细。不懂的还可以去他的<a href="https://github.com/xxpromise/React-HOC/" 
                    target="_blank"  rel='nofollow me noopener noreferrer' title="git">git仓库                  
                        </a>查看。下面就简单的叙述一下。
                    </p>
                </div>
                <div>
                    <h3>向高阶组件中传参</h3>
                    <pre>
                        <code>{`
        import React, {Component} from 'react';
        // 再次包裹了一层高阶函数, 这个高阶函数执行后返回值才是高阶组件
        // 通过这种方式, 高阶组件内部就能获取参数了~
        export default (title) => (WrappedComponent) => {
            return class extends Component {
                state = {username: '', password: '', rePassword: ''}
                
                onChange = (stateName, stateValue) => {
                    this.setState({[stateName]: stateValue});
                }
                
                composeChange = (name) => {
                    return (e) => this.onChange(name, e.target.value);
                }
                
                handleSubmit = (e) => {
                    e.preventDefault();
                    const { username, password, rePassword } = this.state;
                    if (rePassword) {
                        alert(${nameVal});
                    } else {
                        alert(${hello});
                    }
                }
                
                render () {
                    // 抽取方法
                    const mapMethodToProps = {
                        composeChange: this.composeChange,
                        handleSubmit: this.handleSubmit,
                    }
                    // 将状态数据和操作的方法以 props 的方式传入的包装组件中
                    return (
                        <div>
                        {/*获取到参数值就能正常显示了~*/}
                        <h2>{title}</h2>
                        // 将当前组件接受到的props传给包装组件
                        <WrappedComponent {...this.props} {...this.state} {...mapMethodToProps}/>
                        </div>
                    )
                }
            }
        }    
        组件调用
        import React, {Component} from 'react';
        import withHoc from './with-hoc';

        class Login extends Component {
            render () {
                const { handleSubmit, composeChange, username, password, name, age } = this.props;
            
                return (
                <div>
                    <p>你的名字: {name}</p>
                    <p>你的年龄: {age}</p>
                    <form onSubmit={handleSubmit}>
                    用户名: <input type="text" name="username" value={username} onChange={composeChange('username')}/> <br/>
                    密码: <input type="password" name="password" value={password} onChange={composeChange('password')}/> <br/>
                    <input type="submit" value="登陆"/>
                    </form>
                </div>
                )
            }
        }
        export default withHoc('登陆')(Login);
                        `}</code>
                    </pre>
                    <p>
                        上述是高阶组件封装登陆组件或者注册组件，因为有部分代码相通就封装高阶组件调用，
                        若没有参数需要带可以改成 export default function HOC (WrappedComponent)。
                    </p>
                </div>
                <div>
                    <h3>使用装饰器</h3>
                    <span className="spanCode">npm i react-app-rewired customize-cra @babel/plugin-proposal-decorators -D</span>
                    <div>在项目根目录配置 config-overrides.js</div>
                    <pre>
                        <code>
                            {`
        const { override, addDecoratorsLegacy } = require('customize-cra');
        // 修改 create-react-app 的 webpack 的配置
        module.exports = override(
            addDecoratorsLegacy()
        )            
                            `}
                        </code>
                    </pre>
                    <div>修改 Login 组件</div>
                    <pre>
                        <code>
                            {`
        import withHoc from './with-hoc';
                            
        @withHoc('登陆')
        class Login extends Component {
          ...省略重复代码...
        }
        export default Login;                    
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        )
    }
}
