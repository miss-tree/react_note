import React from "react"


class Express extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>Express</h3>
                <p>
                Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一
            系列强大的特性，帮助你创建各种 Web 和移动设备应用。
            丰富的 HTTP 快捷方法和任意排列组合的 Connect 中间件，让你创建健壮、友好
            的 API 变得既快速又简单
            Express 不对 Node.js 已有的特性进行二次抽象，我们只是在它之上扩展了 Web 
            应用所需的基本功能。
                </p>
                <div>英语官网：http://expressjs.com/</div>
                <div className='hang'>中文官网：http://www.expressjs.com.cn/ <span>http://www.expressjiaocheng.com</span> </div>
                <div>
                    <h3>Express的使用</h3>
                </div>
                <pre>
                    <code>
                        {`
        var express=require('express');
        var app=express();
        /*配置ejs模板引擎*/
        app.set('view engine','ejs');
        //views默认会在这个文件里面找模板
        app.set('views', __dirname + '/views');     //设置模板的位置
        //中间件app.use
        //express.static('public')给  public目录下面的文件提供静态web服务
        app.use(express.static('public'));
        //也可以设置多个，在public文件下的css文件夹的stly.css，在使用ejs模板的时候，只需herf='css/stly.css'即可
          默认加载public下的静态资源
        //配置虚拟目录 的静态web服务
        
        //   images/baidu.png去public目录找这个文件，如果有就返回
        app.use('/static',express.static('public'));
        
        app.get('/',function(req,res){
            res.render('index');  /*ejs渲染模板*/
        })
        //动态路由  http://localhost:3000/newscontent/213
        app.get('/newscontent/:aid',function(req,res){
            console.log(req.params);//req.params 获取动态路由的传值
        })
        // user 节点接受 PUT 请求
        app.put('/user', function (req, res) {
            res.send('Got a PUT request at /user');
        });
        // user 节点接受 DELETE 请求
        app.delete('/user', function (req, res) {
            res.send('Got a DELETE request at /user');
        });
        app.get('/news',function(req,res){
            //res.send('ejs的演示');
            var arr=['1111','222','3333'];
            res.render('news',{  /*数据*/
                list:arr
            });
             /*ejs渲染模板*/
        })
        /*中间件相应 404*/
        app.use(function(req,res){
            //res.render('404',{});
            res.status(404).render('404',{});
        })
        app.listen('3001','127.0.0.1');
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>ejs渲染模板在html/ejs使用</h3>
                <div className='hang'>
                    <div><code>{`<%- include header.ejs %>`}</code> <span>Ejs 引入模板</span></div>
                    <div><code>{`<%=h%>`}</code> <span>Ejs 绑定数据</span></div>
                    <div><code>{`<%-h%>`}</code> <span>Ejs 绑定 html 数据</span></div>
                    <div>用<code>{`<%`}</code> <span>%>包裹js代码即可</span></div>
                </div>
                <div>
                    <pre>
                        <code>
                            {`
        //模板判断语句                    
        <% if(true){ %>
            <div>true</div>
            <%} else{ %>
            <div>false</div>
        <%} %>  
        Ejs 模板中循环数据
        <%for(var i=0;i<list.length;i++) { %>
            <li><%=list[i] %></li>
        <%}%>
                            `}
                        </code>
                    </pre>
                </div>
            </div>
            <div>
                <h3>Ejs 后缀修改为 Html</h3>
                <div className='hang'>
                    <div><code>{`var ejs = require('ejs')`}</code> <span>在 app.js 的头上定义 ejs</span></div>
                    <div><code>{`app.engine('html',ejs.__express)`}</code> <span>注册 html 模板引擎代码</span></div>
                    <div><code>{`app.set('view engine', 'html')`}</code> <span>将模板引擎换成 html 代码</span></div>
                    <div>修改模板文件的后缀为.html</div>
                </div>
            </div>
        </div>
        )
    }
}
export default Express;