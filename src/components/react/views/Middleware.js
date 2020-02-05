import React, { Component } from 'react'

export default class Middleware extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>中间件</h3>   
                    <p>
                        我们经常会用到一些插件，常用的插件就是  Redux-thunk  但是并不在Redux基础组件中，也就是说需要进行新安装。
                        <span className='spanCode'>npm install --save redux-thunk</span>。
                        但是store = createStore(reducer,applyMiddleware(thunk)) 只支持两个参数，
                        这时候React DEVtools就不能使用了，我们需要用到redux的增强函数。
                        请看下面示例：
                    </p>
                    <pre>
                        <code>
                            {`
            import { createStore , applyMiddleware ,compose } from 'redux'  //引入createStore方法， compose增强函数
            import reducer from './reducer'    
            import thunk from 'redux-thunk'
            
            const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
            
            const enhancer = composeEnhancers(applyMiddleware(thunk))
            
            const store = createStore( reducer, enhancer) // 创建数据存储仓库
            export default store   //暴露出去                
                            `}
                        </code>
                    </pre>
                    <div>也许对增加函数还不能完全理解，其实你完全把这个想成固定代码，直接使用就好。</div>
                </div> 
                <div>
                    <h3>中间件的使用</h3>
                    <p>在向后台请求数据，但是这些数据又是state仓库数据的时候，中间件就可以进行异步处理。把请求的过程放到
                        redux，就可以优化项目结构，减少组件的代码。
                    </p>
                    <pre>
                        <code>
                            {`
        ActionTypes.js                    
        export const getTodoList = () =>{
            return (dispatch)=>{
                axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
                    const data = res.data
                    const action = getListAction(data)
                    dispatch(action)
                })
            }
        }               
        
        组件
        //先引入getTodoList
        import {getTodoList} from './store/ActionTypes'
        ---something---
        componentDidMount(){
            const action = getTodoList()
            store.dispatch(action)
        }
                            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <h3>redux-saga</h3>
                    <p>
                        'redux-saga'和'redux-thunk'一样的中间件，相对'redux-thunk'，'redux-saga'复杂度高点
                    </p>
                    <pre>
                        <code>
                            {`
        store/index.js                    
        import { createStore , applyMiddleware ,compose } from 'redux'  //  引入createStore方法
        import reducer from './reducer'  
        //------关键代码----start----------- 
        import createSagaMiddleware from 'redux-saga' 
        const sagaMiddleware = createSagaMiddleware();
        //------关键代码----end-----------
        
        import mySagas from './sagas' //引入文件

        const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
        //------关键代码----start-----------
        const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
        //------关键代码----end-----------

        const store = createStore( reducer, enhancer) // 创建数据存储仓库
        export default store   //暴露出去  
        
        ActionTypes.js  
        export const  GET_MY_LIST = 'getMyList'
        export const getMyListAction = ()=>({
            type:GET_MY_LIST
        })

        import { takeEvery ,put } from 'redux-saga/effects'  
        import {GET_MY_LIST,getListAction} from './actionTypes'
        import axios from 'axios'

        //generator函数
        function* mySaga() {
            //等待捕获action
            yield takeEvery(GET_MY_LIST, getList)
        }

        function* getList(){
            // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            //     const data = res.data
            //     const action = getListAction(data)
            //     put(action)

            // })
            const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
            const action = getListAction(res.data)
            yield put(action)   //put 是'redux-saga'自带的，代替 dispatch
        }
        export default mySaga;
        
        组件
        import {getMyListAction} from './store/ActionTypes'
        ---something---
        componentDidMount(){
            const action =getMyListAction()
            store.dispatch(action)
            console.log(action)
        }
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        )
    }
}
