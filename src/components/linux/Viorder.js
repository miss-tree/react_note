import React,{Component} from "react"


class Viorder extends Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div>
                <div>
                    <h3 className='Title_h3'>Vi/Vim 快速入门</h3>
                    <p>vi 是 Unix 和类 Unix 环境下的可用于创建文件的屏幕编辑器。vi 有两种工作模式：命令模式 和文本输入模式。 vim 是 vi 的升级版本,它不仅兼容 vi 的所有指令,而且还有一些新的特性在里面。</p>
                    <p>vi 命令模式: 默认编辑一个文件的时候第一次进入的就是命令模式，vi 从命令模式切换到文本输入模式可 以在键盘上面按（i 或者 I 或者 a 或者 A 或者 O 或者 o）,按[ESC]键使 vi 从文本输入模式 回到命令模式。</p>
                    <img src={require('../../assets/images/linux/order01.jpg')} alt=''/>
                    <h3>退出 vi 命令模式:</h3>
                    <img src={require('../../assets/images/linux/order02.jpg')} alt=''/>
                    <h3>命令模式下面文本修改键：</h3>
                    <img src={require('../../assets/images/linux/order03.jpg')} alt=''/>
                    <img src={require('../../assets/images/linux/order04.jpg')} alt=''/>
                </div>
            </div>
        )
    }
}

export default  Viorder;