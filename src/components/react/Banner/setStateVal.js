import React ,{Component} from "react";
import { message, Button } from 'antd';

class Events extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter:0,
            username:""
        }
    }
    componentDidMount(){
        document.getElementById('btns').addEventListener('click',this.setClickEvent)
    }
    componentWillUnmount(){
        document.getElementById('btns').removeEventListener('click',this.setClickEvent)
    }
    setNewValue=(v)=>{
        this.setState({
            counter:this.state.counter+v
        })
        message.warning('这是一个同步更新state数据点击事件')
    }
    setClickEvent=()=>{
        this.setNewValue(1)
    }
    clickOnButton=()=>{
        setTimeout(()=>{
            this.setNewValue(1)
            console.log('this.state.counter',this.state.counter)
        },0)
    }
    setCounterVal = (v)=>{
        this.setState({
            counter:this.state.counter+v
        },()=>{
            console.log('this.state.counter',this.state.counter)
        })
        console.log('this.state.counter',this.state.counter)
    }
    clickButtonSync=()=>{
        this.setCounterVal(1)
    }
    updateSyncTime=()=>{
        this.setCounterVal(1)
        this.setCounterVal(2)
        this.setCounterVal(3)
    }
    addCounterVal=(v)=>{
        this.setState(state=>{
            return {
                counter:state.counter+v
            }
        })
    }                        
    updateSyncTimeAdd=()=>{
        this.setCounterVal(1)
        this.setCounterVal(3)
    }
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
    render(){
        return(
            <div>
                <div>
                    <h3 >改变state数据赋值</h3>
                    <p>
                        更新组件state的值不能直接修改(例如：this.state.counter=10)，只能通过setState()方法修改才能响应数据更新组件
                        setState()改变变量可能会出现几种情况：1、可能同步，2、可能异步，3、执行的值只执行最后的方法或值设置
                    </p>
                    <pre>
                        <code>
                            {`
    setData=()=>{
        this.setState({//改变state的值
            msg:"我是一个home组件 这是改变后的值"
        }),
        //第二个参数是回调函数，在setState函数调用完成并且组件开始重渲染时调用，可用来监听渲染是否完成或其他事件
        () => console.log('这是回调函数')
    }
                            `}
                        </code>
                    </pre>
                    <p>小程序的数据赋值就是根据此方法</p>
                    <h4>setState()同步更新值</h4>
                    <pre>
                        <code>
                            {`
     componentDidMount(){
        document.getElementById('btns').addEventListener('click',this.setClickEvent)
    }
    componentDidMount(){
        document.getElementById('btns').removeEventListener('click',this.setClickEvent)
    }
    setNewValue=(v)=>{
        this.setState({
            counter:this.state.counter+v
        })
        message.warning('这是一个同步更新state数据点击事件')
    }
    setClickEvent=()=>{
        this.setNewValue(1)
    }
    clickOnButton=()=>{
        setTimeout(()=>{
            this.setNewValue(1)
            console.log('this.state.counter',this.state.counter)
        },0)
    }
                            `}
                        </code>
                    </pre>
                    <Button onClick={this.clickOnButton}>原生事件</Button>
                    <Button id="btns" onClick={this.setClickEvent}>点击原生事件</Button>
                    <p>
                    setState在setTimeout和原生事件中是同步更新的，
                    </p>
                    <h4>setState()异步更新值</h4>
                    <pre>
                        <code>
                            {`
    setCounterVal = ()=>{
        this.setState({
            counter:this.state.counter+v
        },()=>{
            console.log('this.state.counter',this.state.counter)
        })
        console.log('this.state.counter',this.state.counter)
    }
    clickButtonSync=()=>{
        this.setCounterVal(1)
    }
                            `}
                        </code>
                    </pre>
                    <Button onClick={this.clickButtonSync}>异步更新数据</Button>
                    <p>
                        从上面执行的代码在控制台查看可以看出是异步更新数据，从而得出结论
                        setState在合成事件和生命周期中是异步的，这里说的是异步其实是批量更新，
                        达到性能优化的目的。所以下面的另一个示例中多个更新操作只执行一次就是这个原因。
                    </p>
                    
                    <h4>setState()多次更新值被合并</h4>
                    <pre>
                        <code>
                            {`
    updateSyncTime=()=>{
        this.setCounterVal(1)
        this.setCounterVal(2)
        this.setCounterVal(3)
    }
                            `}
                        </code>
                    </pre>
                    <Button onClick={this.updateSyncTime}>多次更新数据</Button>
                    <p>
                        从上面执行的代码在控制台查看可以看出是只执行了一次，虽然在控制台中
                        打印了三次，是因为执行了三次，多次批量更新只执行最后一次。要想执行三次
                        只需修改成下面代码即可
                    </p>
                    <pre>
                        <code>
                            {`
    addCounterVal=(v)=>{
        this.setState(state=>{
            return {
                counter:state.counter+v
            }
        })
    }                        
    updateSyncTimeAdd=()=>{
        this.setCounterVal(1)
        this.setCounterVal(3)
    }
                            `}
                        </code>
                    </pre>
                    <Button onClick={this.updateSyncTimeAdd}>counter:{this.state.counter}</Button>
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
    <Button onClick={this.setUsername}>改变username的值</Button>
                            `}
                        </code>
                    </pre>
                    <input  value={this.state.username} onChange={this.inputChange}/> 
                    <p> {this.state.username}</p>
                    <Button onClick={this.setUsername}>改变username的值</Button>
                </div>
            </div>
        );
    }
}

export default Events;