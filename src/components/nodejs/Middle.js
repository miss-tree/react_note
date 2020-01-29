import React from "react"


class Middle extends React.Component{
    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>中间件</h3>
                <p>
                就是匹配路由之前和匹配路由之后做的一系列的操作。
                </p>
                <h3>内置中间件</h3>
                <pre>
                    <code>
                        {`
        var express=require('express'); /*引入*/
        var app=new express();  /*实例化*/
        //内置中间件  托管静态页面
        app.use(express.static('public'));
        app.use('/static',express.static('public'));
        
        app.get('/',function(req,res){
            res.send('你好express');
        })
        
        app.listen(3000,'127.0.0.1');
                        `}
                    </code>
                </pre>
                <h3>body-parser</h3>
                <p>
                GET 请求的参数在 URL 中，在原生 Node 中，需要使用 url 模块来识别参数字符串。在
                Express 中，不需要使用 url 模块了。可以直接使用 req.query 对象。
                POST 请求在 express 中不能直接获得，可以使用 body-parser 模块。使用后可以用
                req.body 得到参数。但是如果表单中含有文件上传，那么还是需要使用 formidable 模块。
                </p>

                <pre>
                    <code>
                        {`
        var express=require('express'); /*引入*/
        var bodyParser = require('body-parser');
        var app=new express();  /*实例化*/
        
        //配置body-parser中间件
        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: false }))
        // parse application/json
        app.use(bodyParser.json());
        
        //ejs
        app.set('view engine','ejs');
        app.set("views",__dirname+"/componnent")
        
        app.get('/login',function(req,res){
          res.render('login');
        })
        
        app.post('/doLogin',function(req,res){
        // POST 请求在 express 中不能直接获得，可以使用 body-parser 模块。
          console.log(req.body);   /*获取post提交的数据*/
          res.send('<script>history.go(-1)</script>')//提交数据后更新'/login'页面
        })
        
        app.listen(8000,'127.0.0.1');
                        `}
                    </code>
                </pre>
                <b>判断登录状态</b>
                <pre>
                    <code>
                        {`
        //自定义中间件  判断登录状态                
        app.use(function(req,res,next){
            if(req.url=='/login' || req.url=='/doLogin'){
                next();
            }else{
                if(req.session.userinfo&&req.session.userinfo.username!=''){   /*判断有没有登录*/
                    app.locals['userinfo']=req.session.userinfo;   /*配置全局变量  可以在任何模板里面使用*/
                    next();
                }else{
                    res.redirect('/login')
                }
            }
        })                
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default Middle;