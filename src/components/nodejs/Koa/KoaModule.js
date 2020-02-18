import React from "react"

class KoaModule extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>路由封装</h3>
                <p>
                Koa路由和Express有点不同。
                </p>
                <pre>
                    <code>
                        {`
        //api.js                
        var router=require('koa-router')();
        router.get('/',(ctx)=>{
            ctx.body={"title":"这是一个api"};
        })
        module.exports=router.routes();

        //admin.js
        var router=require('koa-router')();
        router.get('/user',(ctx)=>{
            ctx.body='用户管理'
        })
        module.exports=router;
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>在app.js调用</h3>
                <pre>
                    <code>
                        {`
        const Koa=require('koa'),
        router=require('koa-router')();
        
        //引入子模块
        var admin=require('./routes/admin.js');
        var api=require('./routes/api.js');
        var app=new Koa();
        
        //配置路由
        router.get('/',(ctx)=>{
            ctx.body='这是一个首页'
        })
        /*
            /admin   配置子路由  层级路由
            /admin/user
            */
        router.use('/admin',admin.routes());
        /*
            /api/newslist   新闻列表的api
            */
        router.use('/api',api);   /*在模块里面暴露路由并且启动路由*/
        //启动路由
        app.use(router.routes()).use(router.allowedMethods());
        app.listen(8008);
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>koa 脚手架</h3>
                <div className='code'>
                    <div className="hang">
                        <b>npm install koa-generator -g</b>
                        <span>全局安装</span>
                    </div> 
                    <div className="hang">
                        <b>koa koa_demo</b>
                        <span>创建项目</span>
                    </div> 
                    <div className="hang">
                        <b>npm install</b>
                        <span>安装依赖</span>
                    </div> 
                    <div className="hang">
                        <b>npm start</b>
                        <span>启动项目</span>
                    </div>    
                </div>
            </div>
        </div>
        )
    }
}
export default KoaModule;