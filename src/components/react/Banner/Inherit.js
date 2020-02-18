import React, { Component } from 'react'

export default class Inherit extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 className="Title_h3">组合 vs 继承</h3>
                    <div>
                        看文档已经是绝望了，看完网上的详解才清楚，就是Vue的slot插槽，给组件嵌套html文件。
                    </div>
                    <pre>
                        <code>
                            {`
        function FancyBorder(props) {
            return (
              <div className={'FancyBorder FancyBorder-' + props.color}>
                {props.children}
              </div>
            );
        }
        
        function WelcomeDialog() {
            return (
              <FancyBorder color="blue">
                <h1 className="Dialog-title">
                  Welcome
                </h1>
                <p className="Dialog-message">
                  Thank you for visiting our spacecraft!
                </p>
              </FancyBorder>
            );
        }
        最终渲染为
        <div className={'FancyBorder FancyBorder-' + props.color}>
            <h1 className="Dialog-title">
            Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </div>

                            `}
                        </code>
                    </pre>
                    <p>上面示例中FancyBorder组件<code>{` {props.children} `}</code>代表在调用FancyBorder组件包裹的
                    html标签，就是将包裹的html标签放到FancyBorder组件内替代<code>{` {props.children} `}</code>渲染</p>
                </div>
                <div>
                    <h3>组合方式二</h3>
                    <pre>
                        <code>
                            {`
        function SplitPane(props) {
            return (
              <div className="SplitPane">
                <div className="SplitPane-left">
                  {props.left}
                </div>
                <div className="SplitPane-right">
                  {props.right}
                </div>
              </div>
            );
        }
        
        function App() {
        return (
            <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
        );
        }   
        最终渲染为
        div className="SplitPane">
            <div className="SplitPane-left">
                <Contacts />
            </div>
            <div className="SplitPane-right">
                <Chat />
            </div>
        </div>
                            `}
                        </code>
                    </pre>                                                                           
                    <p>
                        通过在 SplitPane 组件定义父组件可以在 SplitPane 组件定义插槽的位置，在父组件调用 SplitPane 组件时在
                        &lt; SplitPane /&gt;标签定义名称，赋值或者传一个组件
                    </p>
                </div>
                <div>
                    <h3>组合方式三</h3>
                    <pre>
                        <code>
                            {`
        function Dialog(props) {
            return (
              <FancyBorder color="blue">
                <h1 className="Dialog-title">
                  {props.title}
                </h1>
                <p className="Dialog-message">
                  {props.message}
                </p>
              </FancyBorder>
            );
        }
        
        function WelcomeDialog() {
            return (
                <Dialog
                title="Welcome"
                message="Thank you for visiting our spacecraft!" />
            );
        }    
        最终渲染为
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
                            `}
                        </code>
                    </pre> 
                    <div>此方式是直接在 Dialog 组件传值，Dialog组件内部调用接收的值</div>                                                       
                </div>
                <div>
                    <h3>继承</h3>
                    <p>
                    Props 和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。
                    注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。
                    如果你想要在组件间复用非 UI 的功能，我们建议将其提取为一个单独的 JavaScript 模块，
                    如函数、对象或者类。组件可以直接引入（import）而无需通过 extend 继承它们。
                    </p>
                </div>
            </div>
        )
    }
}
