import React, { Component } from 'react';
import { message } from 'antd';
import SlotUse from './slotUse';

class slotComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        const warning = () => {
            message.warning('这是父组件传递一个点击事件');
        }
        return ( 
            <div>
                <div >
                    <h3 className='Title_h3'>具名插槽</h3>
                    <p>
                        上一节的组合和继承是普通的插槽，具名插槽和vue的具名插槽不一样。vue是通过
                        在子组件内定义好插槽名称，然后再调用子组件的时候将包裹的div内设置好name属性。
                        react是直接通过prop传值，在子组件调用的时候在组件上设置各式各样的属性，或者
                        子组件内还有其他调用的组件S，通过设置的属性值判断组件S是否显示。
                    </p>
                    <pre>
                        <code>{
        `
        父组件
        this.state = { showBar:false ,showContent:true}          

        return (
            <div>
                <ChildComponent showBar={state.showBar} title="商城导航"
                    >
                    {       /** 对象的形式包裹一个变量，在子组件获取props属性为children，可以设置多个值，相当于多个具名插槽*/
                        {
                            content:(<div> hello  Miss-tree</div>),
                            text:"这是一个纯文本字符串",
                            bnclick:()=>{ warning() console.log("这是传递一个点击事件") } /** 也可以以传递一个事件的形式*/
                        }
                    }
                </ChildComponent>
            </div>
        )

        子组件
        import TopBar from "./TopBar"
        import Content from "./Content"

        const {showBar,showContent,children} = this.props

        componentDidMount(){
            const {title="首页"} = this.props
            document.title = title
        }

        return(
            <div>
                {showBar&&<TopBar/>}   /**showBar为true时显示*/
                {showContent?<Content/>:''}
                {children.content}
                {children.text}
                <button onClick={children.bnclick}></button>
            </div>
        )
        `                
                        }</code>
                    </pre>
                </div> 
                <div>
                        <h4>请看示例</h4>
                        <div>
                            <SlotUse >
                                {
                                    {   
                                        content:(<div> hello  Miss-tree</div>),
                                        text:"这是一个纯文本字符串",
                                        btnClick:()=>{
                                            warning() 
                                            console.log("这是传递一个点击事件")}
                                    }
                                }
                            </SlotUse>
                        </div>
                </div>   
            </div>
         );
    }
}
 
export default slotComponent;