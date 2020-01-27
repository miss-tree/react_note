import React , {Component} from "react"


class Mongodb extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"22",explain:"[mongodb-org-4.0]"},
                {name:"5:10",explain:"name=MongoDB Repository"},
                {name:"users",explain:"baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/"},
                {name:"",explain:"gpgcheck=1"},
                {name:"5:10",explain:"enabled=1"},
                {name:"",explain:"gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc"},
            ],
            msgtt:[
                {name:"yum install -y mongodb-org",explain:"安装 mongodb"},
                {name:"systemctl start mongod",explain:"开启 mongodb 服务"},
                {name:"systemctl enable mongod",explain:"设置开机启动 mongodb"},
                {name:"systemctl stop mongod",explain:"停止 mongodb 服务"},
                {name:"systemctl restart mongod",explain:"重启 mongodb 服务"},
            ],
            ssmsg:[
                {name:"service mongod stop",explain:"首先停止服务"},
                {name:"rpm -qa | grep mongodb-org ",explain:"列出所有的包"},
                {name:"yum remove -y $(rpm -qa | grep mongodb-org)",explain:"删除安装的包"},
                {name:"rm -r /var/log/mongodb",explain:"删除日志"},
                {name:"rm -r /var/lib/mongo",explain:"删除数据"},
            ],
            ffmsg:[
                {name:"vi /etc/mongod.conf",explain:"修改 mongo.conf 文件"},
                {name:"将原来 bindIp:127.0.0.1 ",explain:"修改为 0.0.0.0"},
                {name:"service mongod restart",explain:"重启动 mongo 服务"},
                {name:"firewall-cmd --zone=public --add-port=27017/tcp --permanent ;",explain:"永久开放 27017 端口"},
                {name:"firewall-cmd --reload",explain:"重启防护墙"},
            ],
            img:[
                {src:"../../assets/images/linux/mongodb01.png"},
                {src:"../../assets/images/linux/mongodb02.png"},
                {src:"../../assets/images/linux/mongodb03.png"},
                {src:"../../assets/images/linux/mongodb04.png"},
                {src:"../../assets/images/linux/mongodb05.png"}
            ]
        }
    }
    render(){
        const img=this.state.img.map(
            (el,key)=>{
                return(
                    <div key={key} style={{ backgroundImage: `url(${el.src})` }}></div>
                )
            }
        )
        return(
            <div>
                <div>
                    <h3 className='Title_h3'>Mongodb4.x 安装</h3>
                    <h3>配置 yum 源</h3>
                    <p>官方文档：https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/</p>
                    <div className="lineCode">
                        <span>vi /etc/yum.repos.d/mongodb-org-4.0.repo</span>或
                        <span>cd /etc/yum.repos.d/ &nbsp;&nbsp;touch mongodb-org-4.0.repo</span>
                    </div>
                    <h3>在文件 mongodb-org-4.0.repo 中写入如下内容</h3>
                    <div className="balance">
                    {
                            this.state.msg.map((el,key)=>{
                                return (
                                    <div className="hang" key={key}>
                                        <span>{el.explain} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h3>yum 安装 mongodb</h3>
                    <p>数据库实例默认在/var/lib/mongo 路径下，日志默认在/var/log/mongodb 路径下，
                        也可以通过修改配置文 件/etc/mongod.conf 文件的 storage.dbPath 和 systemLog.path 配置</p>
                    <div className="code">
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
                    <h3>Mongodb4.x 卸载</h3>
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
                    <h3>远程连接 mongodb</h3>
                    <div className="code">
                    {
                            this.state.ffmsg.map((el,key)=>{
                                return (
                                    <div className="hang" key={key}>
                                        <b>{el.name}</b>
                                        <span>{el.explain} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p>
                        <span className="spanCode">注意坑点</span>
                        按照上面的步骤安装和链接，在本地虚拟机是没有问题的，但是在阿里云服务器上就会在本地连接不上mongodb。
                        除了上述的步骤外，在阿里云服务器上还要配置安全组，具体的操作如下
                    </p>
                    <div className="linuxImg">
                        <img src={require("../../assets/images/linux/mongodb01.png")} alt=""/>
                        <img src={require("../../assets/images/linux/mongodb02.png")} alt=""/>
                        <img src={require("../../assets/images/linux/mongodb03.png")} alt=""/>
                        <img src={require("../../assets/images/linux/mongodb04.png")} alt=""/>
                        <img src={require("../../assets/images/linux/mongodb05.png")} alt=""/>
                        {/* {
                            this.state.img.map((el,key)=>{
                                return(
                                    <img src={require(el.src)}  alt=""/>
                                )
                            })
                        } */}
                    </div>
                </div>
            </div>
        )
    }
}
export default Mongodb;