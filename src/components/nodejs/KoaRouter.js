import React from "react"

class KoaRouter extends React.Component{

    render(){
        var route='${ctx.request.url} -- ${ctx.request.method}'
        return(
        <div>
            <div>
                <h3 className='Title_h3'>Koa路由</h3>
                <pre>
                    <code>
                        {`
        //引入 koa模块
        var Koa=require('koa');
        var Router = require('koa-router');
        //实例化
        var app=new Koa();
        var router = new Router();
        
        //ctx  上下文 context ，包含了request 和response等信息
        
        //配置路由
        app.use(async(ctx,next)=>{
            // console.log(访问url ${route})
            await next()
        })
        router.get('/',async (ctx)=>{
        
            ctx.body='首页'; /*返回数据    相当于：原生里面的res.writeHead()     res.end()*/
        }).get('/ccc',async (ctx)=>{
        
            ctx.body={
                msg:"hello news",
                url:"从3000端口获取",
            };
        })
        
        //启动路由
        app
            .use(router.routes())   /*启动路由*/
            .use(router.allowedMethods());   /*可以配置也可以不配置,建议配置，*/
        /*
         router.allowedMethods()作用： 这是官方文档的推荐用法,我们可以
         看到 router.allowedMethods()用在了路由匹配 router.routes()之后,所以在当所有
         路由中间件最后调用.此时根据 ctx.status 设置 response 响应头
        */
        
        app.listen(3000);
                        `}
                    </code>
                </pre>
                <p>
                ctx  上下文 context ，包含了request 和response等信息
                </p>
            </div>
            <div>
                <h3>动态路由</h3>
                <pre>
                    <code>
                        {`
        var Koa=require('koa');
        var router = require('koa-router')();  /*引入是实例化路由** 推荐*/
        //实例化
        var app=new Koa();
         
        //动态路由  http://localhost:3002/newscontent/xxxx
        router.get('/newscontent/:aid',async (ctx)=>{
            //获取动态路由的传值
            console.log(ctx.params);  //{ aid: '456' }
            ctx.body="新闻详情";
        })
        
        //动态路由里面可以传入多个值
        //http://localhost:3002/package/123/456
        router.get('/package/:aid/:cid',async (ctx)=>{
            //获取动态路由的传值
            console.log(ctx.params);  //{ aid: '123', cid: '456' }
            ctx.body="新闻详情";
        })
        
        app.use(router.routes());   /*启动路由*/
        app.use(router.allowedMethods());
        
        app.listen(8000);
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default KoaRouter;