import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>Store必须是唯一的</h3>
                    <p>使用redux只在这个index.js文件中用createStore()方法，声明了一个store，
                        之后整个应用都在使用这个store</p>
                    <h3>只有<span className='red'>store</span>能改变自己的内容，<span className='red'>Reducer</span>不能改变</h3>
                    <p>
                    Reudcer只是返回了更改的数据，但是并没有更改store中的数据，store拿到了Reducer的数据，自己对自己进行了更新。
                    </p>
                    <h3><span className='red'>Reducer</span>必须是纯函数定义</h3>
                    <p>
                    如果函数的调用参数相同，则永远返回相同的结果。它不依赖于程序执行期间函数外部任何状态或数据的变化，必须只依赖于其输入参数。
                    说白了就是它的返回结果，是完全由传入的参数state和action决定的，这就是一个纯函数
                    </p>
                    <pre>
                        <code>
                            {`
        export default (state = defaultState,action)=>{
            if(action.type === CHANGE_INPUT){
                let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
                newState.inputValue = action.value
                return newState
            }
            //state值只能传递，不能使用
            if(action.type === ADD_ITEM ){ //根据type值，编写业务逻辑
                let newState = JSON.parse(JSON.stringify(state)) 
                newState.list.push(newState.inputValue)  //push新的内容到列表中去
                newState.inputValue = ''
                return newState
            }
            if(action.type === DELETE_ITEM ){ //根据type值，编写业务逻辑
                let newState = JSON.parse(JSON.stringify(state)) 
                newState.list.splice(action.index,1)  //push新的内容到列表中去
                return newState
            }
            return state
        }        
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        )
    }
}
