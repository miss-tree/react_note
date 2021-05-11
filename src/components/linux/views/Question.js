import React from "react";

const Question = ()=>{
        return(
            <div>
                <div >
                    <h3>nginx 常见问题</h3>
                    <img src={require('../../../assets/images/linux/nginx04.jpg')} alt=''/>
                    <img src={require('../../../assets/images/linux/nginx03.jpg')} alt=''/>
					<p>
						出现问题不用慌,看报错就好了.常用的排除方法是先"netstat -tunpl"查看端口有没有被占用.
						然后使用"nginx -t"查看报错信息.
					</p>
					<p>
						上面的报错是关于"ssl_certificate",即是使用了ssl证书,但是配置没有配置正确,
						"listen 443 ssl http2;"这是一个配置http2的配置.在阿里云服务器就不会出报错,
						这是出现在腾讯云服务器的问题."#"注释掉就好了.
					</p>
                </div>
                <div >
                    <h3></h3>
                    <p>
                    </p>
                </div>
            </div>
        );
    }

export default Question;