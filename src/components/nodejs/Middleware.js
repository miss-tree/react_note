import React from "react"

class Middleware extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>中间件</h3>
                <p>
                通俗的讲：中间件就是匹配路由之前或者匹配路由完成做的一系列的操作，我们就可以 把它叫做中间件。中间件的功能包括：
                </p>
                <ul>
                    <li>执行任何代码。</li>
                    <li>修改请求和响应对象。</li>
                    <li>终结请求-响应循环。</li>
                    <li>调用堆栈中的下一个中间件。</li>
                </ul>
                <p>如果我的 get、post 回调函数中，没有 next 参数，
                    那么就匹配上第一个路由，就不会往下匹 配了。
                    如果想往下匹配的话，那么需要写 next()</p>
            </div>
            <div>
                <h3>应用级中间件</h3>
                <pre>
                    <code>
                        {`
        app.use(async(ctx,next)=>{
            console.log('hello')
            await next()
        })     
                   
        app.use('/news',async(ctx,next)=>{
            console.log('这是news页面')
            await next()
        })
                        `}
                    </code>
                </pre>
                <p>可以接收两个参数，第一个是匹配的路由，第二个是回调函数。
                    配置第一个的，要匹配到'/news'路由才能有响应，其他路由不做处理。
                    没有配置第一个的，就是匹配到所有路由，配合 next() 执行继续往下匹配</p>
            </div>
            <div>
                <h3>路由中间件</h3>
                <pre>
                    <code>
                        {`
        router.get('/', async(ctx, next)=>{ 
            console.log(1) 
            next() 
        })
        router.get('/', function (ctx) { 
            ctx.body="Hello koa"; 
        })
                        `}
                    </code>
                </pre>
                <p>配合 next() 继续往下匹配，否则页面不会出现 Hello koa</p>
            </div>
            <div>
                <h3>错误处理中间件</h3>
                <pre>
                    <code>
                        {`
        app.use(async (ctx,next)=> { 
            next(); 
            if(ctx.status==404){ 
                ctx.status = 404; 
                ctx.body="这是一个 404 页面" 
            } 
        });
                        `}
                    </code>
                </pre>
                <p>配合 next() 继续往下匹配，结合下面的Koa执行流程，匹配到所有路由后，没有匹配到就返回404页面</p>
            </div>
            <div>
                <h3>第三方中间件</h3>
                <pre>
                    <code>
                        {`
        const static = require('koa-static'); 
        const staticPath = './static'; 
        app.use(static( path.join( __dirname, staticPath) ))
        const bodyParser = require('koa-bodyparser'); 
        app.use(bodyParser());
                        `}
                    </code>
                </pre>
                <p>所有的第三方模块的使用，都会用到 app.use()方法</p>
            </div>

            <div>
                <h3>Koa 中间件的执行顺序</h3>
                <img  src={require('../../assets/images/node/Koa01.png')} alt=''/>
                <p>Koa模型中，先执行app.use()的方法，再执行路由方法，不管app.use()是否在路由方法下面。
                    而app.use()方法是自上而下顺序执行。后面执行完路由后再反过来执行app.use()方法内next()下面的方法。
                    这个就是Koa的'洋葱模型'理论</p>
            </div>
            <div>
                <h3>Koa--bodyparser</h3>
                <pre>
                    <code>
                        {`
        var Koa = require('koa'); 
        var bodyParser = require('koa-bodyparser'); 
        var app = new Koa(); 
        app.use(bodyParser()); 
        app.use(async ctx => { 
            ctx.body = ctx.request.body; //ctx.request.body 获取 post 提交的数据
        });
                        `}
                    </code>
                </pre>
                <p>用于Post提交数据的获取</p>
            </div>
        </div>
        )
    }
}
export default Middleware;