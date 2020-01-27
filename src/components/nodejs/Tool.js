import React from "react"


class Tool extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>监听工具</h3>
                <p>
                    每次修改代码都要重新开启node，会比较麻烦，引用自动化的工具主要有supervisor和nodemon两个
                    安装和使用方法都基本一致
                </p>
                <div className="hang">
                    <div>npm -g install supervisor <span>安装supervisor</span></div>
                    <div>npm -g install nodemon <span>安装nodemon</span></div>
                    <div>supervisor app.js <span>使用supervisor</span></div>
                    <div>nodemon app.js <span>使用nodemon</span></div>
                </div>
            </div>
            <div>
                <h3>淘宝镜像安装</h3>
                <pre>
                    <code>
                        {`
        npm install -g cnpm --registry=https://registry.npm.taobao.org
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>自定义项目</h3>
                <pre>
                    <code>
                        {`
        npm init --yes      生成 package.json

        npm install md5-node --save       写入到package.json 里面的  dependencies
        npm install md5-node --save-dev   写入到package.json 里面的  devDependencies
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default Tool;