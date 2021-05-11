import React , {Component} from "react"

class Pstree extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"uname -a",explain:"查看内核/操作系统/CPU信息 "},
                {name:"cat /proc/cpuinfo",explain:"查看CPU信息"},
                {name:"hostname",explain:"查看计算机名"},
                {name:"env",explain:"查看环境变量资源 "},
                {name:"free -m",explain:"查看内存使用量和交换区使用量"},
                {name:"df -h",explain:"查看各分区使用情况"},
                {name:"grep MemTotal /proc/meminfo",explain:"查看内存总量 "},
                {name:"grep MemFree /proc/meminfo",explain:"查看空闲内存量"},
                {name:"ifconfig",explain:"查看所有网络接口的属性"},
                {name:"iptables -L",explain:"查看防火墙设置"},
                {name:"route -n",explain:"查看路由表"},
                {name:"ps -ef",explain:"查看所有进程"},
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
            ],
            psmsg:[
                {name:"netstat -ntlp",explain:"查看当前所有tcp端口"},
                {name:"netstat -s",explain:"查看网络统计信息进程"},
                {name:"netstat -antp",explain:"查看所有已经建立的连接"},
                {name:"netstat -lntp",explain:"查看所有监听端口"},
                {name:"netstat -ntulp | grep 80",explain:"查看所有80端口使用情况"},
                {name:"lsof -i",explain:"查看所有端口占用情况(包括系统的)"},
                {name:"lsof -i:5000",explain:"查看端口5000占用情况"},
            ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h3>系统信息命令(常用)</h3>
                    <div className="code">
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
                    <div className="code">
                        {
                            this.state.psmsg.map((el,key)=>{
                                return (
                                    <div className="hang" key={key}>
                                        <b>{el.name}</b>
                                        <span>{el.explain} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
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
export default Pstree;