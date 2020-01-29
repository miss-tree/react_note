import React from "react"
import {  Link } from "react-router-dom";

class ExpMongodb extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>封装Mongodb</h3>
                <p>
                nodejs的使用 <Link to='/node/LinkNode'>请查看Mongodb</Link>，若是第四版的要自行修改
                </p>
                <pre>
                    <code>
                        {`
        var MongoClient=require('mongodb').MongoClient;
        var DbUrl='mongodb://localhost:27017/local';  /*连接数据库*/
        var ObjectID = require('mongodb').ObjectID;

        exports.ObjectID=ObjectID;//添加数据时自带的ID
        
        function  __connectDb(callback){
            MongoClient.connect(DbUrl,function(err,db){
                if(err){
                    console.log('数据库连接失败');
                    return;
                }
                //增加 修改 删除
                  callback(db);
            })
        }
        
        //数据库查找
        exports.find=function(collectionname,json,callback){
            __connectDb(function(db){
                var result=db.collection(collectionname).find(json);
                result.toArray(function(error,data){
                    db.close();/*关闭数据库连接*/
                    callback(error,data);/*拿到数据执行回调函数*/
                })
            })
        }
        
        //增加数据
        exports.insert=function(collectionname,json,callback){
            __connectDb(function(db){
                db.collection(collectionname).insertOne(json,function(error,data){
                    callback(error,data);
                })
            })
        }
        
        
        //修改数据
        exports.update=function(collectionname,json1,json2,callback){
            __connectDb(function(db){
                db.collection(collectionname).updateOne(json1,{$set:json2},function(error,data){
                    callback(error,data);
                })
            })
        }
        
        //删除数据
        exports.deleteOne=function(collectionname,json,callback){
            __connectDb(function(db){
                db.collection(collectionname).deleteOne(json,function(error,data){
                    callback(error,data);
                })
            })
        
        }
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>封装后使用</h3>
                <pre>
                    <code>
                        {`
        var DB=require('./modules/db.js');                
        //查找数据                
        DB.find('product',{},function(err,data){
            res.render('product',{
                list:data
            });
        })    
        //删除数据
        DB.deleteOne('product',{"title":"iphone4"},function(error,data){
            if(!error){
                res.send('删除数据成功');
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
export default ExpMongodb;