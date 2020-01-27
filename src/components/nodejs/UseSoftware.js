import React from "react"


class UseSoftware extends React.Component{

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
        var http = require('http');
        http.createServer(function (request, response) {
            //  request 参数表示请求，response 表示响应
            //设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
            response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
            // 发送响应数据 "Hello World",End 方法使 Web 服务器停止处理脚本并返回当前结果
            res.end("哈哈哈哈，我买了一个 iPhone" + (1+2+3) + "s");
        }).listen(8888);
        // 终端打印如下信息
        console.log('Server running at http://127.0.0.1:8888/');
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
export default UseSoftware;