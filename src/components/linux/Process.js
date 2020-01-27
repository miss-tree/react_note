import React , {Component} from "react"

import Plist from "./views/process_list"

class Process extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"22:51:40",explain:"系统当前时间"},
                {name:"5:10",explain:"系统(重启)到目前为止 i 运行的时间"},
                {name:"2 users",explain:"当前登陆系统的用户数量"},
                {name:"0.15，0.05，0.06",explain:"分别表示距离现在一分钟，五分钟，十五分钟的负载情况"},
            ],
            msgtt:[
                {name:"tasks",explain:"tasks 表示任务（进程）"},
                {name:"98 total",explain:"则表示现在有 98 个进程"},
                {name:"2 running",explain:"处于运行中 的有 2 个"},
                {name:"96 sleeping",explain:"96 个在休眠（挂起）"},
                {name:"0 stoped",explain:"stoped 状态即停止的进程数"},
                {name:"0 zombie",explain:"僵尸 的进程数"},
            ],
            msgss:[
                {name:"99.3 id",explain:"cpu 空闲率为 99.3%"},       
                {name:"us:user",explain:"用户空间占用 cpu 的百分比"},
                {name:"sy:system",explain:"内核空间占用 cpu 的百分比"},
                {name:"ni:niced",explain:"改变过优先级的进程占用 cpu 的百分比"},
                {name:"wa:IO wait IO",explain:"等待占用 cpu 的百分比"},
                {name:"hi:Hardware IRQ",explain:"硬中断 占用 cpu 的百分比"},
                {name:"si:software",explain:"软中断 占用 cpu 的百分比"},
                {name:"st",explain:"被 hypervisor 偷去的时间"},
            ],
            msgff:[
                {name:"997956 total",explain:"总内存：997956/1024/1024=0.95g"},       
                {name:"478020 free",explain:"空闲：0.45g"},
                {name:"146384 used",explain:"使用: 0.14g"},
                {name:"373552 buff/cache",explain:"缓存:0.35g"},
            ],
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h3 className='Title_h3'>任务管理器top 命令</h3>
                    <div>
                        <img src={require('../../assets/images/linux/process01.jpg')} alt=''/>
                    </div>
                    <h3>top 命令的第一行</h3>
                    <div className="lineCode">
                        top - <span>22:51:40</span> up <span>5:10,</span> 2 &nbsp;users <span>load average:</span>0.15,<span>0.05,</span>0.06
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
                    <h3>top 命令的第二行</h3>
                    <div className="lineCode">
                    Tasks: - <span>98</span> total, <span>2</span>  &nbsp;running, <span>96</span>sleeping,<span>0</span>stoped,<span>0</span>zombie
                    </div>
                    <div className="balance">
                        {
                            this.state.msgtt.map((el,key)=>{
                                return (
                                    <div className="hang" key={key}>
                                        <b>{el.name}</b>
                                        <span>{el.explain} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h3>top 命令的第三行：cpu 状态</h3>
                    <div className="lineCode">
                    %Cpu(s): <span>0.3</span> us, <span>0.3</span>  &nbsp;sy, <span>0.0</span>ni,<span>99.3</span>id,<span>0.0</span>wa，<span>0.0</span>hi，<span>0.0</span>si，<span>0.0</span>st，
                    </div>
                    <div className="balance">
                        {
                            this.state.msgss.map((el,key)=>{
                                return (
                                    <div className="hang" key={key}>
                                        <b>{el.name}</b>
                                        <span>{el.explain} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h3>top 命令的第四行：内存状态</h3>
                    <div className="lineCode">
                    KiB Mem : <span>997956</span> total, <span>478020</span>  &nbsp;free, <span>146384</span>used,<span>373552</span>buff/cache
                    </div>
                    <div className="balance">
                        {
                            this.state.msgff.map((el,key)=>{
                                return (
                                    <div className="hang" key={key}>
                                        <b>{el.name}</b>
                                        <span>{el.explain} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <Plist/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Process;