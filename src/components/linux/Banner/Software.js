import React , {Component} from "react"
import {  Link } from "react-router-dom";


import Nginx from "../views/Nginx"
class Software extends Component{
    constructor(props){
        super(props)
        this.state={
            yumsg:[
                {name:"yum install -y net-tools",explain:"安装 net-tools(包括 netstat ifconfig 等命令)"},
                {name:"yum install -y unzip zip",explain:"zip 压缩减压(可以一起多个安装)"},
                {name:"yum install -y wget",explain:"wget 安装可以用于 wget https：//... 网络下载"},
                {name:"yum -y install psmisc",explain:"pstree | grep httpd 查看进程(类似任务管理器) pstree -p 显示进程以及子进程"},
                {name:"yum -y remove wget",explain:"yum 卸载 rpm 包"},
                {name:"yum search 名称",explain:"yum 搜索 npm 包"},
                {name:"yum list",explain:"yum 查看 rpm 包"},
                {name:"yum list | grep httpd",explain:"搜索安装的 httpd 包"},
                {name:"yum list updates",explain:"列出所有可更新的软件包"},
                {name:"yum list installed",explain:"列出所有已安装的软件包"},
                {name:"yum info httpd",explain:"yum 显示 rpm 包信息"},
                {name:"yum -y install httpd",explain:"yum 远程安装 Apache(service httpd start 安装启动 apache)"},
                {name:"yum localinstall httpd-2.4.6-80.el7.centos.x86_64.rpm",explain:"yum 本地安装 Apache RPM 包"},
            ],
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h3 className='Title_h3'>rpm 安装和卸载软件</h3>
                    <p>
                    在 Linux 操作系统下，几乎所有的软件均通过 RPM 进行安装、卸载及管理等操作。
                    RPM 的 全称为 Redhat Package Manager ，
                    是由 Redhat 公司提出的，用于管理 Linux 下软件包的软件。
                     Linux 安装时，除了几个核心模块以外，其余几乎所有的模块均通过 RPM 完成安装。
                    </p>
                    <h4>挂载光盘</h4>
                    <p>
                        光盘放在光驱中,连上电脑, 通过 mount &nbsp;dev/cdrom &nbsp;&nbsp;/media 
                        挂载到media目录下，df 查看光盘是否挂载，通过 ls | grep httpd 查找 httpd
                    </p>
                    <h4>安装</h4>
                    <div className='code'>
                        <div>rpm -ivh httpd-2.4.6-80.el7.centos.x86_64.rpm</div>
                        <div className="hang">
                            <b>rpm -i</b> <span>需要安装的包文件名</span>
                        </div>
                        <div className="hang"><b>rpm -iv</b> <span>安装过程中显示正在安装的文件信息；</span></div>
                        <div className="hang"><b>rpm -ivh</b> <span>安装过程中显示正在安装的文件信息及安装进度；</span></div>
                    </div>
                    <h4>卸载软件</h4>
                    <div className='code'>
                        <div className="hang">
                            <b>rpm -e httpd</b>
                            <span>httpd 表示要卸载的软件包</span>
                        </div>    
                        <div className="hang">
                            <b>rpm -q httpd</b>
                            <span>查找 httpd</span>
                        </div>    
                    </div>
                    <p>
                        rpm安装有个缺点，安装只有成功和失败，失败是因为要安装软件的依赖才能成功，不能连依赖一起安装。
                        意思就是安装依赖会报其他依赖或者要安装的软件没有安装。使用 yum 就没有这个问题
                    </p>
                    
                </div>
                <div>
                    <h3>Yum 安装软件</h3>
                    <p>
                    Yum（全称为 Yellow dog Updater, Modified）是一个在
                     Fedora 和 RedHat 以及 CentOS 中的 Shell 前端软件包管理器。
                     基于 RPM 包管理，能够从指定的服务器自动下载 RPM 包并且安装，
                     可以自动处理依赖性关系，并且一次安装所有依赖的软件包，
                     无须繁琐地一次次下载、安装。
                    </p>
                    <div className='code'>
                        {
                            this.state.yumsg.map((el,key)=>{
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
                        httpd(apache)默认在yum仓库中，可以直接安装，安装好后可以连接网络(curl www.baidu.com)。
                    安装好后可以通过 <span className="spanCode">systemctl start httpd</span>启动服务。
                    首先关闭防火墙<span className="spanCode">systemctl stop firewalld</span>,外部本地才能通过
                    IP地址访问页面，默认访问的是 /var/www/html 下的文件(会默认显示页面，也可以在目录下创建页面，
                    通过修改&nbsp;&nbsp; httpd.conf下的&nbsp;&nbsp; #DocumentRoot "/var/www/html"&nbsp;&nbsp;地址，
                    但是好像不起效，只能将文件放到&nbsp;&nbsp;/var/www/html&nbsp;&nbsp; 下显示)，
                    </p>
                    <div>
                        <img src={require('../../../assets/images/linux/httpd01.jpg')} alt=''/>
                    </div>
                </div>
                <div>
                    <h3>安装Nginx</h3>
                    <p>
                        nignx需要远程安装：打开 &nbsp;&nbsp; /etc/yum.repos.d&nbsp; 目录，这个是yum仓库。yum install就是运行仓库内的文件。
                    里面没有&nbsp;nignx.repo&nbsp;文件，需要远程将文件下载下来，运行
                     <span className="spanCode">rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm</span> 
                     通过<span className="spanCode">yum search nginx/npm info nginx</span> 查看源安装是否成功。成功的话&nbsp;&nbsp; /etc/yum.repos.d&nbsp;目录
                     下会有一个&nbsp;nignx.repo&nbsp;文件，打开文件，里面就是nginx的安装信息，通过
                     <span className="spanCode">yum install -y nginx</span>安装
                    </p>
                    <p>
                        开启服务<span className="spanCode">systemctl start nginx</span>,也需要关掉防火墙，卸载httpd <span className="spanCode">yum remove -y httpd</span>
                    因为都是占用&nbsp;&nbsp;80端口，可以修改文件路径，修改配置的路径是&nbsp;&nbsp;
                    /etc/nginx/conf.d/default.conf&nbsp;&nbsp;下的&nbsp;&nbsp;
                    <span>location 内的root &nbsp;&nbsp;/usr/share/nginx/html;和index &nbsp;&nbsp;index.html index.html;</span> 
                    &nbsp;&nbsp;地址。例如(root &nbsp;&nbsp; /home/www_root_com/……;&nbsp;&nbsp;  index &nbsp;&nbsp;index.html;)
                    </p>
                    <div>查看是否安装成功，配置是否正确<span className="spanCode">nginx&nbsp;&nbsp;-t</span></div>
                    <div>
                        <img src={require('../../../assets/images/linux/nginx01.jpg')} alt=''/>
                    </div>
                    <h3>nginx启动失败的原因</h3>
                    <p>可能是配置失败的原因，<span className="spanCode">nginx&nbsp;&nbsp;-t</span> 
                    也可能是防火墙未关或没开启80端口，还有一种可能是没关ESlinux，<Link to="/linux/service">请看配置</Link>
                    <br/>
                        也可以配置防火墙开启80端口。
                        在服务器端可能还会有另一种问题
                    </p>
                    <div>
                        <img src={require('../../../assets/images/linux/nginxmiss.png')} alt=''/>
                    </div>
                    <Nginx name="nginx"/>
                </div>
            </div>
        )
    }
}
export default Software;