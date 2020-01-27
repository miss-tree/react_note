import React , {Component} from "react"

import InLinux from './views/redisInLinux'
class Redis extends Component{
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
                    <h3 className='Title_h3'>关于Redis</h3>
                    <p>
                    Redis 是完全开源免费的，遵守 BSD 协议，是一个高性能的 key-value 数据库，它也属于 nosql。 
                    Redis 和 Memcached 类似，都是内存级别的数据缓存，主要用户数据缓存，它支持存储的 value 类型相对 更多，
                    包括 string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和 hash（哈希类型）。
                     Redis 不仅有丰富的特性（数据持久化到硬盘、 publish/subscribe、 key 过期），
                     还有极高性能，经测试 Redis 能读的速度是 110000 次/s,写的速度是 81000 次/s 。
                    </p>
                    <h3>windows 中安装配置使用 Redis</h3>
                    <div>下载地址
                        <span className="spanCode">https://github.com/MicrosoftArchive/redis/releases</span> 
                        下载Redis-x64-3.2.100.msi
                    </div>
                    <div className="linuxImg">
                        <img src={require('../../assets/images/linux/redis01.jpg')} alt=''/>
                    </div>
                    <div>在第三步添加到环境变量中勾选，在全局就可以使用了，然后按步骤默认安装即可</div>
                    <h3>redis-cli 连接 redis</h3>
                    <p>进入 Redis 的目录，cd C:\Program Files\Redis。 
                        输入 redis-cli 并回车。（redis-cli 是客户端程序） 
                        如图正常提示进入，并显示正确端口号，则表示服务已经启动。
                    </p>
                    <div className="linuxImg">
                        <img src={require('../../assets/images/linux/redis02.jpg')} alt=''/>
                    </div>
                    <h3>nodejs使用redis</h3>
                    <div className="lineCode">
                        npm install redis --save
                    </div>
                    <div >
                        <pre>
                            <code>
                            {`
        var redis = require('redis'); 
        var client = redis.createClient(6379, 'localhost'); 
        //设置数据 
        client.set('username', '李四'); 
        client.set('username', '李四','EX','5');//设置过期 5 秒 
        //获取数据 
        client.get('username', function(err, val){ 
            console.log(val); 
        });
                            `}
                            </code>
                        </pre>
                    </div>
                    <p>redis可以持久到硬盘，类似localstorage一样</p>
                </div>
                <div><InLinux/></div>
            </div>
        )
    }
}
export default Redis;