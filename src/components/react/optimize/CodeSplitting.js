import React from 'react'

const  CodeSplitting = ()=> {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>代码拆分</h3>
                    <p>在打包的时候使用 Webpack。 将文件引入并合并到一个单独文件，最终形成一个 “bundle”。 
                        接着在页面上引入该 bundle，整个应用即可一次性加载。但是这样往往打包出来的代码大小很大，
                        导致首屏加载时间过长。这时候就要用到 React 的代码拆分，说白了就是路由懒加载，分模块加载浏览
                        的页面,<span className="red">要求react的最低版本是16.6.0</span></p>
                    <pre>    
                        <code>
                            {`
    import React, { Suspense , lazy } from 'react'   
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';                     
    const Home = lazy(() => import('./routes/Home'));
    const About = lazy(() => import('./routes/About'));

    const App = () => (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                </Switch>
            </Suspense>
        </Router>
    );                       
                            `}
                        </code>
                    </pre>
                    <div>
                    fallback 属性接受任何在组件加载过程中你想展示的 React 元素。
                    你可以将 Suspense 组件置于懒加载组件之上的任何位置。
                    你甚至可以用一个 Suspense 组件包裹多个懒加载组件。上面是基于配置
                    路由代码分割，也就是我们经常首屏加载用到的路由懒加载。
                    </div>
                </div>
            </div>
        )
}
export default CodeSplitting;