import React from "react"


class LinkNode extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>Nodejs 中使用 Mongodb</h3>
                <div className='hang'>官网：
                    <span>
                        <a href='http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/' target="_blank">
                        http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/
                        </a>
                    </span>
                </div>
                <b>Mongodb第三版使用方法</b>
                <pre>
                    <code>
                        {`
        var http=require('http');
        var MongoClient = require('mongodb').MongoClient;  /*引入数据库 MongoClient*/
        var DBurl = 'mongodb://localhost:27017/local';  // 连接数据库的地址   student表示数据库的名称
        var url=require('url'); /*引入url模块*/
        var app=require('./model/express-route.js');
        http.createServer(app).listen(8000);
        
        //增加数据
        app.get('/add',function(req,res){
           var query=url.parse(req.url,true).query;
           var name=query.name;
            MongoClient.connect(DBurl,function(err,db){  /*连接数据库*/
                if(err){
                    console.log('数据库连接失败');
                    return;
                }
                db.collection('user').insertOne({
                    "name":name,
                    "age":10
                },function(error,result){
                    if(error){
                        console.log('增加数据失败');
                        return;
                    }
                    res.send('增加数据成功');
                    db.close();/*关闭数据库*/
                })
            })
        })
        
        //更新数据
        app.get('/edit',function(req,res){
            MongoClient.connect(DBurl,function(err,db){
                if(err){
                    console.log('数据库连接失败');
                    return;
                }
                db.collection('user').updateOne({"name":"lisi"},{$set:{
                    "age":666
                }},function(error,data){
                    if(error){
                        console.log('修改数据失败');
                        return;
                    }
                    res.send('修改数据成功');
                    db.close();/*关闭数据库*/
                })
            })
        })
        
        //删除数据
        app.get('/delete',function(req,res){
            var query=url.parse(req.url,true).query;
            var name=query.name;
            MongoClient.connect(DBurl,function(err,db){
                if(err){
                    console.log('数据库连接失败');
                    return;
                }
                db.collection('user').deleteOne({"name":name},function(error,data){
                    if(error){
                        console.log('删除失败');
                        return;
                    }
                    res.send('删除数据成功');
                    db.close();
                })
            })
        })            
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <b>第四版使用方法</b>
                <pre>
                    <code>
                        {`
        var MongoClient = require('mongodb').MongoClient;
        //定义连接数据库的地址
        const  url = 'mongodb://localhost:27017/';
        var dbName = 'shop'
        //连接数据库
        MongoClient.connect(url,(err,client)=>{
            if(err){
                console.log('数据连接失败');
                return false;
            }
            let db=client.db(dbName);   /*获取db数据库对象*/
            db.collection("admin").insertOne({"name":"mongodb3.0","age":10},function(err){
                if(err){
                    console.log('增加失败');
                    return false;
                }
                console.log('增加成功');
                client.close();  /*关闭数据库*/
            })
        })         
                        `}
                    </code>
                </pre>
                <p>主要优化了Mongdb数据库的使用，可能会使用到Mongodb下多个数据库，而不是单独一个的使用，
                    所以在指定的Mongodb地址没有指定是哪个库，</p>
            </div>
        </div>
        )
    }
}
export default LinkNode;