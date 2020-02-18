import React from "react"

import FsOther from '../views/fsOther'
class Fsmodule extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>fs模块</h3>
                <p>
                    fs模块是操作文件模块，主要是读取和操作文件增删改。  
                </p>
                <pre>
                    <code>
                        {`
        var http=require('http');//开启服务
        var fs=require('fs');//文件操作模块
        
        var port = process.env.PORT || 8080;
        /*同步文件读取方式*/
        http.createServer(function(require,response){
            if(require.url!='/favicon.ico'){
                /*writeHead()
                 response.writeHead(statusCode, [reasonPhrase], [headers])
                 statusCode    HTTP状态码
                 * */
                response.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
                /*设置文件读取方式,'binary'为二进制*/
                response.writeHead(200,{'Content-Type':'image/jpeg'})
                var img= fs.readFileSync('./img/gate.jpg','binary')
                response.write(img,'binary');
                response.end()
                
            }
        }).listen(8080)
        
        /*文件异步读取方式*/
        http.createServer(function(require,response){
            if(require.url!=='/favicon.ico'){
                if(require.url=='/img'){//异步读取文件
                    /*设置文件读取方式*/
                    response.writeHead(200,{'Content-Type':'image/jpeg'})
                    fs.readFile('./img/gate.jpg','binary',function(err,data){
                        /*err：报错参数，data：数据参数*/
                        response.write(data,'binary');
                        //binary 图片二进制读取方式
                        response.end()
                    })
                }else{//同步读取html文件
                    response.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
                    var data= fs.readFileSync('./index.html','utf-8')
                    response.write(data);
                    response.end()
                }	
            }
        }).listen(8080)
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>fs文件操作其他方式</h3>
                <div className="hang">
                    <div>fs.writeFileSync('file.html',data,callback(err,res)) <span>同步输入内容创建文件</span></div>
                    <ul>
                        <li>第一个参数，文件名，也可以是文件路径，例如'html/index.html',就是在同级别的html文件夹下产生inde.html</li>
                        <li>data,就是预先设置好的文件内容</li>
                        <li>callback,不管成功或失败的回调</li>
                    </ul>
                </div>
                <FsOther/>
            </div>
            <div>
                <h3>文件流模式</h3>
                <b>读取文件</b>
                <pre>
                    <code>
                        {`
        const fs = require('fs')
        //流的方式读取文件
        var readStream=fs.createReadStream('input.txt');
        var str='';/*保存数据*/
        var count=0;  /*次数*/
        readStream.on('data',function(chunk){
            str+=chunk;
            count++;
        })
        //读取完成
        readStream.on('end',function(chunk){
            console.log(count);//文件小就读取一次，大就分几次
            console.log(str);
        })
        //读取失败
        readStream.on('error',function(err){
            console.log(err);
        })                
                        `}
                    </code>
                </pre>
                <b>输出文件</b>
                <pre>
                    <code>
                        {`
        var fs = require("fs");
        var data = '我是从数据库获取的数据，我要保存起来11\n';
        // 创建一个可以写入的流，写入到文件 output.txt 中
        var writerStream = fs.createWriteStream('output.txt');
        for(var i=0;i<100;i++){
            writerStream.write(data,'utf8');
        }
        //标记写入完成
        writerStream.end();
        writerStream.on('finish',function(){
            console.log('写入完成');
        })
        //失败
        writerStream.on('error',function(){
            console.log('写入失败');
        })              
                        `}
                    </code>
                </pre>
                <b>管道流</b>
                <pre>
                    <code>
                        {`
        var fs = require("fs");
        // 创建一个可读流
        var readerStream = fs.createReadStream('input.txt');
        // 创建一个可写流
        var writerStream = fs.createWriteStream('output.txt');
        // 管道读写操作
        // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
        readerStream.pipe(writerStream);
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default Fsmodule;