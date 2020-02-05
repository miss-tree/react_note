import React from "react"

class KoaPro extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>项目模块化</h3>
                <p>
                将项目模块化整理
                </p>
                <h3>路由权限管理</h3>
                <pre>
                    <code>
                        {`
        //admin.js                
        //配置中间件 验证是否登陆
        router.use(async (ctx,next)=>{
            //模板引擎配置全局的变量  在模板引擎可以直接使用变量 __HOST__
            ctx.state.__HOST__='http://'+ctx.request.header.host;
            console.log(ctx.request.url);  //   /admin/user
            var pathname=url.parse(ctx.request.url).pathname;
            //权限判断
            if(ctx.session.userinfo){
                await  next();
            }else{  //没有登录跳转到登录页面
                if(pathname=='/admin/login' || pathname=='/admin/login/doLogin'  || pathname=='/admin/login/code'){
                    await  next();
                }else{
                    ctx.redirect('/admin/login');
                }
            }
        })
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>首页路由</h3>
                <pre>
                    <code>
                        {`
        //index.js                
        var router = require('koa-router')();

        router.get('/',async (ctx)=>{
            ctx.body="还没有开始动工，请访问后台";
        })
        
        module.exports=router.routes();
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>app.js</h3>
                <pre>
                    <code>
                        {`
        //app.js                
        var Koa=require('koa'),
            router = require('koa-router')(),
            path=require('path'),
            render = require('koa-art-template'),
            static = require('koa-static'),
            session = require('koa-session'),
            bodyParser = require('koa-bodyparser');
        var app=new Koa();
        //配置post提交数据的中间件
        app.use(bodyParser());
        //配置session的中间件
        app.keys = ['some secret hurr'];
        const CONFIG = {
            key: 'koa:sess',
            maxAge: 864000,
            overwrite: true,
            httpOnly: true,
            signed: true,
            rolling: true,   /*每次请求都重新设置session*/
            renew: false,
        };
        app.use(session(CONFIG, app));
        //配置模板引擎
        render(app, {
            root: path.join(__dirname, 'views'),
            extname: '.html',
            debug: process.env.NODE_ENV !== 'production'
        });
        //配置 静态资源的中间件
        app.use(static(__dirname + '/public'));

        //引入模块
        var index=require('./routes/index.js');
        var api=require('./routes/api.js');
        var admin=require('./routes/admin.js');

        router.use('/admin',admin);//在admin.js设置路由权限
        router.use('/api',api);
        router.use(index);//加载首页

        app.use(router.routes());   /*启动路由*/
        app.use(router.allowedMethods());
        app.listen(3006);
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default KoaPro;