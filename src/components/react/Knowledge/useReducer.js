/* !
 * @Author: 池暝
 * @Date: 2022-02-15 15:32:25
 * @Description: useReducer
*/
import React from 'react'

function useReducer()  {
 // 渲染
   return (
     <div>
       <div>
         <h3>useReducer</h3>
         <p>
           顾名思义，useReducer就是 class 里面那个reducer
         </p>
         <pre>
           <code>
             {`
        const reducer =(state = 0, {type})=>{
            switch (type) {
                case "add":
                    return state+1
                case 'delete':
                    return state-1
                default:
                    return state;
            }
        }

        const Hook =()=>{
            const [count, dispatch] = useReducer(reducer, 0)
            return(
                <div>
                  count:{count}
                  <button onClick={()=> dispatch({type:'add'})}>add</button>
                    <button onClick={()=> dispatch({type:'delete'})}>delete</button>
                </div>
            )
        }

        export default Hook

            `}
           </code>
         </pre>
       </div>
     </div>
   )
}

export default useReducer