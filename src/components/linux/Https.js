import React from "react"

class Https extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>申请ssl证书</h3>
                <p>
                HTTPS（全称：Hyper Text Transfer Protocol over Secure Socket Layer），
                是以安全为目标的 HTTP 通道，简单讲是 HTTP 的安全版。 
                HTTPS 是在 HTTP 的基础上添加了安全层，从原来的明文传输变成密文传输，
                当然加密与解 密是需要一些时间代价与开销的，不完全统计有 10 倍的差异。
                在当下的网络环境下可以忽 略不计，已经成为一种必然趋势。
                 目前微信小程序请求 Api 必须用 https、Ios 请求 api 接口必须用 https
                </p>
                <ul>
                    <li>1、域名型 https 证书（DVSSL）：信任等级一般，只需验证网站的真实性便可颁发证书保护网站；</li>
                    <li>2、企业型 https 证书（OVSSL）：信任等级强，须要验证企业的身份，审核严格，安全性更高；</li>
                    <li>3、增强型 https 证书（EVSSL）：信任等级最高，一般用于银行证券等金融机构，
                        审核严格，安全性最高， 同时可以激活绿色网址栏。</li>
                </ul>
                <div>验证申请步骤还是有点多，不多说，以阿里云为例。在主页选择云安全=>SSL证书=>选择免费版证书=>
                    点击购买=>支付=>证书控制台。下面是验证界面。
                </div>
                <div className='linuxImg'>
                    <img src={require('../../assets/images/linux/SSL01.jpg')} alt=''/>
                </div>
                <p>完成默认填写即可，不要修改默认验证方式，后面会比较麻烦。完成填写后等待验证通过即可。
                    通过验证会在10分钟左右完成，通过完成就可以下载证书，下载文件，修改配置</p>
            </div>
            <div>
                <h3>阿里云服务器Nginx修改</h3>
                <pre>
                    <code>
                        {`
        console.log('Server running at http://127.0.0.1:8888/');
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default Https;