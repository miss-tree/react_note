import React ,{Component} from "react";
import ValTo from "./ValTo"

class Passval extends Component{
    render(){
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>父子组件传值（react 父子组件通信）</h3>
                    <pre>
                        <code>
                            {`
    父组件给子组件传值 

		    1.在调用子组件的时候定义一个属性  <Header msg='首页'></Header>

			  2.子组件里面 this.props.msg          


        说明：父组件不仅可以给子组件传值，还可以给子组件传方法,以及把整个父组件传给子组件,可以让子组件给父组件传值。


    父组件主动获取子组件的数据

        1、父组件调用子组件的时候指定ref的值 <Header ref='header'></Header>      
        
        2、父组件通过this.refs.header  获取整个子组件实例  (dom（组件）加载完成以后获取 )                   
                            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <h3 >父组件向子组件传值</h3>
                    <pre>
                        <code>
                            {`
    //父组件
    run=()=>{
        alert('我是父组件的run方法')
    }
    //获取子组件里面穿过来的数据
    getChildData=(result)=>{
      this.setState({
        msg:result
      })
    }
    <Header title={this.state.title}  run={this.run}  news={this} />

    //子组件Header
    constructor(props){
        super(props);   //固定写法
    }
    getNews=()=>{
        // alert(this.props.news.state.msg);
        this.props.news.getData();
    }

    <h2>{this.props.title}</h2>
    <button onClick={this.props.run}>调用news父组件的run方法</button>
    <button onClick={this.props.news.getData}>获取父组件的getData方法</button>
    <button onClick={this.getNews}>获取整个父组件实例</button>
    <button onClick={this.props.news.getChildData.bind(this,'我是子组件的数据')}>子组件给父组件传值</button>
                            `}
                        </code>
                    </pre>
                    <span className="red">this.props.news中news为父组件名称(类名)</span>
                </div>
                <div>
                    <h3 >父向子传值在子定义</h3>
                    <pre>
                        <code>
                            {`
    defaultProps:父子组件传值中，如果父组件调用子组件的时候不给子组件传值，可以在子组件中使用defaultProps定义的默认值
    propTypes：验证父组件传值的类型合法性
            1、引入import PropTypes from 'prop-types';
            2、类.propTypes = {
                name: PropTypes.string
            };
    都是定义在子组件里面 
                            `}
                        </code>
                    </pre>
                    <pre>
                        <code>
                            {`
    //父组件
    <Header title={this.state.title} num={this.state.count} />

    //子组件
    import PropTypes from 'prop-types';
    //defaultProps   如果父组件调用子组件的时候不给子组件传值，可以在子组件中使用defaultProps定义的默认值
    Header.defaultProps={
        title:'标题'
    }
    //同行propTypes定义父组件给子组件传值的类型
    Header.propTypes={
        num:PropTypes.number
    }        

    class Header extends Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h2>---{this.props.title}--- {this.props.num}</h2>
                </div>
            );
        }
    }
                            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <h3 >获取子组件数据和方法</h3>
                    <pre>
                        <code>
                            {`
    //父组件
    getFooter=()=>{
      /*
        父组件主动获取子组件的数据
          1、调用子组件的时候指定ref的值 <Header ref='header'></Header>      
          2、通过this.refs.header  获取整个子组件实例  (dom（组件）加载完成以后获取 )
      */
     this.refs.footer.run();
     //alert(this.refs.footer.state.msg); //获取子组件的数据
    }

    <button onClick={this.getFooter}>获取整个底部组件</button>
    <Footer  ref='footer'/>
    
    //子组件Footer
    constructor(props){
        super(props);   //国定写法
    }
    run=()=>{
        alert('我是底部组件的run方法')
    } 
                            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <ValTo/>
                </div>
            </div>
        );
    }
}

export default Passval;