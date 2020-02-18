import React from "react"

class ExpRoutes extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>Express路由模块化</h3>
                <p>
                    因为所有的路由集中在app.js上就不方便后续的修改，需要实现路由的模块化开发，
                而且路由模块化开发有利于团队合作开发node后端，快速完成项目。下面由最开始的路由封装直至到
                app.js页面。
                </p>
                <pre>
                    <code>
                        {`
        //routes/admin/login.js                
        var express=require('express');
        var router = express.Router();   /*可使用 express.Router 类创建模块化、可挂载的路由句柄*/
        router.get('/',function(req,res){
            res.send('登录页面');
        })
        //处理登录的业务逻辑
        router.post('/doLogin',function(req,res){
            res.send('admin user');
        })
        
        module.exports = router;   /*暴露这个 router模块*/
                        `}
                    </code>
                </pre>
                <pre>
                    <code>
                        {`
        //routes/admin.js                
        var express=require('express');
        var router = express.Router();   /*可使用 express.Router 类创建模块化、可挂载的路由句柄*/

        //后台的路由  所有的后台处理都要经过这里
        var login=require('./admin/login.js');
        var product=require('./admin/product.js');
        var user=require('./admin/user.js');

        //配置路由
        router.use('/login',login);
        router.use('/product',product);
        router.use('/user',user);

        module.exports = router;   /*暴露这个 router模块*/
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>N最后合到app.js</h3>
                <pre>
                    <code>
                        {`
        //app.js                
        var express=require('express');
        //引入模块
        var admin =require('./routes/admin.js');
        var index =require('./routes/index.js')
        var app=new express();  /*实例化*/

        app.use('/',index);
        app.use('/admin',admin);

        app.listen(3004,'127.0.0.1');
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default ExpRoutes;