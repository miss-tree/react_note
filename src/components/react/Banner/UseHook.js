import React from 'react'

export default function UseHook() {
        return (
            <div>
                <div>
                    <h3>自定义 Hook</h3>
                    <pre>
                        <code>
                            {`
        自定义Hook
        function useFriendStatus(friendID) {
            const [isOnline, setIsOnline] = useState(null);
            // ...
            return isOnline;
          }
        
        组件调用  
        function FriendStatus(props) {
            const isOnline = useFriendStatus(props.friend.id);
            if (isOnline === null) {
              return 'Loading...';
            }
            return isOnline ? 'Online' : 'Offline';
        }      
        
        function FriendListItem(props) {
            const isOnline = useFriendStatus(props.friend.id);
          
            return (
              <li style={{ color: isOnline ? 'green' : 'black' }}>
                {props.friend.name}
              </li>
            );
        }
                            `}
                        </code>
                    </pre>
                    <div>自定义 Hook 必须以 “use” 开头,在两个组件中使用相同的 Hook 不会共享 state。
                        因为在一个组件中多次调用 useState 和 useEffect，它们是完全独立的。
                    </div>
                    <p>
                        自定义 Hook 定义一个常量，方便我们调用变量，就像我们经常封装函数一样，可以直接调用
                    </p>
                </div>
            </div>
        )
}
