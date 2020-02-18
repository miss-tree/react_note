import React from "react"

class Session extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>Session</h3>
                <p>
                session 运行在服务器端，当客户端第一次访问服务器时，
                可以将客户的登录信息保存。 当客户访问其他页面时，可以判断客户的登录状态，
                做出提示，相当于登录拦截。 session 可以和 Redis 或者数据库等结合做持久化操作，
                当服务器挂掉时也不会导致某些客户信息（购物车） 丢失。
                </p>
                <pre>
                    <code>
                        {`
        var express = require("express");
        var app = express();
        var session = require("express-session");
        var  MongoStore  = require("connect-mongo")(session);
        
        //配置中间件
        app.use(session({
            secret: 'this is string key',   // 可以随便写。 一个 String 类型的字符串，作为服务器端生成 session 的签名
            name:'session_id',/*保存在本地cookie的一个名字 默认connect.sid  可以不设置*/
            resave: false,   /*强制保存 session 即使它并没有变化,。默认为 true。建议设置成 false。*/
            saveUninitialized: true,   //强制将未初始化的 session 存储。  默认值是true  建议设置成true
            cookie: {
                maxAge:1000*30*60    /*过期时间*/
        
            },   /*secure https这样的情况才可以访问cookie*/
            rolling:true,//在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）
            store:new MongoStore({
                    url: 'mongodb://127.0.0.1:27017/shop',  //数据库的地址
                    touchAfter: 24 * 3600   //time period in seconds  通过这样做，设置touchAfter:24 * 3600，您在24小时内只更新一次会话，不管有多少请求(除了在会话数据上更改某些内容的除外)
            })
        }))
        
        
        app.get("/",function(req,res){
            //获取sesssion
            if(req.session.userinfo){  /*获取*/
                res.send('你好'+req.session.userinfo+'欢迎回来');
            }else{
                res.send('未登录');
            }
        });
        
        app.get("/login",function(req,res){
            req.session.userinfo='张三222';
            res.send('登录成功');
        });
        
        app.get("/loginOut",function(req,res){
            //req.session.cookie.maxAge=0;  /*改变cookie的过期时间*/
            //销毁
            req.session.destroy(function(err){
                console.log(err);
            })
            res.send('退出登录成功');
        });
        
        app.get("/news",function(req,res){
            //获取sesssion
            if(req.session.userinfo){  /*获取*/
                res.send('你好'+req.session.userinfo+'欢迎回来 news');
            }else{
                res.send('未登录 news');
            }
        });
        
        app.listen(3000);
                        `}
                    </code>
                </pre>
                <p>session 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
                    考虑到减轻服务器性能方面，应当使用 COOKIE。
                    为实现负载均衡配置 Session，把 Session 保存到数据库里面</p>
            </div>
        </div>
        )
    }
}
export default Session;