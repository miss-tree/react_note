import React ,{Component} from "react";
import { message, Button } from 'antd';

class Events extends Component{
    render(){
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>绑定事件的三种方式</h3>
                    <p>在react中，点击事件会改变this的指向，为了绑定事件，我们这里有几种方式</p>
                </div>
                <div>
                    <h3 >在constructor里面定义</h3>
                    <pre>
                        <code>
                            {`
    constructor(props){
        super(props);   //固定写法
        this.getMessage= this.getMessage.bind(this);
    }    

    getMessage(){
        alert("hello");
    }

    <button onClick={this.getMessage}>获取数据--改变this指向的方法</button>
                            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <h3 >事件绑定this</h3>
                    <pre>
                        <code>
                            {`
    getMessage(){
        alert("hello");
    }

    <button onClick={this.getMessage.bind(this)}>获取数据--改变this指向的方法</button>
                            `}
                        </code>
                    </pre>
                    <p>推荐在需要带参数的情况下使用此方法</p>
                </div>
                <div>
                    <h3 >ES6箭头函数(推荐)</h3>
                    <pre>
                        <code>
                            {`
    getMessage=()=>{
        alert("hello");
    }

    <button onClick={this.getMessage}>获取数据--改变this指向的方法</button>
                            `}
                        </code>
                    </pre>
                </div>
                
                <div>
                    <h3 >input事件</h3>
                    <pre>
                        <code>
                            {`
    inputChange=()=>{
        /*获取dom节点
        1、给元素定义ref属性
            <input ref="username" />
        2、通过this.refs.username 获取dom节点
        */
        let val=this.refs.username.value;
        this.setState({
            username:val
        })
    }

    <input ref="username" onChange={this.inputChange}/>
                            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <h3 >键盘事件</h3>
                    <pre>
                        <code>
                            {`
    //键盘事件
    inputKeyUp=(e)=>{
        if(e.keyCode==13){
            alert(e.target.value);
        }
    }

    <input onKeyUp={this.inputKeyUp}/>
                            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <h3 >双向数据绑定</h3>
                    <pre>
                        <code>
                            {`
    inputChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    setUsername=()=>{
        this.setState({
            username:'李四'
        })
    }

    <input  value={this.state.username} onChange={this.inputChange}/> 
    <p> {this.state.username}</p>
    <button onClick={this.setUsername}>改变username的值</button>
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        );
    }
}

export default Events;