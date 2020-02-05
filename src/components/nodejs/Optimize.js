import React from "react"

class Optimize extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>优化Mongodb</h3>
                <p>
                    每次和数据库的链接都会花费时间，这时候我们就要保持数据库的连接，
                减少连接后每次在数据库获取数据的时间。可以用ES6的calss方法实现一个单例，
                在已经实例化一次后就不需要再次实例化，不用再次连接。    
                </p>
                <pre>
                    <code>
                        {`
        //优化数据库连接方法
        var MongoClient = require('mongodb').MongoClient;
        var Config={
            dbUrl: 'mongodb://localhost:27017/',
            dbName: 'koa'
        }

        class Db{
            static getInstance(){   /*1、单例  多次实例化实例不共享的问题*/
                if(!Db.instance){
                    Db.instance=new Db();
                }
                return  Db.instance;
            }

            constructor(){
                this.dbClient=''; /*属性 放db对象*/
                this.connect();   /*实例化的时候就连接数据库*/

            }
            connect(){  /*连接数据库*/
            let _that=this;
            return new Promise((resolve,reject)=>{
                if(!_that.dbClient){         /*1、解决数据库多次连接的问题*/
                    MongoClient.connect(Config.dbUrl,(err,client)=>{
                        if(err){
                            reject(err)
                        }else{
                            _that.dbClient=client.db(Config.dbName);
                            resolve(_that.dbClient)
                        }
                    })
                }else{
                    resolve(_that.dbClient);
                }
            })
            }

            find(collectionName,json){/*数据库查询*/
            return new Promise((resolve,reject)=>{
                this.connect().then((db)=>{
                    var result=db.collection(collectionName).find(json);
                    result.toArray(function(err,docs){
                        if(err){
                            reject(err);
                            return;
                        }
                        resolve(docs);
                    })
                })
            })
            }
            update(collectionName,json1,json2){/*数据库更新*/
                return new Promise((resolve,reject)=>{
                    this.connect().then((db)=>{
                        //db.user.update({},{$set:{}})
                        db.collection(collectionName).updateOne(json1,{
                            $set:json2
                        },(err,result)=>{
                            if(err){
                                reject(err);
                            }else{
                                resolve(result);
                            }
                        })
                    })
                })
            }
            insert(collectionName,json){/*数据库添加*/
                return new  Promise((resolve,reject)=>{
                    this.connect().then((db)=>{
                        db.collection(collectionName).insertOne(json,function(err,result){
                            if(err){
                                reject(err);
                            }else{
                                resolve(result);
                            }
                        })
                    })
                })
            }
            remove(collectionName,json){/*数据库删除*/
                return new  Promise((resolve,reject)=>{
                    this.connect().then((db)=>{
                        db.collection(collectionName).removeOne(json,function(err,result){
                            if(err){
                                reject(err);
                            }else{
                                resolve(result);
                            }
                        })
                    })
                })
            }
            
            getObjectId(id){    /*mongodb里面查询 _id 把字符串转换成对象*/
                return new ObjectID(id);
            }
        }
        module.exports=Db.getInstance();
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>在app.js调用</h3>
                <pre>
                    <code>
                        {`
        console.time('start1');
        MongoClient.connect(dbUrl,(err,client)=>{
            if(err){
                console.log(err);
                return;
            }
            var db=client.db(dbName);
            //查询数据
            var result=db.collection('user').find({});
            result.toArray((err,docs)=>{
                console.timeEnd('start1');
                console.log(docs);
            })
        })
        
        //
        router.get('/delete',async (ctx)=>{
            //通过get传过来的id来获取用户信息
            let id=ctx.query.id;
            let data=await DB.remove('user',{"_id":DB.getObjectId(id)});
            //获取用户信息
            await ctx.render('edit',{
                list:data[0]
            });
        })
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default Optimize;