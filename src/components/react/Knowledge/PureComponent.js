import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    render() {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>PureComponent</h3>
                    <ul>
                        <li>和Component几乎完全相同，但是PureComponent通过
                            prop和state的浅比较来实现shouldComponentUpdate，
                            某些情况下可以用PureComponent提升性能
                            <p>所谓浅比较(shallowEqual)，即react源码中的一个函数，
                                然后根据下面的方法进行是不是PureComponent的判断，
                                帮我们做了本来应该我们在shouldComponentUpdate中做的事情</p>
                        </li>
                        <li>
                            PureComponent不仅会影响本身，而且会影响子组件，
                            所以PureComponent最佳情况是展示组件
                        </li>
                        <li>若是数组和对象等引用类型，则要引用不同，才会渲染(但是数据是多层嵌套的，在修改嵌套数据不会更新)</li>
                        <li>
                            如果prop和state每次都会变，那么PureComponent的效率还不如Component，
                            因为你知道的，进行浅比较也是需要时间
                        </li>
                        <li>
                            若有shouldComponentUpdate，则执行它，
                            若没有这个方法会判断是不是PureComponent，若是进行浅比较。
                            <p>
                                也是比较好理解的，就是不要在PureComponent中
                                使用shouldComponentUpdate，因为根本没有必要
                            </p>
                        </li>
                    </ul>
                    <div>
                        <pre>
                            <code>
                                {`
        使用普通的 Component 组件
        export default class PureComp extends Component { 
            constructor(props) {
                super(props);
                this.state = {  num:0 };
            }
            setNumber=()=>{
                this.setState({ num:100 })
            }
            shouldComponentUpdate(nextProps,nextState){
                return nextState.num!==this.state.num  // 在this.state.num 发生变化才重新渲染
            }
            render() {
                console.log("render()")
                return (
                    <div>
                        <Button onClick={this.setNumber}>{this.state.num}</Button>
                    </div>
                )
            }
        }

        PureComponent
        export default class PureComp extends PureComponent { 
            constructor(props) {
                super(props);
                this.state = {  num:0 };
            }
            setNumber=()=>{
                this.setState({ num:100 })
            }
            render() {
                console.log("render()")
                return (
                    <div>
                        <Button onClick={this.setNumber}>{this.state.num}</Button>
                    </div>
                )
            }
        }
                                
                                `}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        )
    }
}
