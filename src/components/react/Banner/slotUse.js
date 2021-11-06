import React, { Component } from 'react';
import { message } from 'antd';



class slotUse extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        const {title="首页"} = this.props
        document.title = title
    }
    render() { 
        const { children } = this.props
        console.log('children',children);
        return (  
            <div>
                <h3>子组件</h3>
                {children.content}
                <button onClick={children.btnClick}>点击事件</button>
            </div>
        );
    }
}
 
export default slotUse;