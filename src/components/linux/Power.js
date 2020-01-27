import React ,{Component} from 'react'

import List from "./views/power_list"

class Power extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"useradd lisi",explain:" 添加用户"},
                {name:"passwd lisi",explain:" 设置密码"},
                {name:"userdel -r lisi",explain:" 删除用户(-r:递归的删除目录下面文件以及子目录下文件)"},
                {name:"id lisi",explain:" 查看用户"},
                {name:"gpasswd -a testuser root",explain:" 把用户加入组(testuser 加入组后,获取到 user 组及 root 组所有权限)"},
            ],
            balance:[
                {name:"d",explain:"表示目录"},
                {name:"rwx",explain:"root 对 mnt 目录具有读、写和执行的权限"},
                {name:"r-x",explain:"root 组内其他用户对 mnt 目录具有读和执行权限"},
                {name:"---",explain:"other 其他所有用户对 mnt 目录没有任何权限"},
                {name:"2",explain:"mnt 里面的目录数量"},
                {name:"root",explain:"当前目录所属用户"},
                {name:"root",explain:"当前目录所属组"},
                {name:"6",explain:"文件夹/文件大小(以字节为单位).请注意是文件夹本身的大小,而不是文件夹以及它下面的文件的总大小!"},
                {name:"4 月",explain:"文件创建月份"},
                {name:"11 2018",explain:"文件创建时间"},
                {name:"mnt",explain:"目录名称"},
            ]
        }
    }

    render(){
        return(
            <div>
                <div>
                    <h3 className='Title_h3'>Linux用户管理</h3>
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
                    <h3>Linux用户权限</h3>
                    <p>网站发布到 linux 服务器下面一般要设置权限，
                        不然的话可能没法上传图片，或者没法写入 文件。
                        Windows 中权限没有那么明显可以含糊的过去，
                        linux 里面对权限管控非常严格。通过 ll 命令可以获取文件权限信息。</p>
                    <div className="linuxImg">
                        <img src={require('../../assets/images/linux/power01.jpg')} alt=''/>
                    </div>    
                    <div>
                    drwxr-x---.&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp; root&nbsp;&nbsp;&nbsp; root&nbsp;&nbsp;&nbsp; 6&nbsp;&nbsp;&nbsp; 4月&nbsp;&nbsp;&nbsp; 11 2018&nbsp;&nbsp;&nbsp; mnt
                    </div>
                    <div className="balance">
                        {
                            this.state.balance.map((el,key)=>{
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
                    权限就是人对文件所拥有权限，权限就是是哪个 读(r)、写(w)、执行(x)
                    </div>
                    <div>
                    用户群体即所有者 user u 、所属组 group g 、其他用户 other o 、所有用户 all a  u+g+o=a(表示所有人)
                    </div>    
                </div>
                <div>
                    <List/>
                </div>
            </div>
        )
    }

}

export default Power