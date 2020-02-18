import React from "react"


class Events extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>事件驱动</h3>
                <p>
                在处理异步事件的时候有两种方式，一种是异步回调方式，另一种是nodejs的事件驱动。
                </p>
                <pre>
                    <code>
                        {`
        var fs=require('fs');
        function getMime(callback){
            fs.readFile('mime.json',function(err,data){
                //return data;
                callback(data);
            })
        }
        
        getMime(function(result){
            console.log(result.toString());
        })
                        `}
                    </code>
                </pre>
                <p>若是直接打印getMime()的结果就会报undefine，需要在函数中加个回调事件，解决未处理异步事件</p>
            </div>
            <div>
                <b>nodejs事件驱动</b>
                <pre>
                    <code>
                        {`
        var events=require('events');
        var EventEmitter=new events.EventEmitter();
        //广播 和接收广播
        EventEmitter.on('to_mime',function(data){
            console.log(data);
        })
        
        //监听to_parent的广播
        EventEmitter.on('to_parent',function(data){
            //console.log('接收到了这个广播事件');
            EventEmitter.emit('to_mime','给mime发送的数据')
        })
        
        setTimeout(function(){
            console.log('开始广播...');
            //广播to_parent事件
            EventEmitter.emit('to_parent','发送的数据')
        },1000);
                        `}
                    </code>
                </pre>
                <p>通过EventEmitter.emit()方法广播事件，EventEmitter.on()方法接收广播，vue发布订阅模式就是这样。
                    只有接收到广播才进行下个处理
                </p>
            </div>
        </div>
        )
    }
}
export default Events;