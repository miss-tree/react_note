import React, { Component } from 'react'

export default class ActionTypes extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>actionTypes</h3>
                    <p>在实际的项目中我们经常会遇到单词写错，但是也不报错的问题，这样很难排查出问题。
                        例如：在组件定义<span>let action=<code>{`{type:'actionValue'}`}</code></span>,
                        但是在reducer.js文件就写成了<span><code>{`if(action.type==='actionVal'){`}</code></span>，
                        但是就是不会报错。
                        这时候我们就用到了一个方法，把一些用到的名称定义成一个常量放到一个文件中。
                    </p>
                    <pre>
                        <code>
                            {`
        ActionTypes.js
        export const ADD_NUMBER='addNumber'  //定义常量要大写，便于辨认   
        export const DEL_NUMBER='delNumber'

        在reducer.js使用
        import {ADD_NUMBER,DEL_NUMBER} from './ActionTypes'
        if(action.type===ADD_NUMBER){
            let newState=JSON.parse(JSON.stringify(state))
            newState.title=action.value
            return newState
        }    

        在组件使用
        import {ADD_NUMBER,DEL_NUMBER} from './ActionTypes'
        changeVal(){
            const action={
                type:ADD_NUMBER',//订阅的名称
                value:"hello",//改变的值
            }
            store.dispatch(action)
        }
        
        在组件和reducer.js使用输入错误就会报错了

                            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <h3>抽离方法</h3>
                    <p>在大型项目中，在组件1中使用的方法其他组件或地方也会使用到，这时候就要把方法抽离出来封装。
                        例如上面的例子修改下就是这样了</p>
                        <pre>
                        <code>
                            {`
        ActionTypes.js
        export const ADD_NUMBER='addNumber'  //定义常量要大写，便于辨认   
        export const DEL_NUMBER='delNumber'
        export const CHANGE_VAL='changeVal'

        export const addAction=(value)=>({
            type:ADD_NUMBER,
            value,
        })
        export const delAction=(index)=>({
            type:DEL_NUMBER,
            index,
        })
        export const changeAction=()=>({
            type:CHANGE_VAL,
        })

        在reducer.js使用
        import {ADD_NUMBER,DEL_NUMBER} from './ActionTypes'
        if(action.type===ADD_NUMBER){
            let newState=JSON.parse(JSON.stringify(state))
            newState.title=action.value
            return newState
        }    
        ……

        在组件使用
        addVal(val){
            const action=addAction(val)
            store.dispatch(action)
        }
        delVal(index){
            const action=delAction(index)
            store.dispatch(action)
        }
        changeVal(){
            const action=changeAction()
            store.dispatch(action)
        }
                            `}
                        </code>
                    </pre>
                    <p>这样就减少了代码的使用量，可复用性</p>
                </div>
            </div>
        )
    }
}
