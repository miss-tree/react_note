import React from "react"


class Querystring extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>Querystring模块</h3>
                <p>
                使用 http.createServer() 方法创建 HTTP 服务器，并使用 listen 方法绑定 8888 端口。
                函数通过 request, response 参数来接收和响应数据
                </p>
                <pre>
                    <code>
                        {`
        var qs=require('querystring')//querystring模块
        
        http.createServer(function(require,response){
            if(require.url!='/favicon.ico'){
                response.writeHead(200,{'Conent-Typzxce':'text/html;charset=utf8'})
        		console.log(qs.parse('https://www.html.cn:8080?name=你好'))
                //=>{'https://www.html.cn:8080?name':'你好'}
        		console.log(qs.parse('name=你好&a=灭绝&c=师太'))
                //=>{ name: '你好', a: '灭绝', c: '师太' }
                //console.log(qs.parse('foo=bar&baz=qux&baz=quux&corge'))
                //=>{ foo: 'bar', baz: [ 'qux', 'quux' ], corge: '' }
                //console.log(qs.parse('name=你好?a=灭绝?c=师太','?'))
                //=>{ name: '你好', a: '灭绝', c: '师太' }
        		console.log(qs.parse('name@你好?a@灭绝?c@师太','?','@'))
                //=>{ name: '你好', a: '灭绝', c: '师太' }
                var data = { name: '你好', a: '灭绝', c: '师太' }
                console.log(qs.stringify(data))
                //得到的是乱码,中文解析不出来，数字和字母没问题，要用到下面的解码
        		console.log(qs.escape('灭绝'))//编译成乱码
                var jj=qs.stringify(data)
                //console.log(querystring.unescape(jj))
                //=>name=你好&a=灭绝&c=师太
                response.end()
            }
        }).listen(8080)
        
        /*
         querystring.parse  				//把url查询字符串解析一个键值对的集合
         querystring.stringify				//把一个键值对集合生成一个url查询字符串
         querystring.escape					//字符串执行url百分号编码
         querystring.unescape				//url百分号解码
         */
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default Querystring;