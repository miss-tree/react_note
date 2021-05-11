import React , {Component} from "react"

class Plist extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"PID",explain:"进程 id"},
                {name:"USER",explain:"进程所有者"},
                {name:"PR",explain:"进程优先级"},
                {name:"NI",explain:"nice 值。负值表示高优先级，正值表示低优先级"},
                {name:"VIRT",explain:"进程使用的虚拟内存总量，单位 kb。VIRT=SWAP+RES"},
                {name:"RES",explain:"进程使用的、未被换出的物理内存大小，单位 kb。RES=CODE+DATA"},
                {name:"SHR",explain:"共享内存大小，单位 kb"},
                {name:"S",explain:"进程状态。D=不可中断的睡眠状态 R=运行 S=睡眠 T=跟踪/停止 Z=僵尸进程"},
                {name:"%CPU",explain:"上次更新到现在的 CPU 时间占用百分比"},
                {name:"%MEM",explain:"进程使用的物理内存百分比"},
                {name:"TIME+",explain:"进程使用的 CPU 时间总计，单位 1/100 秒"},
                {name:"COMMAND",explain:"进程名称（命令名/命令行）"},
            ],
            ttmsg:[
                {name:"who",explain:"显示当前正在系统中的所有用户名字，使用终端设备号，注册时间"},
                {name:"whoami",explain:"显示出当前终端上使用的用户"},
                {name:"last",explain:"显示近期用户或终端的登录情况"},
            ],
            ssmsg:[
                {name:"pstree",explain:"查看进程树"},
                {name:"pstree -ap",explain:"显示所有信息"},
                {name:"pstree | grep httpd",explain:"显示httpd进程信息"},
                {name:"pkill httpd",explain:"pkill 进程的名字(关闭)"},
                {name:"kill 2245",explain:"kill 进程号(关闭)"},
                {name:"kill -9 1234",explain:"kill -9 进程号 强制杀死"},
            ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h3>top 命令的第六行</h3>
                    <div className="lineCode">
                    <span>PID</span> USER<span>PR</span> NI <span>VIRT</span> &nbsp;RES <span>SHR S</span>%CPU<span>%MEM</span>TIME+ <span> COMMAND</span>
                    </div>
                    <div className="balance">
                        {
                            this.state.msg.map((el,key)=>{
                                return (
                                    <div className="hang" key={key}>
                                        <b>{el.name}</b>
                                        <span>{el.explain} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <h3>查看登陆信息</h3>
                    <div className="code">
                        {
                            this.state.ttmsg.map((el,key)=>{
                                return (
                                    <div className="hang" key={key}>
                                        <b>{el.name}</b>
                                        <span>{el.explain} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <h3>进程管理</h3>
                    <div className="code">
                        {
                            this.state.ssmsg.map((el,key)=>{
                                return (
                                    <div className="hang" key={key}>
                                        <b>{el.name}</b>
                                        <span>{el.explain} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <h3>查看端口</h3>
                    <div >
                        <img src={require('../../../assets/images/linux/netstat01.jpg')} alt=''/>
                    </div>
                </div>
                <div>
                    <h3>查看硬盘信息</h3>
                    <div >
                        <img src={require('../../../assets/images/linux/df01.jpg')} alt=''/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Plist;