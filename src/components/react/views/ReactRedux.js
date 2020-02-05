import React, { Component } from 'react'

export default class ReactRedux extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>Redux</h3>
                    <p><code>{`<Provider>`}</code>是一个提供器，只要使用了这个组件，
                    组件里边的其它所有组件都可以使用store了，这也是React-redux的核心组件了</p>
                    <pre>
                        <code>
                            {`
        index.js
        import React from 'react';
        import ReactDOM from 'react-dom';
        import TodoList from './TodoList'
        //---------关键代码--------start
        import { Provider } from 'react-redux'
        import store from './store'
        //声明一个App组件，然后这个组件用Provider进行包裹。
        const App = (
            <Provider store={store}>
                <TodoList />
            </Provider>
        )
        //---------关键代码--------end
        ReactDOM.render(App, document.getElementById('root'));   
        
        TodoList组件
        import React, { Component } from 'react';
        //import store from './store'
        import {connect} from 'react-redux'

        class TodoList extends Component {
            constructor(props){
                super(props)
                //this.state = store.getState()
            }
            render() { 
                return (
                    <div>
                        <div>
                            <input value={this.props.inputValue} onChange={this.props.inputChange} />
                            <button onClick={this.props.clickButton}>提交</button>
                        </div>
                        <ul>
                            {
                                this.props.list.map((item,index)=>{
                                    return (<li key={index}>{item}</li>)
                                })
                            }
                        </ul>
                    </div>
                );
            }
        }

        const stateToProps = (state)=>{
            return {
                inputValue : state.inputValue //store的值
            }
        }
        const dispatchToProps = (dispatch) =>{
            return {
                inputChange(e){
                    let action = {
                        type:'change_input',
                        value:e.target.value
                    }
                    dispatch(action)
                },
                clickButton(){//点击添加事件
                    let action = {
                        type:'add_item'
                    }
                    dispatch(action)
                }
            }
        }

        export default connect(stateToProps,dispatchToProps)(TodoList);
                            `}
                        </code>
                    </pre>
                    <p><code>{`<Provider>`}</code>提供了 store 的属性，所以被包裹的组件都可以使用 store 的值。
                    不再需要在组件内引入 store 了。connect连接器提供了连接<code>{`<Provider>`}</code>的方法。
                    需要将值 stateToProps 映射出来。通过组件传值的方式获取props的值。connect()第二个参数是发布订阅
                    事件，reducer.js还是原来的写法不变。
                    </p>
                </div>
                <div>
                    <h3>更改为无状态组件</h3>
                    <pre>
                        <code>
                            {`
        import React, { Component } from 'react';
        import {connect} from 'react-redux'

        const TodoList =(props)=>{
            let {inputValue ,inputChange,clickButton,list} = props; // 粘贴过来后，此处要进行修改
            return (
                <div>
                    <div>
                        <input value={inputValue} onChange={inputChange} />
                        <button onClick={clickButton}>提交</button>
                    </div>
                    <ul>
                        {
                            list.map((item,index)=>{
                                return (<li key={index}>{item}</li>)
                            })
                        }
                    </ul>
                </div>
            );
        }

        const stateToProps = (state)=>{
            return {
                inputValue : state.inputValue //store的值
            }
        }
        const dispatchToProps = (dispatch) =>{
            return {
                inputChange(e){
                    let action = {
                        type:'change_input',
                        value:e.target.value
                    }
                    dispatch(action)
                },
                clickButton(){//点击添加事件
                    let action = {
                        type:'add_item'
                    }
                    dispatch(action)
                }
            }
        }

        export default connect(stateToProps,dispatchToProps)(TodoList);
                            `}
                        </code>
                    </pre>
                    <p>结合无状态组件，可以使项目更优化。使用了ES6的解构赋值，减少this.props的调用，代码更少</p>
                </div>
            </div>
        )
    }
}
