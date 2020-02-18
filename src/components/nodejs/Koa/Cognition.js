import React from "react"

class Cognition extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>Koa</h3>
                <p>
                Koa -- 基于 Node.js 平台的下一代 web 开发框架.可以免除重复繁琐的回调函数嵌套， 
                并极大地提 升错误处理的效率。koa 不在内核方法中绑定任何中间件， 
                它仅仅提供了一个轻量优雅的 函数库，使得编写 Web 应用变得得心应手。
                开发思路和 express 差不多，最大的特点就是 可以避免异步嵌套。
                </p>
                <div>英语官网：http://koajs.com</div>
                <div>中文官网：https://www.koajs.com.cn/</div>

                <pre>
                    <code>
                        {`
        //引入 Koa 
        const koa=require('koa'); 
        const app=new koa(); 
        //配置中间件 （可以先当做路由） 
        app.use( async (ctx)=>{ ctx.body='hello koa2' })
        //监听端口 
        app.listen(3000);
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>Express和Koa</h3>
                <p>相比于Express的大而全，Koa是一个相对较小的框架，许多中间件都需要自己安装，例如要使用到路由就需要
                    <code>{`var Router = require('koa-router');`}</code> 安装 koa-router 模块。
                </p>
            </div>
        </div>
        )
    }
}
export default Cognition;