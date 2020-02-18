import React, { Component } from 'react'
import UseHook from "./UseHook"
export default class Hook extends Component {
    render() {
        // const template='You clicked ${count} times';
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>Hook</h3>    
                    <p>
                        Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
                        Hook 在 class 内部是不起作用的，但你可以使用它们来取代 class 。很多时候我们称为"无状态组件"，使用
                        Hook 后称为"函数组件"。
                    </p>
                    <pre>
                        <code>
                            {`
        import React, { useState } from 'react';

        function Example() {
          // 声明一个新的叫做 “count” 的 state 变量
          const [count, setCount] = useState(0);
          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </div>
          );
        }            
        
        setCount等价class中 this.setState({count:...})的方法，简写去掉了this，更加优化

                            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <h4>Effect Hook</h4>
                    <p>
                        在 React 组件中执行过数据获取、订阅或者手动修改过 DOM。我们统一把这些操作称为“副作用”，或者简称为“作用”。
                        useEffect 就是一个 Effect Hook,它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，
                        只不过被合并成了一个 API。每次渲染后调用副作用函数 —— 包括第一次渲染的时候。
                        可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
                    </p>
                    <pre>
                        <code>
                            {`
        import React, { useState, useEffect } from 'react';

        function FriendStatus(props) {
          const [isOnline, setIsOnline] = useState(null);
          useEffect(() => {
            ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
            return () => {
              ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
            };
          });
        
          function handleStatusChange(status) {
            setIsOnline(status.isOnline);
          }
        
          if (isOnline === null) {
            return 'Loading...';
          }
          return isOnline ? 'Online' : 'Offline';
        }                   
        另一种写法
        ……
        useEffect(() => {
            function handleStatusChange(status) {
              setIsOnline(status.isOnline);
            }
            ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
            return () => {
              ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
            };
          });
        ……  
        
                            `}
                        </code>
                    </pre>
                    <p>
                        React 会在组件销毁时取消对 ChatAPI 的订阅，然后在后续渲染时重新执行副作用函数。
                        （如果传给 ChatAPI 的 props.friend.id 没有变化，你也可以告诉 React 跳过重新订阅。）
                        使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。
                        和useState一样，可以设置多个 useEffect 。
                    </p>
                    <div>
                        <span className="red">注意</span>使用两个额外的规则：
                        <div className='hang'>
                            只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
                        </div>
                        <div className='hang'>
                            只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。
                        </div>
                    </div>
                </div>
                <div>
                    <h3>useState</h3>
                    <ul>
                        <li>useState 方法定义一个 “state 变量”,在函数退出后变量就会”消失”，而 state 中的变量会被 React 保留。</li>
                        <li>useState 方法使用的参数是定义变量的初始值，eg: <code>{`const [Num, setNum] = useState(0);`}</code>,初始值为0</li>
                        <li>useState 方法的返回值是当前 state 以及更新 state 的函数</li>
                    </ul>
                </div>
                <div>
                    <UseHook></UseHook>
                </div>
            </div>
        )
    }
}
