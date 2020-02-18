import React from "react"

class Storage extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>数据缓存</h3>
                <p>
                数据缓存这块和Express差不多，都是Cookie和Session，但是不支持中文，要修改一下。
                </p>
                <h3>Cookie</h3>
                <pre>
                    <code>
                        {`
        //koa中没法直接设置中文的cookie
        var userinfo=new Buffer('张三').toString('base64');                
        ctx.cookies.set('userinfo',userinfo,{
            maxAge:60*1000*60,
            // path:'/news',  /*配置可以访问的页面*/
            //domain:'.baidu.com'  /*正常情况不要设置 默认就是当前域下面的所有页面都可以方法*/
            httpOnly:false,  //true表示这个cookie只有服务器端可以访问，false表示客户端（js），服务器端都可以访问
        });

        console.log(new Buffer('张三').toString('base64'));// 转换成 base64 字符：5byg5LiJ
        console.log(new Buffer('5byg5LiJ', 'base64').toString());// 还原 base：张三
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>Session</h3>
                <pre>
                    <code>
                        {`
        var Koa=require('koa'),
        router = require('koa-router')(),
        render = require('koa-art-template'),
        path=require('path'),
        session = require('koa-session');
        var app=new Koa();
        
        //配置 koa-art-template模板引擎
        render(app, {
            root: path.join(__dirname, 'views'),   // 视图的位置
            extname: '.html',  // 后缀名
            debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式
        });
        //配置session的中间件
        app.keys = ['some secret hurr'];   /*cookie的签名*/
        const CONFIG = {
            key: 'koa:sess', /** 默认 */
            maxAge: 10000,  /*  cookie的过期时间        【需要修改】  */
            overwrite: true, /** (boolean) can overwrite or not (default true)    没有效果，默认 */
            httpOnly: true, /**  true表示只有服务器端可以获取cookie */
            signed: true, /** 默认 签名 */
            rolling: true, /** 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） 【需要修改】 */
            renew: false, /** (boolean) renew session when session is nearly expired      【需要修改】*/
        };
        app.use(session(CONFIG, app));
        
        router.get('/login',async (ctx)=>{
            //设置session
            ctx.session.userinfo='张三';
            ctx.body="登录成功";
        })
        
        app.use(router.routes());   /*启动路由*/
        app.use(router.allowedMethods());
        app.listen(3000);
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default Storage;