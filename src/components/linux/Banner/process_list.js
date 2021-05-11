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
               
            </div>
        )
    }
}
export default Plist;