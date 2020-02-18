import React  from 'react'

export default function ReduxPersist () {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>redux-persist</h3>
                    <div>
                        React通过redux-persist持久化数据存储到localStorage,
                    </div>
                    <pre>
                        <code>
                            {`
        import { createStore } from 'redux';
        import { rootReducer } from './reducer/rootReducer';
        import { persistStore, persistReducer } from 'redux-persist';
        把 persistStore 和 persistReducer 看成redux-persist封装的高阶组件就好
        persistStore处理redux的store；
        persistReducer处理redux的reducer，另外的参数 persistConfig 是对rootReducer的处理
        import storage from 'redux-persist/lib/storage'//
        
        const persistConfig = {
          key: 'root',              // key是放入localStorage中的key
          storage,                  //储存到loacalstorage的封装
          whitelist: ['userInfo', 'userWallet', 'countDown']    //白名单，将要储存到loacalstorage，不用到后台拿取的
        };
        
        export const store = createStore(persistReducer(persistConfig, rootReducer));
        
        export const persist = persistStore(store);
                            
                            `}
                        </code>
                    </pre>
                    <div>在App.js调用</div>
                    <pre>
                        <code>
                            {`
        import { PersistGate } from 'redux-persist/integration/react'

        ReactDOM.render(<Provider store={store}>                //redux的提供器，组件里边的其它所有组件都可以使用store了
            <PersistGate loading={null} persistor={persist}>
              <Router history={history}>
                <Route path='/' component={App} />
              </Router>
            </PersistGate>
          </Provider>, document.getElementById('root'));
                            
                            `}
                        </code>
                    </pre>
                    <p>
                        在调用redux提供器后，再调用 redux-persist 的 PersistGate 可以持久数据不冲突。
                        请使用PersistGate包装您的根组件。这将延迟应用程序UI的呈现，直到检索到持久化状态并将其保存到redux。
                        注意PersistGate加载属性可以为空，也可以是任何react实例，例如loading=
                        <code>{`{ <loading/>}`}</code>
                        在调用redux的中间件时还是按之前中间件的写法，只不过最后export里包含 persist 就好。
                    </p>
                </div>
            </div>
        )
}
