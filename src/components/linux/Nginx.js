import React , {Component} from "react"
import {  Link } from "react-router-dom"


class Nginx extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"22:51:40",explain:"系统当前时间"},
                {name:"5:10",explain:"系统(重启)到目前为止 i 运行的时间"},
                {name:"2 users",explain:"当前登陆系统的用户数量"},
                {name:"0.15，0.05，0.06",explain:"分别表示距离现在一分钟，五分钟，十五分钟的负载情况"},
            ],
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h3 className='Title_h3'>Nginx 负载均衡</h3>
                    <h5>负载均衡的种类</h5>
                    <p>
                     一种是通过硬件来进行解决，常见的硬件有 NetScaler、F5、Radware 和 Array 等商用的 
                     负载均衡器，但是它们是比较昂贵的 
                     另一种是通过软件来进行解决的，常见的软件有 LVS、Nginx、apache 等,它们是基于 
                     Linux 系统并且开源的负载均衡策略
                    </p>
                    <div>
                        Nginx 的特点是占有内存少，并发能力强，事实上 nginx 的并发能力确实在同类型的网页服 务器中表现最好
                    </div>
                    <h3>nginx 的 upstream 目前支持 3 种方式的分配</h3>
                    <div>
                        <ul>
                            <li>轮询（默认）: 每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器 down 掉， 能自动剔除。</li>
                            <li>weight 权重 ——you can you up :指定轮询几率，weight 和访问比率成正比，用于后端服务器性能不均的情况。</li>
                            <li>ip_hash ip 哈希算法 :每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器， 可以解决 session 的问题。</li>
                        </ul>
                    </div>
                    <div className="red">准备工作：1、关闭 Selinux 2、开启防火墙对应端口</div>

                    <div>安装及详情配置，<Link to="/linux/Banner/software">请看Nginx配置</Link> </div>
                </div>
            </div>
        )
    }
}
export default Nginx;