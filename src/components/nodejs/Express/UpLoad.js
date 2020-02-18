import React from "react"

class UpLoad extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>文件上传</h3>
                <p>
                使用 http.createServer() 方法创建 HTTP 服务器，并使用 listen 方法绑定 8888 端口。
                函数通过 request, response 参数来接收和响应数据
                </p>
                <pre>
                    <code>
                        {`
        var express=require('express');

        var app=new express();  /*实例化*/
        var md5=require('md5-node'); /*md5加密*/
        //获取post
        var multiparty = require('multiparty');  /*图片上传模块  即可以获取form表单的数据 也可以实现上传图片*/
        //数据库操作
        var DB=require('./modules/db.js');
        //保存用户信息
        var session = require("express-session");
        //配置中间件  固定格式
        app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
            cookie: {maxAge:1000*60*30},
            rolling:true
        }))
        //使用ejs模板引擎   默认找views这个目录
        app.set('view engine','ejs');
        //配置public目录为我们的静态资源目录
        app.use(express.static('public'));
        app.use('/upload',express.static('upload'));
        
        //获取登录提交的数据
        app.post('/doLogin',function(req,res){
            var username=req.body.username;
            var password=md5(req.body.password);  /*要对用户输入的密码加密*/
            //1.获取数据
            //2.连接数据库查询数据
            DB.find('user',{ username:username, password:password},function(err,data){
                if(data.length>0){
                    //保存用户信息
                    req.session.userinfo=data[0];
                    res.redirect('/product');  /*登录成功跳转到商品列表*/
                }else{
                    res.send("<script>alert('登录失败');location.href='/login'</script>");
                }
            })
        })
        
        //获取表单提交的数据 以及post过来的图片
        app.post('/doProductAdd',function(req,res){
            //获取表单的数据 以及post过来的图片
            var form = new multiparty.Form();
            form.uploadDir='upload'   //上传图片保存的地址     目录必须存在
            form.parse(req, function(err, fields, files) {
                //获取提交的数据以及图片上传成功返回的图片信息
                //console.log(files);  /*图片上传成功返回的信息*/
                var title=fields.title[0];
                var price=fields.price[0];
                var fee=fields.fee[0];
                var description=fields.description[0];
                var pic=files.pic[0].path;
                DB.insert('product',{title:title,price:price,fee, description,pic},function(err,data){
                    if(!err){
                        res.redirect('/product'); /*上传成功跳转到首页*/
                    }
                })
            });
        })

        app.get('/productedit',function(req,res){
            //获取get传值点击修改数据的 id
            var id=req.query.id;
            console.log(id);
            //去数据库查询这个id对应的数据     自增长的id 要用{"_id":new DB.ObjectID(id)
            DB.find('product',{"_id":new DB.ObjectID(id)},function(err,data){
                res.render('productedit',{
                    list:data[0]
                });
            });
        }) 
        
        app.post('/doProductEdit',function(req,res){
            var form = new multiparty.Form();
            form.uploadDir='upload'  // 上传图片保存的地址
            form.parse(req, function(err, fields, files) {
                //获取提交的数据以及图片上传成功返回的图片信息
                //console.log(fields);
                console.log(files);
                var _id=fields._id[0];   /*修改的条件*/
                var title=fields.title[0];
                var price=fields.price[0];
                var fee=fields.fee[0];
                var description=fields.description[0];
                var originalFilename=files.pic[0].originalFilename;
                var pic=files.pic[0].path;
                if(originalFilename){  /*修改了图片*/
                    var setData={title,price,fee,description,pic};
                }else{ /*没有修改图片*/
                    var setData={title,price,fee, description };
                    //删除生成的临时文件
                    fs.unlink(pic);
                }
                DB.update('product',{"_id":new DB.ObjectID(_id)},setData,function(err,data){
                    console.log(new DB.ObjectID(_id))
                        if(!err){
                            res.redirect('/product');
                        }
                })
            });
        })
        
        app.listen(8000,'127.0.0.1')
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>NodeJs 的优势</h3>
            </div>
        </div>
        )
    }
}
export default UpLoad;