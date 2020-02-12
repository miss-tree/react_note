// import Loadable from 'react-loadable';

// const AsyncComponent = (component) => Loadable({
//   loader: component,
//   loading: ()=>null,
// });

// export default AsyncComponent;



//使用高阶组件对路由组件进行包裹
import React, { Component } from 'react'
// export default function asyncComponent(importComponent) {
//   class AsyncComponent extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//         component: null
//       }
//     }

//     async componentDidMount() {
//       const { default: component } = await importComponent()
//       this.setState({
//         component
//       })
//     }

//     render() {
//       const C = this.state.component

//       return C ? <C {...this.props} /> : null
//     }
//   }

//   return AsyncComponent
// }



// import Loadable from 'react-loadable';

// export default function AsyncComponent (comp) {
//   return Loadable({
//       loader:comp,
//       loading:(props)=>{
//           let msg
//           if (props.error) {
//               return <p>加载错误，请刷新</p>
//           } else if (props.timedOut) {
//               return <p>加载超时</p>
//           } else if (props.pastDelay) {
//               return(
//                 <div className='loading-mask'>
//                   <div className='container'>
//                     <img className='loading-img' src={require('../images/loading.png')} />
//                     <p>加载中...</p>
//                   </div>
//                 </div>
//               )
//           } else {
//               return null;
//           }
//       },
//       timeout:10000
//   })
// }