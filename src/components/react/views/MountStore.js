import React, { Component } from 'react'
import { message, Button } from 'antd';
import store from "../../../store/index"

export default class MountStore extends Component {
    componentDidMount(){
    }
    gotoHome=()=> {
        this.props.history.push('/react/Redux/ReactRedux')
    }
    render() {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>全局挂载</h3>
                    <p>
                        在每一个组件
                    </p>
                    <pre>
                        <code>
                            {`
        index.js
        import store from "./store/index"
        import {Provider} from "react-redux" /**提供一个传递数据的方法，类似vue里的组件传值方法Provider*/   
        
        ReactDOM.render(
            <Provider store={store}> /**通过属性的方式将store传递下去*/
                <App />
            </Provider>,
            document.getElementById('root')
          );

        组件   注意：在组件中调用要使用一个高阶函数的方法
        import {connect} from "react-redux"  /**提供一个接收数据的方法，类似vue里的组件传值方法inject*/  
        
        export default connect(
            // mapStateToProps 把state映射到props
            state=>({num:state}),
            // mapDispatchToProps 把dispatch映射到props
            {
                add:()=>({type:"ADD"})
            }
        )(
            class GetStoreValue extends Component{
                render(){
                    const {num,dispatch,add} = this.props
                    console.log("props",this.props)
                    return (
                        <div>
                            <h3>全局Store组件调用</h3>
                            <span>{num}</span>
                            <Button onClick={()=>dispatch({type:"ADD"})}>ADD</Button>
                            <Button onClick={add}>add</Button>   /**通过上面映射的方法改变store*/
                        </div>
                    )
                }
            }
        )


        reducer
        const defaultState={
            num:0,
        }
        
        export default (state=defaultState,action)=>{
            switch(action.type){
                case "ADD":
                    return state.num+1
                    break;
                case "MINUS":
                    return state.num+1
                default:
                    return state
            }
        }
                            `}
                        </code>
                    </pre>
                    <div onClick={this.gotoHome} class="red"
                    style={{cursor:" pointer"}}>全局组件挂载Store的另一种方法</div>
                </div>
            </div>
        )
    }
}
  