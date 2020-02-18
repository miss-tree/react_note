import React from "react"


class ExpRouter extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>http模块</h3>
                <p>
                使用 http.createServer() 方法创建 HTTP 服务器，并使用 listen 方法绑定 8888 端口。
                函数通过 request, response 参数来接收和响应数据
                </p>
                <pre>
                    <code>
                        {`
        var url=require('url');
        //封装方法改变res  绑定res.send()
        function changeRes(res){
            res.send=function(data){
                res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
                res.end(data);
            }
        }
        
        //暴露的模块
        var Server=function(){
            var G=this;   /*全局变量*/
            //处理get和post请求
            this._get={};
            this._post={};
        
            var app=function(req,res){
                changeRes(res);
                //获取路由
                var pathname=url.parse(req.url).pathname;
                if(!pathname.endsWith('/')){
                    pathname=pathname+'/';
                }
                //获取请求的方式 get  post
                var method=req.method.toLowerCase();
        
                if(G['_'+method][pathname]){
                    if(method=='post'){ /*执行post请求*/
                        var postStr='';
                        req.on('data',function(chunk){
                            postStr+=chunk;
                        })
                        req.on('end',function(err,chunk) {
                            req.body=postStr;  /*表示拿到post的值*/
                            //G._post['dologin'](req,res)
                            G['_'+method][pathname](req,res); /*执行方法*/
                        })
                    }else{ /*执行get请求*/
                        G['_'+method][pathname](req,res); /*执行方法*/
                    }
                }else{
                    res.end('no router');
                }
            }
        
            app.get=function(string,callback){
                if(!string.endsWith('/')){
                    string=string+'/';
                }
                if(!string.startsWith('/')){
                    string='/'+string;
                }
                //    /login/
                G._get[string]=callback;
            }
        
            app.post=function(string,callback){
                if(!string.endsWith('/')){
                    string=string+'/';
                }
                if(!string.startsWith('/')){
                    string='/'+string;
                }
                //    /login/
                G._post[string]=callback;
                //G._post['dologin']=function(req,res){
                //}
            }
            return app;
        }
        
        module.exports=Server();                
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <b>在APP.js调用</b>
                <pre>
                    <code>
                        {`
        var http=require('http');
        var ejs=require('ejs');
        var app=require('./model/express-route.js');
        
        http.createServer(app).listen(3000);
        app.get('/',function(req,res){
            var msg='这是数据库的数据'
            ejs.renderFile('views/index.ejs',{msg:msg},function(err,data){
                res.send(data);
            })
        })
        
        //登录页面
        app.get('/login',function(req,res){
            console.log('login');
            ejs.renderFile('views/form.ejs',{},function(err,data){
                res.send(data);
            })
        })
        
        //执行登录
        app.post('/dologin',function(req,res){
            console.log(req.body);  /*获取post传过来的数据*/
            res.send("<script>alert('登录成功');history.back();</script>")
        })
                       
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default ExpRouter;