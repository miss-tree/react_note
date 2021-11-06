import React, { Component } from 'react'
export default class Style  extends Component {
render() {
    return (
       <div>
             <div>
                <h3 className='Title_h3'>样式设置</h3>
                <p>
                    react 样式设置有两种种，分为组件引入(类名设置)，行内样式，
                </p>
                <pre>
                    <code>
                        {`
    import '../index.scss'    
    ....
    
        this.state = {
            stylecss:{
                color:'red',
                fontSize:'40px'
            }
        }
    &lt;div sstyle={{this.state.stylecss}}&gt; &lt;div&gt; 
       
    &lt;div sstyle={{margin: '24px 16px',overflow: 'initial', background: '#fff',height:this.state.height-48 }}&gt; &lt;div&gt;
                        `}
                    </code>
                </pre>
            </div>  
       </div>
    )
}
}