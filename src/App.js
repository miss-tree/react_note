import React, { Component } from 'react';
import logo from './logo.svg';
import routes from "./router/routes"
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tab:[{link:"/",name:"Welcome to React"},
            {link:"/react",name:"React"},
            {link:"/node",name:"nodejs"},
            {link:"/linux",name:"linux"},
          ],
      currentIndex:0
     };
  }  
  changeTab(key){
    this.setState({
      currentIndex:key
    })
  }
  render() {
    return (
      <Router>
      <div className="App">
      {/* 头部 */}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.tab.map((el,key)=>{
            return (<div className={`header_title ${this.state.currentIndex===key?"active":null}`}
                    onClick={this.changeTab.bind(this,key)}  key={key}>
                      <Link to={el.link}>{el.name}</Link>
                    </div>)
          })}
          {/* <div className={`header_title ${this.state.currentIndex===0?"active":null}`}>
            <Link to="/">Welcome to React</Link>
          </div>
          <div className={`header_title ${this.state.currentIndex===1?"active":null}`}>
            <Link to="/react">react</Link>
          </div> 
          <div className={`header_title ${this.state.currentIndex===2?"active":null}`}>
            <Link to="/nodejs">nodejs</Link>
          </div> 
          <div className={`header_title ${this.state.currentIndex===3?"active":null}`}>
            <Link to="/linux">linux</Link>
          </div>  */}
        </div>
        {/* 变更内容 */}
          { 
            routes.map((route,key)=>{
                if(route.exact){
                    return <Route key={key} exact path={route.path} 
                    render={props => (
                      <route.component {...props} routes={route.routes} />
                    )}
                    />
                }else{
                    return <Route  key={key}  path={route.path} 
                    render={props => (
                      <route.component {...props} routes={route.routes} />
                    )}
                  />
                }
            })
          } 
      </div>
      </Router>
    );
  }
}

export default App;
