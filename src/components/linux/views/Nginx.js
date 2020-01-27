import React , {Component} from "react"

class Nginx extends Component{
    constructor(props){
        super(props)
        this.state={
            uninstall:[
                {name:"yum remove -y nginx",explain:"yum安装方式卸载"},
                {name:"rm -rf /etc/nginx/",explain:"忘记安装方式，删除文件"},
                {name:"rm -rf /usr/sbin/nginx",explain:"忘记安装方式，删除文件"},
                {name:"rm /usr/share/man/man1/nginx.1.gz",explain:"忘记安装方式，删除文件"},
                {name:"apt-get remove nginx*",explain:"忘记安装方式，删除文件"},
            ]
        }
    }
    createMarkup() {
        return {__html: `server { 
            listen 80;
            server_name www.bbb.com; 
            location / { 
                #设置主机头和客户端真实地址，以便服务器获取客户端真实 
                IP proxy_set_header Host $host; 
                proxy_set_header X-Real-IP $remote_addr; 
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
                #禁用缓存 
                proxy_buffering off; 
                #反向代理的地址 
                proxy_pass http://127.0.0.1:3001; 
            } 
        }`};
    }
    render(){
        return(
            <div>
                <div>
                    <h3 className=''>Nginx 配置详解</h3>
                    <div className="linuxImg">
                        <img src={require('../../../assets/images/linux/nginx.jpg')} alt=''/>
                    </div>
                    <h3>nginx.conf设置</h3>
                    <div>
                        <pre>
                            <code>
                            {`
        user root;
        worker_processes  4;
        worker_rlimit_nofile 65535;
        events {
            worker_connections  65535;
        }

        http {
            include       mime.types;
            default_type  application/octet-stream;
            sendfile        on;
            keepalive_timeout  65;
            gzip  on;   #开启gzip
            gzip_min_length 1k; #低于1kb的资源不压缩
            gzip_comp_level 3; #压缩级别【1-9】，越大压缩率越高，同时消耗cpu资源也越多，建议设置在4左右。
            #需要压缩哪些响应类型的资源，多个空格隔开。不建议压缩图片，下面会讲为什么。
            #text/plain application/json application/x-javascript application/css application/xml application/xml+rss 
            #text/javascript application/x-httpd-php image/jpeg image/gif image/png image/x-ms-bmp;
            gzip_types text/plain application/javascript application/x-javascript text/javascript text/xml text/css;  
            gzip_disable 'MSIE [1-6]';  # 配置禁用gzip条件，支持正则。此处表示ie6及以下不启用gzip（因为ie低版本不支持）
            gzip_vary on;  #是否添加“Vary: Accept-Encoding”响应头

            server {
                listen       80;
                server_name  localhost;
                location / {
                    root   html;
                    index  index.html index.htm;
                }
                error_page   500 502 503 504  /50x.html;
                location = /50x.html {
                    root   html;
                }
            }
        }
                            `}
                            </code>
                        </pre>
                    </div>
                    <span className="red">gzip_disable 请输入"MSIE [1-6]\." react输入报错</span>
                    <h3 >Nginx 配置代理</h3>
                    {/* <div dangerouslySetInnerHTML={this.createMarkup()} /> */}
                    <div>
                        <pre>
                            <code>
                            {`
        upstream bakebbs {
            ip_hash; 
            server 127.0.0.1:3001 weight=1 ; //配置服务器的权重，数值越大访问量越多，
            server 127.0.0.1:3001 weight=3; //配置多个可以防服务器挂了而不影响服务
        }
        server { 
        listen 80;
        server_name www.bbb.com; 
        location / { 
            #设置主机头和客户端真实地址，以便服务器获取客户端真实 
            IP proxy_set_header Host $host; 
            proxy_set_header X-Real-IP $remote_addr; 
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
            #禁用缓存 
            proxy_buffering off; 
            #反向代理的地址 
            proxy_pass http://127.0.0.1:3001; 
        } 
                            `}
                            </code>
                        </pre>
                    </div>
                    <h3>卸载 Nginx</h3>
                    <div className='code'>
                        {
                            this.state.uninstall.map((el,key)=>{
                                return (
                                    <div className="hang" key={key}>
                                        <b>{el.name}</b>
                                        <span>{el.explain} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h3>域名测试</h3>
                    <p>在C:\Windows\System32\drivers\etc\hosts下修改加上</p>
                    <div className="lineCode">
                        <span>192.168.117.128</span> <span></span><span>www.bbb.com</span>
                    </div>
                    <div>浏览器输入</div>
                    <div className="lineCode">
                        <span>www.bbb.com</span> <span>nginx 转发到了 服务器/虚拟机 本地localhost</span><span>127.0.0.1:3001</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nginx;