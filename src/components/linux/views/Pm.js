import React , {Component} from "react"

class Pm extends Component{
    constructor(props){
        super(props)
        this.state={
            idea:[
                {name:"npm",explain:"内建负载均衡（使用 Node cluster 集群模块）"},
                {name:"npm",explain:"后台运行"},
                {name:"npm",explain:"0 秒停机重载，我理解大概意思是维护升级的时候不需要停机."},
                {name:"npm",explain:"具有 Ubuntu 和 CentOS 的启动脚本"},
                {name:"npm",explain:"停止不稳定的进程（避免无限循环）"},
                {name:"npm",explain:"控制台检测"},
            ],
            msg:[
                {name:"npm install pm2 -g",explain:"命令行安装 pm2"},
                {name:"pm2 start app.js --name www_aaa_com",explain:"运行 pm2 的程序并指定 name"},
                {name:"pm2 start app.js -i 3 --name www_bbb_com",explain:"3 启动 3 个进程 （自带负载均衡）"},
                {name:"pm2 list",explain:"显示所有进程状态"},
                {name:"pm2 logs",explain:"显示所有进程状态"},
                {name:"ppm2 logs www_aaa_com",explain:"显示一个进程的日志"},
                {name:"pm2 stop all",explain:"停止所有进程"},
                {name:"pm2 restart all",explain:"重启所有进程"},
                {name:"pm2 reload all",explain:"0 秒停机重载进程 (用于 NETWORKED 进程)"},
                {name:"pm2 stop 0",explain:"停止指定的进程"},
                {name:"pm2 restart 0",explain:"重启指定的进程"},
                {name:"pm2 stop www_bbb_com",explain:""},
                {name:"pm2 restart www_bbb_com",explain:" "},
                {name:"pm2 delete 0",explain:"杀死指定的进程"},
                {name:"pm2 delete all",explain:"杀死全部进程"},
                {name:"pm2 delete www_aaa_com",explain:"杀死指定名字的进程"},
                {name:"pm2 show www_ccc_com",explain:"显示相应进程/应用的总体信息"},
            ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h3 className='Title_h3'>PM2安装</h3>
                    <p>
                        PM2 是 Node 进程管理工具，它有着丰富的特性：
                    能够充分利用多核 CPU 且能够负载均衡、能够帮助应用在崩溃后、
                    指定时间(cluster model)和超出最大内存限制 等情况下实现自动重启。
                    是开源的基于 Nodejs 的进程管理器，
                    包括守护进程，监控，日志的一整套完整的功能。
                    </p>
                    <h3>PM2特点</h3>
                    <div className="balance">
                        {
                            this.state.idea.map((el,key)=>{
                                return (
                                    <div className="hang" key={key}>
                                        <span>{el.explain} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h3>PM2 的常见命令</h3>
                    <div className='code'>
                    {
                        this.state.msg.map((el,key)=>{
                            return(
                                <div className="hang" key={key}>
                                    <b>{el.name}</b>
                                    <span>{el.explain}</span>
                                </div>       
                            )
                        })
                    }
                          
                    </div>
                </div>
            </div>
        )
    }
}
export default Pm;