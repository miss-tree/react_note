import React from "react"


class Urlpath extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>url模块</h3>
                <pre>
                    <code>
                        {`
        var http=require('http');//开启服务
        var fs=require('fs');//文件操作模块
        var url=require('url')//url模块
        var port = process.env.PORT || 8080;
        
        http.createServer(function(require,response){
            if(require.url!='/favicon.ico'){//避免二次请求
                response.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
                var html='https://www.html.cn:8080?name=hello#app'
                /* url.format()将对象转化为字符串
                 *
                 * url.resolve() 包含两个参数，
                 * 第一个参数是完整的域名，第二个参数是域名"/"后的路径
                 * 1、若第一个域名后没有路径，第二个参数将变成路径
                 * 2、若第一个域名含有路径，第二个参数将替换路径
                 */
                //console.log(url.parse(html,true))//=>第二个参数为布尔值，默认为false，true将query转化为对象
                //console.log(url.format(ret))//=>'https://www.html.cn:8080?name=hello#app'
                console.log(url.resolve('https://www.baidu.com','/hello'))//https://www.baidu.com/hello
                console.log(url.resolve('https://www.baidu.com/hello','/world'))//https://www.baidu.com/world
                response.end()
            }
        }).listen(port)
        
        console.log('localhost on port' + port);
        /*上面url.parse(html)的打印
        Url {
            protocol: 'https:',   		                            //请求协议 	http , https
            slashes: true,				                            //协议后的斜杠
            auth: null,					                            //url中的验证
            host: 'www.html.cn:8080',		                        //完整的url 小写    主机部分，包括端口号 	
            port: '8080',					                        //主机端口号
            hostname: 'www.html.cn',		                        //域名中的小写主机名
            hash: '#app',					                        //url中的#后面部分
            search: '?name=hello',		                            //url中的查询字符串
            query: 'name=hello',			                        //查询字符串的参数部分，默认为字符串，true转化为对象
            pathname: '/',				                            //url中的路径部分
            path: '/?name=hello',			                    //search和pathname连在一起
            href: 'https://www.html.cn:8080/?name=hello#app' 		//完整url
        }
        */
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>url的使用</h3>
                <p>多用于地址栏的操作，url.parse(url,true)获取参数，或者利用url.resolve()方法做跳转</p>
            </div>
            <div>
                <h3>获取数据</h3>
                <pre>
                    <code>
                        {`
        /*get方式请求传*/
        console.log(url.parse(require.url,true))//添加第二个参数是为了转化为对象
        var data_submit=url.parse(require.url,true).query
        console.log(data_submit.somebody,data_submit.psw)

        /*post方式请求*/
        var data_submit='';
        require.on('data',function(res){//请求到的数据
            data_submit+=res
        })
        require.on('end',function(){//请求结束
            console.log(data_submit)
            var data=qs.parse(data_submit)
            console.log(data)
        })
                        `}
                    </code>
                </pre>
                <p>get和post传参两种方式，处理方式都不同</p>
            </div>
        </div>
        )
    }
}
export default Urlpath;