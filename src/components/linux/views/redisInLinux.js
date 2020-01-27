import React , {Component} from "react"

class redisInLinux extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"yum info redis/yum search redis",explain:"检查是否有 redis yum 源"},
                {name:"yum install epel-release -y",explain:"安装 epel 仓库(系统提供额外的软件包)"},
                {name:"yum install redis -y",explain:"安装 redis 数据库"},
                {name:"systemctl start redis",explain:"启动 redis 服务"},
                {name:"redis-cli",explain:"进入 Redis 客户端"},
            ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h3 className=''>Linux中安装配置使用 Redis</h3>
                    <div  className='code'>
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
                </div>
            </div>
        )
    }
}
export default redisInLinux;