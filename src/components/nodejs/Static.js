import React from "react"

class Static extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>静态资源配置</h3>
                <p>
                通过配置静态资源，方便模块化的资源管理
                </p>
                <pre>
                    <code>
                        {`
        var Koa=require('koa'),
        router = require('koa-router')(),
        views = require('koa-views'),
        bodyParser = require('koa-bodyparser'),
        static = require('koa-static');
    
        var app=new Koa();
        /*应用ejs模板引擎*/
        app.use(views('views',{ extension:'ejs'}))
        
        //http://localhost:3000/css/basic.css  首先去static目录找 ，如果能找到返回对应的文件，找不到 next()
        
        //配置静态web服务的中间件
        //app.use(static('./static'));
        
        app.use(static(__dirname+'/static'));
        app.use(static(__dirname+'/public'));   //koa静态资源中间件可以配置多个
        
        //配置post bodyparser的中间件
        app.use(bodyParser());
        
        router.get('/',async (ctx)=>{
            await  ctx.render('index');
        })
        
        //接收post提交的数据
        router.post('/doAdd',async (ctx)=>{
            console.log(ctx.request.body);
            ctx.body=ctx.request.body;  //获取表单提交的数据
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
export default Static;