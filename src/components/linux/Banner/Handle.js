import React,{Component} from "react"

class Handle extends Component {
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"ip addr/ ifconfig",explain:"查看网卡 ip 地址"},
                {name:"init 0",explain:"关机"},     
                {name:"init 6",explain:"重启"},
                {name:"touch aaa.txt",explain:"在当前目录下面创建一个aaa.txt的文件"},
                {name:"ls 、ls -l、ll",explain:"列出出当前目录下的文件"},
                {name:"cd",explain:"切换目录"},
                {name:"rm -rf aaa.zip ",explain:"删除一个文件"},
                {name:"mv  file1 file11",explain:"修改文件名"},
                {name:"cat file1",explain:"查看文件内容"},
                {name:"cp file2 file22",explain:"复制文件"},
                {name:"mv file1 file11",explain:"重命名或移动文件（移动不须像复制文件夹一样加 -rf）"},
                {name:"vi file1",explain:"编辑文件"},
                {name:"输入 /Listen",explain:"在文件搜索'Listen'(必须在文件打开情况下)  N 下一个"},
                {name:"mkdir dir1 dir2 dir3",explain:"创建文件夹"},
                {name:"mkdir -p a/b/c/d/e/f/g",explain:"递归创建目录"},
                {name:"cp -rf wwwroot/ mywwwroot/",explain:"复制目录"},
                {name:"rm -rf dir*",explain:"以 dir 开头的所有文件删除"},
                {name:":q!",explain:"放弃修改"},
                {name:"touch file{1..10}",explain:"批量创建文件"},
                {name:"rm -rf file{1..10}",explain:"批量删除文件"},
                {name:"cat httpd.conf | grep listen",explain:"找到 httpd.conf 里面有 listen"},
                {name:"cat httpd.conf | grep -ignore listen / cat httpd.conf | grep -i listen",explain:"查找listen，忽略大小写"},
                {name:"find  httpd.conf",explain:"搜索/查找文件"},
                {name:"find / -name  httpd.conf",explain:"find 目录 -name  文件名"},
                {name:"pwd",explain:"查看当前路径"},
                {name:"cd -",explain:"切换最近使用过的两个目录"},
                {name:"tree a",explain:"递归查看目录(tree命令不存在:yum install tree -y)"},
                {name:"ctrl+c",explain:"中断当前程序"},
                {name:"ctrl+l / (clear) ",explain:"清屏"},
                {name:"ping 127.0.0.1",explain:"看网络是否通畅"},
                {name:"cat file1 | head -3",explain:"查看文件前 3 行"},
                {name:"cat file1 | tail -5",explain:"查看文件后 5 行"},
            ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h3 className='Title_h3'>Linux常用操作命令</h3>
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
                    <h3>Linux shell 命令技巧</h3>
                    <h4>tab 补全</h4>
                    <div className="hang">
                        <div>命令+（1 次）tab  <span>补全输入的代码</span></div>
                        <div>命令+（2 次）tab  <span>显示输入文件夹下的所有文件</span></div>
                    </div>
                    <div className="hang">
                        <div>上下键盘  <span>查看最近的历史命令</span></div>
                    </div>
                    <h4>history</h4>
                    <div className="hang">
                        <div>查看命令历史</div>
                        <div>!22  <span>历史中编号为 22 的命令</span></div>
                    </div>
                    <h4>!h</h4>
                    <div className="hang">
                        <div>调用历史中最后一次以 h 开头的命令</div>
                        <div>ls --help、man ls  <span>获取帮助</span></div>
                    </div>
                </div>
                <div>
                    <h3>Linux 创建用户修改密码</h3>
                    <div className="hang">
                        <b>useradd zhangsan</b>
                        <span>添加用户</span>
                    </div>
                    <div className="hang">
                        <b>passwd zhangsan</b>
                        <span>设置密码</span>
                    </div>
                    <div className="hang">
                        <b>userdel -rf zhangsan</b>
                        <span>删除用户</span>
                        <div>-r：递归的删除目录下面文件以及子目录下文件。</div>
                    </div>
                </div>
                <div>
                    <h3>别名管理(将多个命令变成一个命令，减少输入代码))</h3>
                    <div className="hang">
                        <b>alias chttp='cat /etc/httpd/conf/httpd.conf'</b>
                        <span>添加别名</span>
                    </div>
                    <div className="hang">
                        <b>unalias chttp</b>
                        <span>删除别名</span>
                    </div>
                    <div className="hang">
                        <b>alias</b>
                        <span>查看别名</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default  Handle;