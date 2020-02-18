import React from 'react'

export default function History () {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>history</h3>
                    <div>
                        <ul>
                            <li>hashHistory 老版本浏览器的 history(浏览器地址看地址url，如果有 #，那么就是 hashHistory了)。</li>
                            <li>browserHistory h5的history。现在的 web 项目都使用这种。
                                <div>在代码中 'pushState' in window.history 如果为 true 说明是 browserHistory。
                                这是因为 browserHistory API 有 pushState, replaceState, popState。
                                保持 ui（页面） 和 url（浏览器地址栏地址） 同步。地址栏地址变化，页面也同步变化。
                                </div>
                            </li>
                            <li>memoryHistory node环境下的 history，存储在 memory中。</li>
                        </ul>
                    </div>
                    <div>
                        hashHistory缺点
                    </div>
                    <ul>
                        <li>连续点击一个链接会报错：Warning: Hash history cannot PUSH the same path;
                             a new entry will not be added to the history stack</li>
                        <li>hashHistory 不能很好的支持 basename </li>
                    </ul>
                </div>
                <div>
                    <h3>history的使用</h3>
                    <div>browserHistory模式</div>
                    <pre>
                        <code>
                            {`
        import { createBrowserHistory } from 'history';//安装history模块提供的支持BrowserHistory

        export const history = createBrowserHistory();
        
        ReactDOM.render(<Provider store={store}>
          <PersistGate loading={null} persistor={persist}>
            <Router history={history}>
              <Route path='/' component={App} />
            </Router>
          </PersistGate>
        </Provider>, document.getElementById('root'));                    
                            `}
                        </code>
                    </pre>
                </div>
                <div>hashHistory模式</div>
                <div className="hang">
                    <pre>
                        <code>
                            {`
    import { createHashHistory as createHistory } from 'history';                      
                            `}
                        </code>
                    </pre>
                </div>
                <div>memoryHistory模式</div>
                <div className="hang">
                    <pre>
                        <code>
                            {`
    import { createMemoryHistory as createHistory } from 'history';                     
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        )
}
