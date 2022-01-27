/* !
 * @Author: miss-tree
 * @Date: 2022-01-27 14:58:53
*/
import React, { useState, useEffect, PureComponent, useMemo, useCallback } from 'react'

const UseCallback = ()=> {

  return (
    <div>
      <div>
        <h3>UseCallback</h3>
        <p>
          把内联回调函数及依赖项数组作为参数传⼊ useCallback ，它将返回该回调函数的 memoized 版本，
          该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使⽤引⽤相等性去避
          免⾮必要渲染（例如 shouldComponentUpdate ）的⼦组件时，它将⾮常有⽤。
        </p>
        <pre>
          <code>
            {`
        export default function UseCallbackPage(props) {
          const [count, setCount] = useState(0);
          const [value, setValue] = useState("");

          const addClick = useCallback(() => {
            let sum = 0;
            for (let i = 0; i < count; i++) {
              sum += i;
            }
            return sum;
          }, [count]);
          
          return (
            <div>
              <p>{count}</p>
              <button onClick={() => setCount(count + 1)}>add</button>
              <input value={value} onChange={event => setValue(event.target.value)} />
              <Child addClick={addClick} />
            </div>
          );
        }

        class Child extends PureComponent {
          render() {
            console.log("child render");
            const { addClick } = this.props;
            return (
              <div>
              <h3>Child</h3>
              <button onClick={() => console.log(addClick())}>add</button>
              </div>
            );
          }
        }
            `}
          </code>
        </pre>
        <div className="red">useCallback(fn, deps) 相当于 useMemo(() =&gt; fn, deps) 。</div>
        <p>
          依赖项数组不会作为参数传给“创建”函数。虽然从概念上来说它表现为：所有“创建”函数中引⽤的
          值都应该出现在依赖项数组中。未来编译器会更加智能，届时⾃动创建数组将成为可能。
        </p>
      </div>
    </div>
  )
}

export default UseCallback



