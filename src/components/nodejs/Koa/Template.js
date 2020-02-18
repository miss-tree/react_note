import React from "react"
import { Link } from "react-router-dom";

class Template extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>模板使用</h3>
                <p>
                NodeJs提供了多种模板，适用于 koa 的模板引擎选择非常多，比如 jade、ejs、nunjucks、art-template 等。
                art-template 是一个简约、超快的模板引擎。
                </p>
                <div>官网：http://aui.github.io/art-template/</div>
                <div>中文文档: http://aui.github.io/art-template/zh-cn/docs/</div>
                <div>
                    <img src={require('../../../assets/images/node/template01.jpg')} alt=''/>
                    <img src={require('../../../assets/images/node/template02.jpg')} alt=''/>
                </div>
                <h3>ejs模板引擎</h3>
                <div>使用方法参考Express,<Link to='/node/Express'>查看配置</Link></div>
                <pre>
                    <code>
                        {`
        var Koa=require('koa'),
        router = require('koa-router')(),
        views = require('koa-views');
        var app=new Koa();
        
        //配置模板引擎中间件  --第三方中间件
        //app.use(views('views', { map: {html: 'ejs' }}));   //这样配置也可以  注意如果这样配置的话 模板的后缀名是.html
        app.use(views('views',{
            extension:'ejs'  /*应用ejs模板引擎*/
        }))
        
        router.get('/news',async (ctx)=>{
            //ctx.body='这是一个新闻';
            let list=['11111','22222','33333'];
            let content="<h2>这是一个h2</h2>";
            let num=12;
            await ctx.render('news',{list:list, content:content,num:num})
        })
        
        app.use(router.routes());   /*启动路由*/
        app.use(router.allowedMethods());
        app.listen(3000);
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>art-template 模板引擎</h3>
                <pre>
                    <code>
                        {`
    var Koa=require('koa'),
    router = require('koa-router')(),
    render = require('koa-art-template'),
    path=require('path');
    var app=new Koa();

    //配置 koa-art-template模板引擎
    render(app, {
        root: path.join(__dirname, 'views'),   // 视图的位置
        extname: '.html',  // 后缀名
        debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式

    });

    //接收post提交的数据
    router.get('/news',async (ctx)=>{
        let app={
            name:'张三11',h:'<h2>这是一个h211</h2>',num:20,
            data:['11111111','2222222222','33333333333']
        };
        await ctx.render('news',{
            list:app
        });
    })

    app.use(router.routes());   /*启动路由*/
    app.use(router.allowedMethods());
    app.listen(3000);                    
                        `}
                    </code>
                </pre>
                <div>用法和ejs类似，<a href='http://aui.github.io/art-template/zh-cn/docs/syntax.html' target='_blank'  rel='nofollow me noopener noreferrer'>更多请参考</a></div>
            </div>
        </div>
        )
    }
}
export default Template;