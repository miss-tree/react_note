import React,{Component} from "react"


class Pack extends Component {
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"yum install -y unzip zip",explain:"安装 zip 减压软件"},
                {name:"zip -r public.zip public",explain:"制作zip"},
                {name:"unzip public.zip",explain:"解压"},
                {name:"unzip public.zip -d dir",explain:"解压到dir文件夹。"},
                {name:"unzip -l public.zip",explain:"查看"},
            ],
            gzmsg:[
                {name:"tar czvf public.tar.gz public",explain:"制作 gz 包"},
                {name:"tar xzvf public.tar.gz",explain:"解压 gz 包"},
                {name:"tar tf public.tar.gz",explain:"查看 gz 包"},
                {name:"tar cvf wwwroot.tar wwwroot",explain:"制作 tar 包(仅打包，不压缩！)"},
                {name:"tar xvf wwwroot.tar",explain:"减压 tar 包"},
            ],
            xzmsg:[
                {name:"tar cvf xxx.tar xxx",explain:"这样创建 xxx.tar 文件先"},
                {name:"txz xxx.tar",explain:"将 xxx.tar 压缩成为 xxx.tar.xz 删除原来的 tar 包"},
                {name:"xz -k xxx.tar",explain:"将 xxx.tar 压缩成为 xxx.tar.xz 保留原来的 tar 包"},
                {name:"xz -d ***.tar.xz",explain:"先解压 xz 删除原来的 xz 包"},
                {name:"xz -dk ***.tar.xz",explain:"先解压 xz 保留原来的 xz 包"},
                {name:"tar -xvf ***.tar",explain:"再解压 tar"},
                {name:"xz -l ***.tar.xz",explain:"先解压 xz"},
            ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h2>Linux 打包压缩命令</h2>
                    <p>目前 linux 中打包和压缩的命令很多，最常用的方法有 zip、gzip、bzip2、xz、tar</p>
                    <h3>zip 压缩包</h3>
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
                    <h3>gz 压缩包: (源代码压缩)</h3>
                    <p>Linux 下最常用的打包程序就是 tar 了，使用 tar 程序打出来的包我们常称为 tar 包，tar 包文件的命令通常都是以.tar 结尾的。生成 tar 包后，就可以用其它的程序来进行压缩了， 所以首先就来讲讲 tar 命令的基本用法</p>
                    <div className='code'>
                        {
                            this.state.gzmsg.map((el,key)=>{
                                return (
                                    <div className="hang" key={key}>
                                        <b>{el.name}</b>
                                        <span>{el.explain} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="linuxImg">
                        <img src={require('../../assets/images/linux/pack01.jpg')} alt=''/>
                    </div>
                    <h3>xz 压缩包:</h3>
                    <p>对于 xz 这个压缩相信很多人陌生，但 xz 是绝大数 linux 默认就带的一个压缩工具，xz 格式比 7z 还要小。</p>
                    <div className='code'>
                        {
                            this.state.xzmsg.map((el,key)=>{
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

export default  Pack;