import React,{Component} from "react"


class SetUp extends Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div>
                <div>
                    <h4 className='Title_h3'>Linux常用远程工具</h4>
                    <p>常用的有以下三种工具</p>
                    <img src={require('../../assets/images/linux/tool01.jpg')} alt=''/>
                </div>
                <div className="linuxImg">
                    <h4>解决中文乱码的办法</h4>
                    <p>PUTTY办法</p>
                    <img src={require('../../assets/images/linux/tool02.jpg')} alt=''/>
                    <p>SSH Secure Shell Client</p>
                    <p>修改/etc/locale.conf:将文件内容修改 LANG=”zh_CN.gbk” （"zh_CN.gbk"为自己修改的字符集）.最后执行 source /etc/locale.conf 即可永久生效，下次登录，中文就不会乱码了。</p>
                    <img src={require('../../assets/images/linux/tool03.jpg')} alt=''/>
                    <img src={require('../../assets/images/linux/tool04.jpg')} alt=''/>
                </div>
            </div>
        )
    }
}

export default  SetUp;