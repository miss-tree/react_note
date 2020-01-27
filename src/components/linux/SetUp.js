import React,{Component} from "react"


class SetUp extends Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div>
                <div>
                    <h3 className='Title_h3'>Linux 简单介绍</h3>
                    <p>Linux 是一套开源操作系统，它有稳定、消耗资源小、功能很强、安全性高等特点，让它在 服务器领域有庞大的用户群体。 目前市面上较知名的发行版有：RedHat、Ubuntu、CentOS、Debian、Fedora、SuSE、OpenSUSE、 Arch Linux、SolusOS 等。 常见的服务器操作系统主要有 CentOS 、Ubuntu、Debian ,CentOS 现在市场占有率第一。</p>
                </div>
                <div>
                    <h3>VMware 虚拟机安装配置</h3>
                    <p>vmware workstation可以在官网安装试用版本，现在是15版本，14版本的密钥：FF31K-AHZD1-H8ETZ-8WWEZ-WUUVA，CV7T2-6WY5Q-48EWP-ZXY7X-QGUWD</p>
                    <p>安装方式默认即可</p>
                </div>
                <div>
                    <h3>CentOS的安装以及配置</h3>
                    <p>Linux 的光盘（操作系统）:
                        https://www.centos.org/download/
                    </p>
                    <b>注意:</b>
                    <ul>
                        <li>1、安装的时候需要配置网络--->开启网络</li>
                        <li>2、安装的时候配置的密码必须记住</li>
                        <li>3、鼠标进入虚拟机出不来的时候按住键盘 ctrl+alt</li>
                        <li>4、点击虚拟机->VMware tools 必须安装</li>
                    </ul>
                </div>
                <div className="linuxImg">
                    <h3>VMware workstation虚拟机安装步骤</h3>
                    <h5>点击新建虚拟机，默认参数设置</h5>
                    <img src={require('../../assets/images/linux/vmware01.jpg')} alt=''/>
                    <h5>默认参数设置</h5>
                    <img src={require('../../assets/images/linux/vmware02.jpg')} alt=''/>
                    <h5>内存可以设置512M起，越大运行越快,网络默认NAT，下面的DHCP会自动在网络连接界面分配一个链接给虚拟机</h5>
                    <img src={require('../../assets/images/linux/vmware03.jpg')} alt=''/>
                    <h5>系统安装按回车，等到语言设置界面</h5>
                    <img src={require('../../assets/images/linux/vmware04.jpg')} alt=''/>
                    <h5>进入安装信息，有些图标是灰色，不要紧直接设置系统安装位置</h5>
                    <img src={require('../../assets/images/linux/vmware05.jpg')} alt=''/>
                    <h5>设置网络连接，忘记则需要在安装好的系统设置</h5>
                    <img src={require('../../assets/images/linux/vmware06.jpg')} alt=''/>
                    <h5>创建用户和密码，点击安装等待成功</h5>
                    <img src={require('../../assets/images/linux/vmware07.jpg')} alt=''/>
                </div>
            </div>
        )
    }
}

export default  SetUp;