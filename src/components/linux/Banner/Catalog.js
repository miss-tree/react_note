import React,{Component} from "react"


class Catalog extends Component {
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"root 目录",explain:"linxu 超级权限 root 的主目录。"},
                {name:"home 目录",explain:"系统默认的用户主目录，如果添加用户是不指定用户的主目录，默认在/home 下创建与用户同名的文件夹。"},
                {name:"bin 目录",explain:"存放系统所需要的重要命令，比如文件或目录操作的命令 ls、cp、mkdir 等，另外 /usr/bin 也放了一些系统命令。这些命令对应着文件都是可以执行的。"},
                {name:"sbin 目录",explain:"存放只有 root 超级管理员才能执行的程序"},
                {name:"boot 目录",explain:"存放着 linux 启动时内核及引导系统程序所需要的核心文件，内核文件和 grub 系统引导管理器都位于此目录。"},
                {name:"dev 目录",explain:"存放这 linux 系统下的设备文件，如光驱等。"},
                {name:"etc 目录",explain:"存放系统的配置文件，作为一些软件启动时默认配置文件读取的目录，如/etc/fstal 存放系统分析信息。"},
                {name:"mnt 目录",explain:"临时文件挂载目录、 也可以说是测试目录"},
                {name:"opt 目录",explain:"第三方软件存放目录"},
                {name:"media 目录",explain:"即插即用型设备挂载点，光盘默认挂载点，通常光盘挂载于/mnt/cdrom 下。"},
                {name:"tmp 目录",explain:"临时文件夹。"},
                {name:"usr 目录",explain:"应用程序存放目录，安装 linux 软件包是默认安装到/usr/local 目录下。"},
                {name:"var 目录",explain:"目录经常变动，/var/log 存放系统日志，/var/log 存放系统库文件。"}
            ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h4 className='Title_h3'>Linux根目录</h4>
                    <div className="linuxImg">
                        <img src={require('../../../assets/images/linux/Catalog01.jpg')} alt=''/>
                    </div>
                    {
                        this.state.msg.map((el,key)=>{
                            return (
                                <div className="hang"  key={key}>
                                    <b>{el.name}:</b>
                                    <span>{el.explain} </span>
                                </div>
                            )
                        })
                    }
                    <h4>显示的文件类型</h4>
                    <div className="linuxImg">
                        <img src={require('../../../assets/images/linux/Catalog02.jpg')} alt=''/>
                    </div>
                </div>
            </div>
        )
    }
}

export default  Catalog;