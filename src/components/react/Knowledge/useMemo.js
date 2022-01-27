/* !
 * @Author: miss-tree
 * @Date: 2022-01-27 14:20:39
*/
import React from 'react'

function UseMemo()  {
 // 渲染
   return (
     <div>
       <div>
         <h3>useMemo</h3>
         <p>
           useMemo 的出现作为缓存减少了组件的渲染，它仅会在某个依赖项改变时才重新计算
           memoized 值。这种优化有助于避免在每次渲染时都进⾏⾼开销的计算。
         </p>
         <pre>
           <code>
             {`
        export default function UseMemoPage(props) {
          const [count, setCount] = useState(0);
          const [value, setValue] = useState("");

          // 在不使用 useMemo 前，每次点击button和onChange事件都会执行 expensive 的打印
          const expensive = useMemo(() => {
            console.log("compute");
            let sum = 0;
            for (let i = 0; i < count; i++) {
              sum += i; 
            }
            return sum;
            //只有count变化，这⾥才重新执⾏
          }, [count]);

          return (
            <div>
            <p>expensive:{expensive}</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>add</button>
            <input value={value} onChange={event => setValue(event.target.value)} />
            </div>
          );
        }
            `}
           </code>
         </pre>
       </div>
     </div>
   )
}

export default UseMemo