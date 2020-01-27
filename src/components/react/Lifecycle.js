import React ,{Component} from "react";

class Lifecycle extends Component{
    // constructor(props){
    //      super(props)   
    // }
    render(){
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>React生命周期</h3>
                    <div>官网：https://reactjs.org/docs/react-component.html</div>
                    <pre>
                        <code>
                            {`
        React生命周期函数：
            组件加载之前，组件加载完成，以及组件更新数据，组件销毁。
            触发的一系列的方法 ，这就是组件的生命周期函数


        组件加载的时候触发的函数： 
            constructor 、componentWillMount、 render 、componentDidMount
        组件数据更新的时候触发的生命周期函数：
            shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate

        你在父组件里面改变props传值的时候触发的：
            componentWillReceiveProps

        组件销毁的时候触发的：
            componentWillUnmount

        必须记住的生命周期函数：
            *加载的时候：componentWillMount、 render 、componentDidMount（dom操作）

            更新的时候：componentWillUpdate、render、componentDidUpdate

            *销毁的时候： componentWillUnmount                    
                            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <span className="red">注意</span>
                    上述生命周期函数的执行顺序
                </div>
            </div>
        );
    }
}

export default Lifecycle;