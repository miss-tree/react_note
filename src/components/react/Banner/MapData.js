import React ,{Component} from "react";

class MapData extends Component{
    // constructor(props){
    //      super(props)   
    // }
    render(){
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>渲染数组数据</h3>
                    <p>主要是要将数据以data里的遍历出来，循环输出。</p>
                    <pre>
                        <code>
                            {`
    <div>
    {
        this.state.list3.map(function(value,key){
            return (<li key={key}>{value.title}</li>);
        })
    }
    </div>    
                            `}
                        </code>
                    </pre>
                    <span className="red">注意</span>
                    <p>需要绑定key值，虽然不报错，但是会提醒</p>
                </div>
                <div >
                    <h3>组件</h3>
                    <p>将不需要请求数据的部分和可复用的代码做成组件</p>
                    <pre>
                        <code>
                            {`
    import Home from './components/Home';//引入组件
    
    class App extends Component {
      render() {
        return (
          <div className="App">
             <Home />
          </div>
        );
      }
    }
    export default App;
      
                            `}
                        </code>
                    </pre>
                    <span className="red">注意</span>
                    <p>在调用组件的时候首字母大写</p>
                </div>
                
            </div>
        );
    }
}

export default MapData;