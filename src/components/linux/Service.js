import React ,{Component} from "react"

class Service extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"systemctl start httpd",explain:"启动服务"},
                {name:"systemctl stop httpd",explain:"关闭服务"},
                {name:"systemctl restart httpd",explain:"重启服务"},
                {name:"systemctl status httpd",explain:"查看一个服务的状态"},
                {name:"systemctl is-active httpd",explain:"查看一个服务是否在运行"},
                {name:"systemctl list-units -t service",explain:"查看当前已经运行的服务"},
                {name:"systemctl list-units -at service",explain:"列出所有服务(注意顺序)"},
                {name:"systemctl enable httpd",explain:"设置开机自启动"},
                {name:"systemctl disable httpd",explain:"停止开机自启动"},
                {name:"systemctl reload httpd",explain:"使指定服务从新加载配置"},
                {name:"systemctl list-unit-files|grep enabled",explain:"列出所有自启动服务"},
                {name:"systemctl list-unit-files|grep disabled",explain:""},
                {name:"systemctl list-unit-files|grep disabled | grep httpd",explain:""},
            ],
            firemsg:[
                {name:"systemctl start firewalld",explain:"启动"},
                {name:"systemctl stop firewalld",explain:"关闭"},
                {name:"systemctl status firewalld",explain:"查看状态"},
                {name:"systemctl disable firewalld",explain:"开机禁用"},
                {name:"systemctl enable firewalld",explain:"开机启用"},
                {name:"firewall-cmd --state",explain:"显示状态"},
                {name:"firewall-cmd --zone=public --list-ports",explain:"查看所有打开的端口"},
                {name:"firewall-cmd --reload",explain:"更新防火墙规则"},
                {name:"firewall-cmd --zone=public --add-port=80/tcp --permanent",explain:"开启一个端口（–permanent 永久生效，没有此参数重 启后失效）"},
                {name:"firewall-cmd --reload",explain:"重新载入(修改 firewall-cmd 配置后必须重启)"},
                {name:"firewall-cmd --zone= public --query-port=80/tcp",explain:"查看"},
                {name:"firewall-cmd --zone= public --remove-port=80/tcp --permanent",explain:"删除"},
            ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h3 className='Title_h3'>systemctl管理服务常用命令</h3>
                    <div className='code'>
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
                    <div>
                        <img src={require('../../assets/images/linux/systemctl01.jpg')} alt=""/>
                    </div>
                </div>
                <div>
                    <h3>Firewalld 防火墙的设置</h3>
                    <div className='code'>
                        {
                            this.state.firemsg.map((el,key)=>{
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
                    <h3>SElinux防火墙的设置</h3>
                    <div>只需简单了解就好</div>
                    <div>
                        <img src={require('../../assets/images/linux/selinux01.jpg')} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Service;