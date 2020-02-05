import React , {Component} from "react"

class Mysql extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"firewall-cmd --zone=public --add-port=3306/tcp --permanent",explain:" 添加防火墙端口"},
                {name:"firewall-cmd --reload",explain:" 更新防火墙"},
                {name:"firewall-cmd --zone=public --list-ports",explain:" 查看防火墙端口"},
                {name:"firewall-cmd --zone= public --remove-port=3306/tcp --permanent",explain:" 删除防火墙端口"},
                {name:"systemctl restart mysqld",explain:" 重置Mysql服务"},
            ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h3 className='Title_h3'>MySQL数据库</h3>
                    <div>官网：
                        <a href='https://dev.mysql.com/downloads/repo/yum/' target='_balnk'>
                            https://dev.mysql.com/downloads/repo/yum/
                        </a>
                    </div>
                    <p>MySQL和MongoDB一样都是数据库，大多数后端人员用的都是MySQL数据库。
                        运用人员比较广，不同于MongoDB的是，MySQL数据库的安装可以直接使用  wget  方法下载
                        yum源，下载后直接yum安装。还有一种方法是 rpm 安装，将源下载到rpm仓库，然后再用 yum 安装</p>
                    <h3>直接下载安装</h3>    
                    <div className='hang'>
                        <div>wget http://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm<span>下载 MySQL 源的安装包</span></div>
                        <div>yum -y install mysql57-community-release-el7-11.noarch.rpm<span>安装 MySql 源</span></div>
                    </div>   
                    <div>查看是否安装成功</div>
                    <div>
                        <img src={require('../../assets/images/linux/MySQL01.jpg')} alt=''/>    
                    </div> 
                    <div>切换版本</div>
                    <p>可以修改 vim /etc/yum.repos.d/mysql-community.repo 源，改变默认安装的 mysql 版本。 
                        比如要安装 8.0 版本，将 5.7 源的 enabled=1 改成 enabled=0。然后再将 8.0 源的 enabled=0 改成 enabled=1 即可。</p>
                    <div>
                        <img src={require('../../assets/images/linux/MySQL02.jpg')} alt=''/>    
                    </div> 
                    <h3>下载到rpm仓库安装(推荐)</h3>    
                    <div className='hang'>
                        <div>rpm -ivh http://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm<span>下载 MySQL 到rpm仓库</span></div>
                        <div>yum -y install mysql-server<span>安装 MySql 源</span></div>
                    </div>  
                    <span className='red'>注意：可以通过 cd etc/yum.repos.d/ 目录下面可以查看到是否安装MySQL文件，若第一种方法调用
                    systemctl start mysqld 发现提示"Failed to start mysqld.service: Unit mysqld.service not found " 可以调用第二种方法
                    的 yum -y install mysql-server 然后就可以启动了。
                    </span>
                    <div className='hang'>
                        <div>systemctl start mysqld<span>启动 mysql</span></div>
                        <div>systemctl status mysqld<span>查看 MySQL 的启动状态</span></div>
                        <div>systemctl enable mysqld<span>mysql开机启动</span></div>
                    </div>
                </div>
                <div>
                    <h3>修改密码</h3>
                    <div>MySQL 官网密码策略详细说明：
                        <a href='https://dev.mysql.com/doc/refman/5.7/en/validate-password-options-variables.html' target='_blank' title='文档'>
                        http://dev.mysql.com/doc/refman/5.7/en/validate-password-options-variables.html#sysvar_validate_pas sword_policy
                        </a>
                    </div>
                    <p>修改密码策略 在/etc/my.cnf 文件添加 validate_password_policy 配置，指定密码策略选择 0（LOW），1（MEDIUM），2（STRONG）其中一种，
                        选择 2 需要提供密码字典文件 validate_password_policy=0</p>
                    <p>如果不需要密码策略，添加 my.cnf 文件中添加如下配置禁用即可： validate_password = off</p>
                    <span className='red'>重新启动 mysql 服务使配置生效： systemctl restart mysqld</span>
                    <p> 首次启动 MySQL 服务后会 /var/log/mysqld.log 文件生成，可以查看文件 cat /var/log/mysqld.log | grep password 可以
                        看到 root@localhost : 后面的密码，复制，在登陆的时候粘贴。但是实际上在阿里云服务器安装8.0版本的查看是空的密码，直接
                    回车就可以登陆MySQL。
                    </p>
                    <div className='hang'>
                        <div>mysql -u root -p<span>登陆mysql</span></div>
                        <div>ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!'<span>登陆后输入修改密码方式1</span></div>
                        <div>set password for 'root'@'localhost'=password('MyNewPass4!')<span>登陆后输入修改密码方式2</span></div>
                    </div>
                    <p>注意：mysql5.7 默认安装了密码安全检查插件（validate_password），默认密码检查策略要求密码必须包含：
                        大小写字母、数字和特殊符号，并且长度不能少于 8 位。
                        否则会提示 ERROR 1819 (HY000): Your password does not satisfy the current policy requirements 错误.</p>
                    {/* <div className='hang'>
                        show variables like '%password%';
                        <span>通过 msyql 环境变量可以查看密码策略的相关信息：</span>
                    </div>     */}
                </div>
                <div>
                    <h3>连接远程可视化</h3>
                    <div>
                        <img src={require('../../assets/images/linux/MySQL03.jpg')} alt=''/>    
                    </div> 
                    <div>默认配置文件路径 ：</div>
                    <ul>
                        <li>配置文件：/etc/my.cnf</li>
                        <li>日志文件：/var/log//var/log/mysqld.log</li>
                        <li>服务启动脚本：/usr/lib/systemd/system/mysqld.service socket</li>
                        <li>文件：/var/run/mysqld/mysqld.pid</li>
                    </ul>
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
                    <p>连接远程客户端需要吧 " host " 的 "localhost" 改为 " % " 才能连接远程，最后记得重启mysql和防火墙服务，
                        退出当前mysql服务命令：exit</p>
                </div>
            </div>
        )
    }
}
export default Mysql;