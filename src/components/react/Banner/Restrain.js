import React ,{Component} from "react";

class Restrain extends Component{
    // constructor(props){
    //      super(props)   
    // }
    render(){
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>非约束性组</h3>
                    <pre>
                        <code>
                            {`
    <input type="text" defaultValue="a" />                    
                            `}
                        </code>
                    </pre>
                    <p>这个 defaultValue 其实就是原生DOM中的 value 属性。
      这样写出的来的组件，其value值就是用户输入的内容，React完全不管理输入的过程。</p>
                </div>
                <div>
                    <h3 >约束性组件</h3>
                    <pre>
                        <code>
                            {`
    <input value={this.state.username} type="text" onChange={this.handleUsername}  />
                            `}
                        </code>
                    </pre>
                    <p>这里，value属性不再是一个写死的值，他是 this.state.username, 
                        this.state.username 是由 this.handleChange 负责管理的。
                    这个时候实际上 input 的 value 根本不是用户输入的内容。
                    而是onChange 事件触发之后，由于 this.setState 导致了一次重新渲染。
                    不过React会优化这个渲染过程。看上去有点类似双休数据绑定</p>
                </div>
                <div>
                    <h3 >获取表单内容</h3>
                    <pre>
                        <code>
                            {`
    handelSex=(e)=>{/*获取选中单选*/
        this.setState({
            sex:e.target.value
        })
    }

    handelCity=(e)=>{/*获取选中下拉框*/
        this.setState({
            city:e.target.value
        })
    }

    handelHobby=(key)=>{/*获取选中多选框*/
        var hobby=this.state.hobby;
        hobby[key].checked=!hobby[key].checked;
        this.setState({
            hobby:hobby
        })
    }

    handleInfo(e){/*绑定输入数据*/
        this.setState({
            info:e.target.value
        })
    }

    <form onSubmit={this.handelSubmit}>
        性别:    <input type="radio" value="1" checked={this.state.sex==1}  onChange={this.handelSex}/>男 
                <input type="radio"  value="2" checked={this.state.sex==2}  onChange={this.handelSex}/>女 <br /><br /> 
        居住城市:  
            <select value={this.state.city} onChange={this.handelCity}>
                {
                    this.state.citys.map(function(value,key){
                        return <option key={key}>{value}</option>
                    })
                }
            </select>
        爱好:   
        {
            this.state.hobby.map((value,key)=>{
                return (
                    <span key={key}>
                        <input type="checkbox"  checked={value.checked}  onChange={this.handelHobby.bind(this,key)}/> {value.title} 
                    </span>
                )
            })
        }
        备注：<textarea vlaue={this.state.info}  onChange={this.handleInfo} />
    </form>
                            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <h3 >封装storage</h3>
                    <pre>
                        <code>
                            {`
        var storage={
            set(key,value){
                localStorage.setItem(key,JSON.stringify(value));
            },
            get(key){
                return JSON.parse(localStorage.getItem(key));
            },
            remove(key){
                localStorage.removeItem(key)
            }
        };
        
        export default storage;                    
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        );
    }
}

export default Restrain;