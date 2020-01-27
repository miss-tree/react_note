import React, {Component} from "react"

class List extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"chmod u+x my.sh",explain:"给当前用户分配执行 my.sh 的权限"},
                {name:"chmod o+r,o+w file.txt",explain:"给其他用户分配对 file.txt 的读写权限"},
                {name:"chmod o+r,o+w,o+x mnt",explain:"给所有其他用户分配对 mnt 目录的进入、读取、写入权限"},
                {name:"chmod -R o+r,o+w,o+x mnti",explain:"修改目录下的所有文件的权限为可读、可修改、可执行"},
                {name:"chmod 755 file",explain:"755 表示-rwxr-xr-x"},
                {name:"chmod -R 777 wwwroot/",explain:"修改目录下的所有文件的权限为可读、可修改、可执行"},
                {name:"chmod o-r,o-w,o-x mnt",explain:"让其他人对 mnt 目录没有任何权限"},
                {name:"chmod a+x test.sh",explain:"所有人对 test.sh 文件具有 x 的权限"},
                {name:"chmod a-x test.sh",explain:"让所有用户对 test.sh 都没有 x 权限"},
                {name:"chmod o-r,o-w,o-x root",explain:"所有用户对 mnt 以及 mnt 里面的所有文件和文件夹都有 w 权限"},
                {name:"chmod -R a+w mnt/",explain:"所有用户对 mnt 以及 mnt 里面的所有文件和文件夹都有 w 权限"},
            ],
            ACLmsg:[
                {name:"-m",explain:"修改权限"},
                {name:"setfacl -m u:zhangsan:rx opt/",explain:"让 zhangsan 对 opt 目录具有 rx 权限"},
                {name:"setfacl -m u:lisi:rwx opt/",explain:"让 lisi 对 opt 目录具有 rwx 的权限"},
                {name:"getfacl opt",explain:"查看 opt 拥有的 acl 权限"},
                {name:"setfacl -m u:zhangsan:rwx opt",explain:"设置 opt 的 acl 权限"},
                {name:"-x",explain:"删除权限"},
                {name:"setfacl -x u:zhangsan opt",explain:"删除 opt 的 zhangsan 拥有的 acl 权限"},
                {name:"setfacl -b opt/",explain:"删除 opt 上所设置过的所有 acl 权限"},
            ],
            sudoMsg:[
                {name:"which",explain:"搜寻权限命令在哪更改的关键字"},
                {name:"visudo",explain:"查看 sbin 下面的命令执行权限"},
                {name:"%zhangsan localhost=/usr/sbin/useradd",explain:"给zhangsan添加添加用户的权限(执行visudo命令后)"},
                {name:"%zhangsan localhost=/usr/sbin/userdel",explain:"给zhangsan添加删除用户的权限(执行visudo命令后)"},
                {name:"sudo useradd wangwu",explain:"获取权限后用 sudo 添加用户"},
                {name:"sudo userdel wangwu",explain:"获取权限后用 sudo 删除用户"},
            ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h3>chmod 权限分配</h3>
                    <p>批量给用户设置权限</p>
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
                </div>
                <div>
                    <h3>用户权限管理 ACL</h3>
                    <p>针对个人用户设置权限</p>
                    <div className='code'>
                        {
                            this.state.ACLmsg.map((el,key)=>{
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
                    <h3>用户权限管理 visudo</h3>
                    <p>赋予用户部分root权限，用到的相对较少</p>
                    <div className='code'>
                        {
                            this.state.sudoMsg.map((el,key)=>{
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

export default List;