import React, { Component } from 'react'

export default class Action extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>Action</h3>
                    <p>Action为的是更新redux中state的值，老版本需要在constructor()和方法上定义发布订阅事件。新版本就不需要</p>
                    <pre>
                        <code>
                            {`
        老版本需要加
        constructor(props){
            super(props)
            this.storeChange=this.storeChange(this)
            store.subscribe(this.storeChange)
        }
        storeChange(){
            this.setState(store.getState())
        }

        (最新使用方法)
        组件
        changeVal(){
            const action={
                type:'actionVal',//订阅的名称
                value:"hello",//改变的值
            }
            store.dispatch(action)
        }           
        
        reducer.js
        const defaultState={
            title:'hello world',
        }
        
        export default (state=defaultState,action)=>{
            console.log(state,action)
            //reducer只能接收state，不能改变state
            if(action.type==='actionVal'){
                let newState=JSON.parse(JSON.stringify(state))//深拷贝
                newState.title=action.value
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
  