import React , {Component} from "react"

import Pm from "./views/Pm"
class Setnode extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"wget https://nodejs.org/dist/v8.9.3/node-v8.9.3-linux-x64.tar.xz",explain:"官网下载 nodejs"},
                {name:"xz -d node-v8.9.3-linux-x64.tar.xz",explain:"减压"},
                {name:"tar -xvf node-v8.9.3-linux-x64.tar",explain:"减压"},
                {name:"mv node-v8.9.3-linux-x64 /usr/local/nodejs",explain:"移动到全局的安装文件夹"},
                {name:"vi /etc/profile",explain:"配置环境变量"},
                {name:"export NODE_HOME=/usr/local/nodejs/bin",explain:"vi 下添加"},
                {name:"export PATH=$NODE_HOME:$PATH",explain:"vi 下添加"},
                {name:":wq",explain:"保存"},
                {name:"source /etc/profile",explain:"运行"},
                {name:"node -v / npm -v",explain:"检查是否安装成功"},
                {name:"echo $PATH",explain:"查看环境变量是否生效"},
            ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h3 className='Title_h3'>linux下源代码(C 语言)安装</h3>
                    <h4>先安装源代码编译的软件 gcc，make，openssl</h4>
                    <div className='code'>
                        <div>yum install -y gcc make gcc-c++ openssl-devel</div>
                        <div>检查系统中是否已经安装 gcc：</div>
                        <div>rpm -qa | grep gcc / rpm -ql gcc</div>
                    </div>
                    <h3>三步走编译安装 linux 源代码</h3>
                    <div>先下载源代码文件，减压到对应文件</div>
                    <div className='code'>
                        <div className="hang">
                            <b>./configure --prefix=/usr/local/nodejs</b>
                            <span>安装路径设置为/usr/local/nodejs(这样就是全局安装了)</span>
                        </div>    
                        <div className="hang">
                            <b>make / make -j4</b>
                            <span>在nodejs文件下开始编译(make)，-j4加快编译</span>
                        </div>    
                        <div className="hang">
                            <b>make install</b>
                            <span>安装软件</span>
                        </div> 
                    </div>
                    <h3>卸载源代码安装的软件</h3>
                    <div className='code'>
                        <div className="hang">
                            <b>rm -rf /usr/local/nodejs/</b>
                            <span>直接删除源代码</span>
                        </div>    
                    </div>
                </div>
                <div>
                    <h3>二进制安装配置 nodejs</h3>
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
                    <p>
                        个人推荐第二种方式安装二进制包，源代码安装时间比较长和麻烦
                    </p>
                </div>
                <Pm/>
            </div>
        )
    }
}
export default Setnode;