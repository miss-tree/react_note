import React,{Component} from "react"


class Config extends Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div>
                <div>
                    <h3 className='Title_h3'>安装net-tools</h3>
                    <p>最小化安装 CentOs 后是没法直接用 ifconfig、netstat 命令的，如果要用 ifconfig、netstat 等 命令需要安装 net-tools</p>
                    <div className="hang">
                        <b>yum install -y net-tools</b>
                        <span></span>
                    </div>
                    <div className="hang">
                        <b>yum search net-tools</b>
                        <span>yum 软件包查找</span>
                    </div>
                    <p>若是yum内的源，则可通过yum search ifconfig显示需要安装net-tools</p>
                    <img src={require('../../assets/images/linux/config01.jpg')} alt=''/>
                </div>
                <div>
                    <h3>配置开启网络</h3>
                    <p>如果安装的时候忘记开启网络我们可以在配置文件中 开启网络</p>
                    <div className="hang">
                        <b>vi /etc/sysconfig/network-scripts/ifcfg-ens33</b>
                        <span>编辑命令</span>
                    </div>
                    <div className="hang">
                        <span>ONBOOT=’no’修改为 yes</span>
                    </div>
                    <div className="hang">
                        <b>service network restart</b>
                        <span>重启网络</span>
                    </div>
                </div>
                <div className="linuxImg">
                    <h3>Vmware 使用技巧挂起和制作快照</h3>
                    <img src={require('../../assets/images/linux/config02.jpg')} alt=''/>
                </div>
            </div>
        )
    }
}

export default  Config;