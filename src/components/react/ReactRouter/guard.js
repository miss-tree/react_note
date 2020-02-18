import React, { Component } from 'react'

export default class guard extends Component {

    render() {
        return (
            <div>
                <h3 className='Title_h3'>路由守卫</h3>
                <p>不想说，找不到文档表示很难受。说是靠自己实现，下面通过三元运算符来实现一下</p>
                <pre>
                    <code>
                        {`
        <Suspense fallback={null}>
            <Switch>
            {router && router.map((item, index) => <Route key={index} path={item.path} exact={item.exact} render={props =>
                (!item.auth ?
                    <item.component {...props} />
                    : (token ? <item.component {...props} />
                    : <Redirect to={{pathname: '/login', state: {prevPathName: props.location.pathname}}}/>)
                )}/>)}
            </Switch>
        </Suspense>                
                        `}
                    </code>
                </pre>
                <p>
                    简单叙述下上面的逻辑，Suspense 使用懒加载，Switch 方法只渲染一个组件，将组件路由遍历出来。
                    这样就输出了所有的路由，按三元运算符的方式渲染组件，如果不需要权限就渲染组件，若要权限就看登陆是否有token，
                    有就渲染，没有就跳到登陆页面。
                </p>
            </div>
        )
    }
}
