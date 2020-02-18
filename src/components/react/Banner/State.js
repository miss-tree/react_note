import React from 'react'

const State=()=>{
    return (
        <div>
            <div>
                <h3 className='Title_h3'>无状态组件</h3>
                <p>无状态组件就是直接的UI部分，没有class的state和方法，直接的渲染UI。
                    虽然这样，但是还是要引入<code>{`import React from 'react'`}</code>
                    不然无法使用JSX渲染。
                </p>
                <div>正常组件</div>
                <pre>
                    <code>
                        {`
        import React, { Component } from 'react'

        export default class componentName extends Component {
            render() {
                return (
                    <div>
                        
                    </div>
                )
            }
        }                
                        `}
                    </code>
                </pre>
                <div>无状态组件</div>
                <pre>
                    <code>
                        {`
        import React from 'react'

        const State=(props)=>{
            return (
                <div>
                    <div>
                        <h3 className='Title_h3'>无状态组件</h3>
                        <div>正常组件</div>
                    </div>   
                </div>
            )
        }       
        export default State;      
                        `}
                    </code>
                </pre>
                <p>
                    无状态组件因为没有类的继承，渲染性能会相对较高
                </p>
            </div>   
        </div>
    )
}

export default State;
