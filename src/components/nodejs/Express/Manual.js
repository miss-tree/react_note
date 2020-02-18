import React, { Component } from 'react'

export default class Manual extends Component {
    constructor(props){
        super(props)
        this.state={
            resList:[
                {name:"res.download()",explain:"提示下载文件。"},
                {name:"res.end()",explain:"终结响应处理流程。"},
                {name:"res.json()",explain:"发送一个 JSON 格式的响应。"},
                {name:"res.jsonp()",explain:"发送一个支持 JSONP 的 JSON 格式的响应。"},
                {name:"res.redirect()",explain:"重定向请求。"},
                {name:"res.render()",explain:"渲染视图模板"},
                {name:"res.send()",explain:"发送各种类型的响应。"},
                {name:"res.sendFile",explain:"以八位字节流的形式发送文件。"},
                {name:"res.sendStatus()",explain:"设置响应状态代码，并将其以字符串形式作为响应体的一部分发送。"},
            ]
        }
    }
    render() {
        return (
            <div>
                <div>
                    <h3 className="Title_h3">响应方法</h3>
                    <p>下表中响应对象（res）的方法向客户端返回响应，终结请求响应的循环。
                        如果在路由句柄中一个方法也不调用，来自客户端的请求会一直挂起。</p>
                    <div class="Table">
                    {
                        this.state.resList.map((el,index)=>{
                            return (<div class="TableRow" key={index}>
                                    <span class="RowLeft" href="#onclick">{el.name}</span>
                                    <span class="RowRight">{el.explain}</span>
                                </div>)
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}
