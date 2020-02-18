import React  from 'react'

export default function ValTo() {
        return (
            <div>
                <div>
                    <h3>向父组件传值</h3>
                    <p>相对于Vue，传递的方法没有那么多，主要是父组件在传值过程中将父组件的方法传递给子组件，
                        子组建在改变值的时候调用父组件的方法。
                    </p>
                    <pre>
                        <code>{`
        父组件
        import Hearder from "./Hearder"
        ……
        constructor(props){
            this.state={
                Value:"hello"
            }
        }    
        getNewVal=(val)=>{
            this.setState({
                Value:val
            })
        }
        render(){
            return(
                <div>
                    <Hearder newVal={this.getNewVal.bind(this)}/>
                </div>
            )
        }

        Hearder.js
        ……
        export default class Hearder extends Component{
            render(){
                return (
                    <div>
                        <input type="text" ref="changeVal"/>
                        <button onclick={this.props.getNewVal(this.refs.changeVal.value)}>点击</button>
                    </div>
                )
            }
        }
                        `}</code>
                    </pre>
                </div>
            </div>
        )
}
