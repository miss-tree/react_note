import React,{Component} from 'react'
import store from '../../store'//webpack默认引入store下的index.js

class Redux extends Component{
    constructor(props){
        super(props)
        console.log(store.getState())//getState()方法获取store数据
        this.state=store.getState()//赋值
    }
    render(){
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>Redux</h3>
                    <p>
                    Redux是一个用来管理管理数据状态和UI状态的JavaScript应用工具。
                    随着JavaScript单页应用（SPA）开发日趋复杂，JavaScript需要管理比任何时候都要多的state（状态），
                    Redux就是降低管理难度的。（Redux支持React，Angular、jQuery甚至纯JavaScript,vue是自带vueX）
                    </p>
                    <div>
                    感谢哔哩哩博主技术胖<a href='https://www.bilibili.com/video/av56213747' target='_blank'>分享的视频</a>
                    </div>
                    <div> 中文官网：
                        <a href='https://www.redux.org.cn/' target='_blank'>https://www.redux.org.cn/</a>
                    </div>
                </div>
                <div>
                    <h3>安装使用</h3>
                    <div className='hang'>
                        <div>npm install --save redux <span>安装redux</span></div>
                    </div>
                    <p>下面讲解简单的示例demo，首先创建store文件夹，然后创建index.js和reducer.js，最后在组件引用</p>
                    <pre>
                        <code>
                            {`
        index.js
        import {createStore} from 'redux'
        import reducer from './reducer'

        const store=createStore(
            reducer,
            //加上下面这段话就可以在Redux DevTools工具查看数据，类似 Vue DevTools
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

        export default store;   
        
        reducer.js
        const defaultState={
            title:'hello world',
        }
        
        export default (state=defaultState,action)=>{
            return state
        }
                            `}    
                        </code>
                    </pre>
                    <div>{this.state.title}</div>
                    <pre>
                        <code>
                            {`
        组件使用                    
        import React,{Component} from 'react'
        import store from '../../store'//webpack默认引入store下的index.js
        
        class Redux extends Component{
            constructor(props){
                super(props)
                console.log(store.getState())//getState()方法获取store数据
                this.state=store.getState()//赋值
            }
            render(){
                return (
                    <div>{this.state.title}</div> 
                )
            }
        } 
        
        export default Redux;
                            `}    
                        </code>
                    </pre>
                </div>
            </div>
        )
    }
} 

export default Redux;